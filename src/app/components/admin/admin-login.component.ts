import { Component, inject } from '@angular/core';
import { signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email = '';
  password = '';

  // ✅ inject the Auth instance provided by AngularFire
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);

  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        sessionStorage.setItem('admin-auth', 'true');
        this.router.navigate(['/admin-dashboard']);
      })
      .catch(err => alert('Invalid credentials'));
  }
}
