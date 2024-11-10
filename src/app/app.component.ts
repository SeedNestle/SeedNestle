import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // Import HeaderComponent and FooterComponent here
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
}
