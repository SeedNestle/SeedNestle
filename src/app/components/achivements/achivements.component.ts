import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-achivements',
  standalone: true,
  imports: [],
  templateUrl: './achivements.component.html',
  styleUrls: ['./achivements.component.css']
})
export class AchivementsComponent implements OnInit {

  constructor(private seo: SeoService) {}   // ✅ injected

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'About Us — Sowing the Seeds of a Greener Tomorrow',
      description: 'Learn about SeedNestle — our mission to provide premium plant seeds, tools, and expert plant care services. We help you grow a lifestyle rooted in wellness, beauty, and harmony with nature.',
      keywords: 'about SeedNestle, plant store India, succulent nursery, plant care mission, greener tomorrow, nature lifestyle',
      canonical: '/achivements'
    });
  }
}