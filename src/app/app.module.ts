import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ✅ Import Standalone CartComponent
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [AppComponent], // ❌ Remove CartComponent from declarations if standalone
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    CartComponent // ✅ Include standalone CartComponent here
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
