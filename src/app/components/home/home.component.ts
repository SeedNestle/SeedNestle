import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

interface ApiResponse {
  message: string;
  status: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string = '';
  message: string = ''; 
  isError: boolean = false; 

  constructor(private http: HttpClient) {}

  subscribe() {
    const trimmedEmail = this.email.trim();

    if (!this.isValidEmail(trimmedEmail)) {
      this.message = '❌ Enter a valid email address';
      this.isError = true;
      return;
    }

    this.message = ''; // Reset message before sending request
    this.isError = false;

    const scriptURL = "https://script.google.com/macros/s/AKfycby3Aw1w_4CEi3iZzbVA3lDjzj0yA6q7JuT63zwWoGg5pppsyogoCXOsSef7F5R-2-SMIw/exec";
    const formData = { email: trimmedEmail };

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });

    this.http.post<ApiResponse>(scriptURL, formData, { headers, responseType: 'json' })
      .subscribe({
        next: (response: ApiResponse) => {
          console.log('Response:', response);
          this.handleResponse(response.message);
        },
        error: (error: any) => {
          console.error('Subscription Error:', error);
          this.message = '❌ Failed to subscribe. Please try again.';
          this.isError = true;
        }
      });
  }

  handleResponse(responseMessage: string) {
    const message = responseMessage.toLowerCase().trim();

    switch (message) {
      case 'success':
        this.message = '✅ Subscription successful!';
        this.isError = false;
        break;
      case 'already registered':
        this.message = '⚠️ Email is already registered!';
        this.isError = true;
        break;
      case 'invalid email':
        this.message = '❌ Invalid email format!';
        this.isError = true;
        break;
      default:
        this.message = '❌ Unexpected response. Try again!';
        this.isError = true;
    }
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
