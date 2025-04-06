import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // or your routes location
import { AppComponent } from './app/app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBtAu0SZRi6WpxVhA6MUV7Vs7SL-NYMq8o",
    authDomain: "seednestle-93a3e.firebaseapp.com",
    projectId: "seednestle-93a3e",
    storageBucket: "seednestle-93a3e.firebasestorage.app",
    messagingSenderId: "157068886012",
    appId: "1:157068886012:web:0ea6372f65952cde23bc79"
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ]
});
