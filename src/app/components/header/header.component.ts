import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule],
})
export class HeaderComponent {
  menuOpen = false;
  dropdownOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    this.dropdownOpen = false;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.closeMenu(); // Close menu after navigation
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
