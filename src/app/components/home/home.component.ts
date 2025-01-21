import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],  // Optional, required if you use directives like *ngFor, *ngIf
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Corrected typo here: 'styleUrl' -> 'styleUrls'
})
export class HomeComponent {
  email: string = '';
  message: string = ''; // To display success or error messages
  isError: boolean = false; // To style the message accordingly

  constructor(private http: HttpClient) {}

  subscribe() {
    // Validate email format before making the request
    if (!this.isValidEmail(this.email)) {
      this.message = 'Enter a valid email address';
      this.isError = true;
      return;
    }

    // Make the API call
    this.http.post('https://seednestle.vercel.app/api/subscribe', { email: this.email })
      .subscribe({
        next: (response: any) => {
          this.message = response.message || 'Subscription successful!';
          this.isError = false; // Success message
        },
        error: (error: any) => {
          this.message = error.error.error || 'Failed to subscribe';
          this.isError = true; // Error message
        }
      });
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  





  questions = [
    {
      title: 'I want to style my house/business with plants',
      description: 'Let’s create a green oasis together! Our personalised Plant Design Services can transform your space into a lush, welcoming environment. Schedule a consultation contact us!.',
      expanded: false,
    },
    {
      title: "I need someone to look after my plants while I'm away",
      description: 'No worries! I offer reliable Plant Sitting Services to ensure your plants are well-cared for while you’re away.  Our plant care experts will take care of your plants.',
      expanded: false,
    },
    {
      title: 'I need someone to look after plants (personal or commercial) on an ongoing basis',
      description: 'I’m here to help your plants thrive! Our Plant Maintenance Services keep your plants happy and healthy. Grab a quote for maintenance plan here. We offer ongoing plant care and maintenance services.',
      expanded: false,
    },
  ];

  toggleAnswer(question: any): void {
    question.expanded = !question.expanded;
  }
}
