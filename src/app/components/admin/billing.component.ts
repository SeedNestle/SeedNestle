import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { CommonModule,DatePipe } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
@Component({
  standalone:true,
  imports: [CommonModule,
    FormsModule,
    DatePipe],
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
    billNo = '';
    date = new Date();
    items = [{ name: '', qty: 1, price: 0 }];
    discountPercent = 0;
    paymentMode = 'UPI';
  
    constructor(private router: Router, private firestore: Firestore) {}
  
    addItem() {
      this.items.push({ name: '', qty: 1, price: 0 });
    }
  
    
    removeItem(index: number) {
      this.items.splice(index, 1);
    }
  
    getSubtotal() {
      return this.items.reduce((sum, item) => sum + item.qty * item.price, 0);
    }
  
    getDiscountValue() {
      return Math.round((this.discountPercent / 100) * this.getSubtotal());
    }
  
    getFinalTotal() {
      return this.getSubtotal() - this.getDiscountValue();
    }
  
    async generateBill() {
      if (!this.billNo.trim()) {
        alert('Please enter a bill number!');
        return;
      }
  
      const invoiceData = {
        billNo: this.billNo,
        date: this.date,
        items: this.items.map(i => ({
          ...i,
          total: i.qty * i.price
        })),
        discount: this.discountPercent,
        paymentMode: this.paymentMode,
        finalTotal: this.getFinalTotal()
      };
  
      const invoiceRef = collection(this.firestore, 'invoices');
      await addDoc(invoiceRef, invoiceData);
  
      alert('✅ Bill Generated Successfully!');
      

    }
}
