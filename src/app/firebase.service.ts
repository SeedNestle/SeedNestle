import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  async checkEmailExists(email: string): Promise<boolean> {
    const userCollection = collection(this.firestore, 'users');
    const q = query(userCollection, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    return !querySnapshot.empty;
  }
}
