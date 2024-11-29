import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AchivementsComponent } from './components/achivements/achivements.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProductsComponent } from './components/products/products.component';
import { Component } from '@angular/core';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'achivements', component: AchivementsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'products',component:ProductsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
