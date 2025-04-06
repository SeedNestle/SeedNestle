import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuth = sessionStorage.getItem('admin-auth') === 'true';
    if (!isAuth) {
      this.router.navigate(['/admin-login']);
    }
    return isAuth;
  }
}
