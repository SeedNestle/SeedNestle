import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AchivementsComponent } from './components/achivements/achivements.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminLoginComponent } from './components/admin/admin-login.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';

import { BillingComponent } from './components/admin/billing.component';
import { InvoicesComponent } from './components/admin/invoices.component';
import { DummySalesComponent } from './components/admin/dummy-sales.component';
import { DummyExpensesComponent } from './components/admin/dummy-expenses.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'achivements', component: AchivementsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin-login', component: AdminLoginComponent },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminAuthGuard],
    children: [
      { path: 'billing', component: BillingComponent },
      { path: 'invoices', component: InvoicesComponent },
      { path: 'sales', component: DummySalesComponent },
      { path: 'expenses', component: DummyExpensesComponent },
      { path: '', redirectTo: 'billing', pathMatch: 'full' }
    ]
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
