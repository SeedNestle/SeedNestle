import { Component, AfterViewInit } from '@angular/core';
import { Firestore, collection, addDoc, onSnapshot } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-sales',
  imports: [CommonModule, FormsModule],
  template: `
    <div style="max-width: 900px; margin: auto; padding: 20px; font-family: Arial;">
      <h2 style="text-align: center; margin-bottom: 20px;">Sales Entry</h2>

      <div style="margin-bottom: 15px; display: flex; gap: 10px;">
        <input type="number" [(ngModel)]="cost" placeholder="Enter cost" style="flex: 1; padding: 8px;" />
        <button (click)="addCost()" style="padding: 8px 16px;">Add</button>
      </div>

      <!-- grid of columns: each column contains up to ITEMS_PER_COLUMN items -->
      <div id="costGrid" class="gridContainer" style="margin-bottom: 20px;"></div>

      <div style="font-size: 18px; font-weight: bold; text-align: center;">
        Total Sales: ₹{{ total }}
      </div>
    </div>
  `,
  styles: [`
    /* layout: columns flow left-to-right; horizontal scroll when many columns */
    .gridContainer {
      display: flex;
      gap: 12px;
      overflow-x: auto; /* allow horizontal scroll if many columns */
      padding-bottom: 6px;
    }

    .column {
      min-width: 160px; /* column width */
      max-width: 220px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 6px;
      background: transparent;
    }

    .column .item {
      background: #f0f0f0;
      padding: 8px;
      border-radius: 4px;
      height: 40px; /* fixed item height */
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
  `]
})
export class DummySalesComponent implements AfterViewInit {
  cost: number = 0;
  total: number = 0;

  // store the full sale objects (amount, timestamp)
  sales: { amount: number; timestamp?: any; id?: string }[] = [];

  private _initialLoad = true; // track first snapshot
  private readonly ITEMS_PER_COLUMN = 10; // change this to alter how many items appear per column

  constructor(private firestore: Firestore) {}

  ngAfterViewInit(): void {
    const salesRef = collection(this.firestore, 'sales');

    onSnapshot(salesRef, (snapshot) => {
      // On the very first snapshot, populate the list in the order returned by Firestore
      if (this._initialLoad) {
        this.sales = snapshot.docs.map(doc => {
          const d = doc.data() as any;
          return {
            id: doc.id,
            amount: typeof d['amount'] === 'number' ? d['amount'] : Number(d['amount']) || 0,
            timestamp: d['timestamp']
          };
        });
        this._initialLoad = false;
      } else {
        // For subsequent snapshots, apply docChanges so that newly added docs are appended to the end
        const changes = snapshot.docChanges();
        changes.forEach(change => {
          const doc = change.doc;
          const d = doc.data() as any;
          const entry = {
            id: doc.id,
            amount: typeof d['amount'] === 'number' ? d['amount'] : Number(d['amount']) || 0,
            timestamp: d['timestamp']
          };

          if (change.type === 'added') {
            // append new entries to the end
            this.sales.push(entry);
          } else if (change.type === 'modified') {
            const idx = this.sales.findIndex(s => s.id === doc.id);
            if (idx !== -1) this.sales[idx] = entry;
          } else if (change.type === 'removed') {
            this.sales = this.sales.filter(s => s.id !== doc.id);
          }
        });
      }

      // recompute total using current array order
      this.total = this.sales.reduce((sum, s) => sum + (s.amount || 0), 0);

      // render grid columns with ITEMS_PER_COLUMN items each; newest entries are at the end and will create new columns when needed
      this.renderGrid();
    });
  }

  async addCost(): Promise<void> {
    if (!this.cost || this.cost <= 0) {
      alert('Please enter a valid cost amount.');
      return;
    }

    const salesRef = collection(this.firestore, 'sales');
    await addDoc(salesRef, {
      amount: this.cost,
      timestamp: Date.now()
    });

    this.cost = 0; // reset input
  }

  renderGrid(): void {
    const grid = document.getElementById('costGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (this.sales.length === 0) return;

    const cols = Math.ceil(this.sales.length / this.ITEMS_PER_COLUMN);

    for (let c = 0; c < cols; c++) {
      const colDiv = document.createElement('div');
      colDiv.className = 'column';

      const start = c * this.ITEMS_PER_COLUMN;
      const end = Math.min(start + this.ITEMS_PER_COLUMN, this.sales.length);
      for (let i = start; i < end; i++) {
        const entry = this.sales[i];
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = `#${i + 1} - ₹${entry.amount}`;
        colDiv.appendChild(item);
      }

      grid.appendChild(colDiv);
    }
  }
}
