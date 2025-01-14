import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AchivementsComponent } from './components/achivements/achivements.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environment'; // Ensure this points to your environment
// import other components...

import { routes } from './app.routes'; // Import routes from app.routes.ts
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AchivementsComponent,
    GalleryComponent,
    ProductsComponent
    
    // other components...
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
