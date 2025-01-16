import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],  // Optional, required if you use directives like *ngFor, *ngIf
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Corrected typo here: 'styleUrl' -> 'styleUrls'
})
export class HomeComponent {
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
