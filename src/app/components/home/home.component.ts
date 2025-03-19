import { Component , OnInit,OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../../services/email.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  email: string = '';
  message : string = '';
  
  isError: boolean = false; 

  constructor(private emailService: EmailService,private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]); // Navigate to the given path
  }

  subscribe() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!this.email || !emailPattern.test(this.email)) {
      this.isError = true;
      this.message = 'Please enter a valid email.';
      return;
    }

    this.emailService.addEmail(this.email)
      .then(() => {
        this.isError = false;
        this.message = 'Email stored successfully!';
        this.email = ''; // Clear input
      })
      .catch(() => {
        this.isError = true;
        this.message = 'Error storing email. Please try again.';
      });
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



  reviews = [
    {
      text: "Chandru did an exceptional job both with the plants and keeping me updated so that I wouldn't stress while I was away. I have already booked Sam for my next trip and would recommend her to anyone needing a reliable and knowledgeable plant sitter.",
      author: "— Aishwaraya"
    },
    {
      text: "Had a smooth experience, was helped with picking out the right plants and received a lot of information on how to take care of them.",
      author: "— Sharanya"
    },
    {
      text: "Great plant care, very professional and friendly. I will definitely use this service again.",
      author: "— Sanjay"
    }
  ];
  
  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextReview();
    }, 5000);
  }

  prevReview() {
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    this.resetAutoSlide();
  }

  nextReview() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    this.resetAutoSlide();
  }

  resetAutoSlide() {
    clearInterval(this.interval);
    this.startAutoSlide();
  }

}
