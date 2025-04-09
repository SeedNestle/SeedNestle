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
  costs: number[] = [];

  constructor(private firestore: Firestore) {}

  ngAfterViewInit(): void {
    const salesRef = collection(this.firestore, 'sales');

    onSnapshot(salesRef, (snapshot) => {
      this.costs = snapshot.docs.map(doc => doc.data()['amount']);
      this.total = this.costs.reduce((sum, val) => sum + val, 0);
      this.renderCosts();
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

  renderCosts(): void {
    const listDiv = document.getElementById('costList');
    if (listDiv) {
      listDiv.innerHTML = '';
      this.costs.forEach((amount, index) => {
        const div = document.createElement('div');
        div.textContent = `#${index + 1} - ₹${amount}`;
        listDiv.appendChild(div);
      });
    }
  }
}
