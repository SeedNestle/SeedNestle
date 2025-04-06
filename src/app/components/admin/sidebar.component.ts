import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="sidebar">
      <a routerLink="./sales">Total Sales</a>
      <a routerLink="./expenses">Expenses</a>
      <a routerLink="./billing">Billing</a>
      <a routerLink="./invoices">Past Invoices</a>
    </nav>
  `,
  styles: [`
    .sidebar {
      width: 200px;
      background: #f0f0f0;
      height: 100vh;
      padding: 20px;
    }
    .sidebar a {
      display: block;
      padding: 10px;
      color: #333;
      text-decoration: none;
      font-weight: bold;
    }
    .sidebar a:hover {
      background-color: #d4edda;
    }
  `]
})
export class SidebarComponent {}
