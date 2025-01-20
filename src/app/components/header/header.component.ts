import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {}

  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  navigateTo(path: string) {
    // Check if running in the browser before navigating
    if (isPlatformBrowser(this.platformId)) {
      this.router.navigate([path]);
      this.closeMenu();
    }
  }

  closeMenu() {
    this.menuOpen = false; // Close the menu when a link is clicked
  }
}
