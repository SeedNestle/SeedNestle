
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly siteName = 'SeedNestle';
  private readonly baseUrl = 'https://www.seednestle.in'; // ✅ Replace with your real domain
  private readonly defaultOgImage = `${this.baseUrl}/assets/og-default.jpg`;

  constructor(private meta: Meta, private title: Title) {}

  updateSeo(config: SeoConfig): void {
    const fullTitle = `${config.title} | ${this.siteName}`;
    const canonical = config.canonical
      ? `${this.baseUrl}${config.canonical}`
      : this.baseUrl;
    const ogImage = config.ogImage || this.defaultOgImage;

    // ── Basic ──────────────────────────────────────────
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // ── Canonical ──────────────────────────────────────
    this.setCanonical(canonical);

    // ── Open Graph ────────────────────────────────────
    this.meta.updateTag({ property: 'og:title',       content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image',       content: ogImage });
    this.meta.updateTag({ property: 'og:url',         content: canonical });
    this.meta.updateTag({ property: 'og:type',        content: 'website' });
    this.meta.updateTag({ property: 'og:site_name',   content: this.siteName });

    // ── Twitter Card ──────────────────────────────────
    this.meta.updateTag({ name: 'twitter:card',        content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title',       content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image',       content: ogImage });
  }

  private setCanonical(url: string): void {
    // Remove existing canonical tag to avoid duplicates
    const existing = document.querySelector('link[rel="canonical"]');
    if (existing) {
      existing.setAttribute('href', url);
    } else {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }
}