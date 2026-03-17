import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private seo: SeoService) {}  // ✅ injected

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Plant Care & Landscaping Services',
      description: 'SeedNestle offers expert plant care, balcony garden setup, landscaping, drip irrigation, office greenscaping, and corporate plant gifting services. Get a free quote today.',
      keywords: 'plant care services, balcony garden setup, landscaping services, gardener on call, drip irrigation, office plants, corporate plant gifting, vertical garden installation',
      canonical: '/services'
    });
  }
}