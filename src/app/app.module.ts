import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { AchivementsComponent } from './components/achivements/achivements.component';
import { GalleryComponent } from './components/gallery/gallery.component';

// import other components...

import { routes } from './app.routes'; // Import routes from app.routes.ts

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AchivementsComponent,
    GalleryComponent
    
    // other components...
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configure router with routes
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
