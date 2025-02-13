import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

// ✅ Import Firebase modules
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp, getApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    CommonModule,
    FormsModule
  ],
  providers: [
    // ✅ Correct placement for Firebase providers in NgModule
    { provide: 'FIREBASE_APP', useFactory: () => initializeApp(environment.firebase) },
    { provide: 'AUTH', useFactory: () => getAuth(getApp()) },
    { provide: 'FIRESTORE', useFactory: () => getFirestore(getApp()) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
