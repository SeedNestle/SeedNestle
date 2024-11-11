import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AchivementsComponent } from './components/achivements/achivements.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'achivements', component: AchivementsComponent},
  {path:'gallery',component:GalleryComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
