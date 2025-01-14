import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  menuOpen : boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  gallery() {
    this.router.navigate(['/gallery']);
  }

  achivements() {
    this.router.navigate(['/achivements']);
  }

  products() {
    this.router.navigate(['/products']);
  }

  closeMenu() {
    this.menuOpen = false; // Close the menu when a link is clicked
  }

  home() {
    this.router.navigate(['/home']);
  }
}
