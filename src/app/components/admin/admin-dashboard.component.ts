import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="admin-dashboard">
      <aside class="sidebar">
        <ul>
          <li><a routerLink="sales">Total Sales</a></li>
          <li><a routerLink="expenses">Expenses</a></li>
          <li><a routerLink="billing">Billing</a></li>
          <li><a routerLink="invoices">Past Invoices</a></li>
        </ul>
      </aside>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .admin-dashboard {
      display: flex;
    }
    .sidebar {
      width: 200px;
      background: #eee;
      padding: 10px;
    }
    .content {
      flex: 1;
      padding: 20px;
    }
    ul { list-style: none; padding: 0; }
    li a {
      text-decoration: none;
      display: block;
      padding: 10px;
      color: black;
    }
    li a:hover {
      background: #ccc;
    }
  `]
})
export class AdminDashboardComponent {}
