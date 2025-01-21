import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { Router, NavigationEnd } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent], 
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [`
    /* Inline CSS for your app component */
  `]
})
export class AppComponent {
  title = 'SeedNestle';
  constructor(private router: Router) {
    // Trigger analytics on every route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (typeof window !== 'undefined' && window.Analytics) {
          window.Analytics.page();
        }
      }
    });
}
}