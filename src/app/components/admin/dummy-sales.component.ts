import { Component, AfterViewInit } from '@angular/core';
import { Firestore, collection, addDoc, onSnapshot } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-sales',
  imports: [CommonModule, FormsModule],
  template: `
    <div style="max-width: 500px; margin: auto; padding: 20px; font-family: Arial;">
      <h2 style="text-align: center; margin-bottom: 20px;">Sales Entry</h2>

      <div style="margin-bottom: 15px; display: flex; gap: 10px;">
        <input type="number" [(ngModel)]="cost" placeholder="Enter cost" style="flex: 1; padding: 8px;" />
        <button (click)="addCost()" style="padding: 8px 16px;">Add</button>
      </div>

      <div id="costList" style="margin-bottom: 20px;"></div>

      <div style="font-size: 18px; font-weight: bold; text-align: center;">
        Total Sales: ₹{{ total }}
      </div>
    </div>
  `,
  styles: [`
    #costList div {
      background: #f0f0f0;
      padding: 8px;
      margin-bottom: 5px;
      border-radius: 4px;
    }
  `]
})
export class DummySalesComponent implements AfterViewInit {
  cost: number = 0;
  total: number = 0;

  // store the full sale objects (amount, timestamp, optional name)
  sales: { amount: number; timestamp?: any; name?: string; id?: string }[] = [];

  constructor(private firestore: Firestore) {}

  ngAfterViewInit(): void {
    const salesRef = collection(this.firestore, 'sales');

    onSnapshot(salesRef, (snapshot) => {
      // map docs to objects with amount, timestamp and optional name
      this.sales = snapshot.docs.map(doc => {
        const d = doc.data() as any;
        return {
          id: doc.id,
          amount: typeof d['amount'] === 'number' ? d['amount'] : Number(d['amount']) || 0,
          timestamp: d['timestamp'],
          name: d['name'] || '' // show name if present, else blank
        };
      });

      // sort descending by timestamp (newest first). Handles number or Firestore Timestamp.
      const getTime = (val: any) => {
        if (!val) return 0;
        if (typeof val === 'number') return val;
        if (val instanceof Date) return val.getTime();
        if (typeof val.toDate === 'function') return val.toDate().getTime();
        const parsed = Date.parse(String(val));
        return Number.isNaN(parsed) ? 0 : parsed;
      };

      this.sales.sort((a, b) => getTime(b.timestamp) - getTime(a.timestamp));

      // recompute total
      this.total = this.sales.reduce((sum, s) => sum + (s.amount || 0), 0);

      // render list showing index, name (if present) and amount in the sorted order
      this.renderCosts();
    });
  }

  async addCost(): Promise<void> {
    if (!this.cost || this.cost <= 0) {
      alert('Please enter a valid cost amount.');
      return;
    }

    const salesRef = collection(this.firestore, 'sales');
    // NO CHANGE to existing write behaviour (still writes amount & timestamp only)
    await addDoc(salesRef, {
      amount: this.cost,
      timestamp: Date.now()
    });

    this.cost = 0; // reset input
  }

  renderCosts(): void {
    const listDiv = document.getElementById('costList');
    if (listDiv) {
      listDiv.innerHTML = '';
      this.sales.forEach((entry, index) => {
        const div = document.createElement('div');
        const namePart = entry.name && entry.name.trim() ? ` - ${entry.name.trim()}` : '';
        div.textContent = `#${index + 1}${namePart} - ₹${entry.amount}`;
        listDiv.appendChild(div);
      });
    }
  }
}
