import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(
    private router: Router,
    private seo: SeoService   // ✅ injected
  ) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Succulent & Cactus Plant Gallery',
      description: 'Browse our gallery of premium succulents, rare cacti, and tropical plants at SeedNestle. Find Echeveria, Haworthia, Sedum, Euphobia and more — all available to buy online.',
      keywords: 'succulent gallery, cactus plant photos, Echeveria varieties, rare plant collection, Haworthia, Sedum, indoor plants India',
      canonical: '/gallery'
    });
  }

  goToProductsPage() {
    this.router.navigate(['/products']);
  }
}