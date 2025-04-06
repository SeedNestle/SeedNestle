import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ✅ Import Standalone CartComponent
import { CartComponent } from './components/cart/cart.component';


import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AdminLoginComponent } from './components/admin/admin-login.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; // if you created separate routing module


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule, // If you're using routes in app.module directly
    AppRoutingModule, // Only if you've separated routes into app-routing.module.ts
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    CartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
