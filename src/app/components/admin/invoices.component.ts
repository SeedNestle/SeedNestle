import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Past Invoices</h2>

    <div class="invoice-list">
      <div *ngFor="let invoice of invoices">
        <p class="bill-link" (click)="viewInvoice(invoice.billNo)">
          🧾 Bill No: <strong>{{ invoice.billNo }}</strong>
        </p>
        <button (click)="downloadPDF(invoice.billNo)">Download PDF</button>
      </div>
    </div>

    <div *ngIf="selectedInvoice" [id]="'invoice-' + selectedInvoice.billNo" class="invoice-card">
      <div class="bill-info">
        <p><strong>Bill No:</strong> {{ selectedInvoice.billNo }}</p>
      </div>

      <table>
        <tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr>
        <tr *ngFor="let i of selectedInvoice.items">
          <td>{{ i.name }}</td><td>{{ i.qty }}</td><td>{{ i.price }}</td><td>{{ i.total }}</td>
        </tr>
        <tr>
          <th colspan="3">Discount ({{ selectedInvoice.discount }}%)</th>
          <th>-{{ getDiscountAmount(selectedInvoice) }}</th>
        </tr>
        <tr>
          <th colspan="3">Final Total</th>
          <th>{{ selectedInvoice.finalTotal }}</th>
        </tr>
      </table>

      <div class="payment-info">
        <p><strong>Payment Mode:</strong> {{ selectedInvoice.paymentMode }}</p>
        <p><strong>Authorized By:</strong> SeedNestle Company</p>
      </div>

      <div class="footer">
        <p>🌱 Visit our website: <a href="https://seednestle.in">seednestle.in</a></p>
        <p>📷 Follow us on Instagram: <a href="https://instagram.com/seednestle">&#64;seednestle</a></p>
        <p>🎁 For custom orders & bulk inquiries: <strong>+91-8217225662</strong></p>
        <p class="thank-you">*Thank you for shopping with SeedNestle! Keep growing!*</p>
      </div>
    </div>
  `,
  styles: [`
    .invoice-list {
      margin-bottom: 30px;
    }
    .bill-link {
      cursor: pointer;
      color: #007bff;
      text-decoration: underline;
      display: inline-block;
      margin-right: 10px;
    }
    .invoice-card {
      border: 1px solid #ccc;
      padding: 20px;
      background: #f9f9f9;
      max-width: 600px;
    }
    .bill-info, .payment-info, .footer {
      margin-top: 15px;
      font-size: 16px;
    }
    .footer {
      text-align: center;
      font-size: 14px;
    }
    .footer a {
      color: #007bff;
      font-weight: bold;
      text-decoration: none;
    }
    .thank-you {
      margin-top: 10px;
      font-style: italic;
      font-weight: bold;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    th, td {
      border: 1px solid #aaa;
      padding: 6px;
      text-align: left;
    }
  `]
})
export class InvoicesComponent implements OnInit {
  invoices: any[] = [];
  selectedInvoice: any = null;

  constructor(private firestore: Firestore) {}

  async ngOnInit() {
    const snapshot = await getDocs(collection(this.firestore, 'invoices'));
    this.invoices = snapshot.docs.map(doc => doc.data());
  }

  viewInvoice(billNo: string) {
    this.selectedInvoice = this.invoices.find(i => i.billNo === billNo);
  }

  getDiscountAmount(invoice: any): number {
    const total = invoice.items.reduce((sum: number, i: any) => sum + i.total, 0);
    return Math.round((invoice.discount / 100) * total);
  }

  downloadPDF(billNo: string) {
    const element = document.getElementById(`invoice-${billNo}`);
    if (element) {
      html2pdf().from(element).save(`${billNo}.pdf`);
    }
  }
}
