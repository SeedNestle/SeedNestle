import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, onSnapshot, doc, updateDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-dummy-expenses',
  imports: [CommonModule, FormsModule],
  template: `
    <div style="max-width: 700px; margin: auto; padding: 20px;">
      <h2 style="text-align: center;">Business Expenses</h2>

      <!-- New Bill Creation -->
      <div style="margin-bottom: 30px;">
        <input [(ngModel)]="newBillTitle" placeholder="New Bill Title" />
        <button (click)="createNewBill()">Create Bill</button>
      </div>

      <!-- List of Bills -->
      <div *ngFor="let bill of bills" style="margin-bottom: 20px; border: 1px solid #ccc; padding: 15px; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; cursor: pointer;" (click)="toggleBill(bill.id)">
          <strong>{{ bill.title }}</strong>
          <span>Total: ₹{{ bill.total || 0 }}</span>
        </div>

        <div *ngIf="openedBillId === bill.id" style="margin-top: 10px;">
          <div *ngFor="let entry of bill.entries; let i = index">
            {{ i + 1 }}. {{ entry.name }} - ₹{{ entry.cost }}
          </div>

          <div style="margin-top: 10px;">
            <input [(ngModel)]="entryName" placeholder="Expense Name" />
            <input [(ngModel)]="entryCost" type="number" placeholder="Cost" />
            <button (click)="addEntry(bill)">Add Entry</button>
          </div>
        </div>
      </div>

      <!-- Grand Total -->
      <div style="text-align: center; font-size: 18px; margin-top: 30px;">
        <strong>Grand Total: ₹{{ grandTotal }}</strong>
      </div>
    </div>
  `
})
export class DummyExpensesComponent implements OnInit {
  bills: any[] = [];
  grandTotal: number = 0;
  openedBillId: string | null = null;

  newBillTitle: string = '';
  entryName: string = '';
  entryCost: number = 0;

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    const billsRef = collection(this.firestore, 'expenses');
    onSnapshot(billsRef, (snapshot) => {
      // map docs to objects
      this.bills = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // client-side sort: descending (newest first)
      // prefer createdAt (supports number timestamp or Firestore Timestamp)
      const getTime = (val: any) => {
        if (!val) return 0;
        if (typeof val === 'number') return val;
        if (val instanceof Date) return val.getTime();
        if (typeof val.toDate === 'function') return val.toDate().getTime();
        const parsed = Date.parse(String(val));
        return Number.isNaN(parsed) ? 0 : parsed;
      };

      this.bills.sort((a, b) => {
        const ta = getTime(a.createdAt);
        const tb = getTime(b.createdAt);
        if (tb !== ta) return tb - ta; // newer first by createdAt

        // fallback: sort by total descending
        const an = a.total || 0;
        const bn = b.total || 0;
        if (bn !== an) return bn - an;

        // final fallback: id string compare (descending)
        return String(b.id).localeCompare(String(a.id));
      });

      this.calculateGrandTotal();
    });
  }

  calculateGrandTotal(): void {
    this.grandTotal = this.bills.reduce((sum, bill) => sum + (bill.total || 0), 0);
  }

  toggleBill(billId: string): void {
    this.openedBillId = this.openedBillId === billId ? null : billId;
    this.entryName = '';
    this.entryCost = 0;
  }

  async createNewBill(): Promise<void> {
    if (!this.newBillTitle.trim()) return;

    const expensesRef = collection(this.firestore, 'expenses');
    await addDoc(expensesRef, {
      title: this.newBillTitle.trim(),
      entries: [],
      total: 0,
      createdAt: Date.now()
    });

    this.newBillTitle = '';
  }

  async addEntry(bill: any): Promise<void> {
    if (!this.entryName.trim() || this.entryCost <= 0) return;

    const updatedEntries = [...(bill.entries || []), { name: this.entryName, cost: this.entryCost }];
    const newTotal = updatedEntries.reduce((sum, e) => sum + e.cost, 0);
    const docRef = doc(this.firestore, `expenses/${bill.id}`);

    await updateDoc(docRef, {
      entries: updatedEntries,
      total: newTotal
    });

    this.entryName = '';
    this.entryCost = 0;
  }
}
