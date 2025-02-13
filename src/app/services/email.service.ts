import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private firestore: Firestore) {}

  addEmail(email: string) {
    const emailsRef = collection(this.firestore, 'emails');
    return addDoc(emailsRef, { email, timestamp: new Date() });
  }
}
