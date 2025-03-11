import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, updateDoc, deleteDoc, collectionData, query, where, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private sessionId: string;

  constructor(private firestore: Firestore) {
    this.sessionId = this.getSessionId();
  }

  // Generate or retrieve a session ID
  private getSessionId(): string {
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = 'guest_' + Math.random().toString(36).substr(2, 9); // Random guest ID
      localStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  }

  // ✅ Add or update item in cart
  async addToCart(product: any) {
    const cartRef = collection(this.firestore, `cart/${this.sessionId}/items`);
    const q = query(cartRef, where('id', '==', product.id));
    const existingItems = await getDocs(q);

    if (!existingItems.empty) {
      // ✅ If item exists, update quantity
      const docSnap = existingItems.docs[0];
      const existingData = docSnap.data();
      const newQuantity = (existingData['quantity'] || 1) + 1;

      return updateDoc(docSnap.ref, { quantity: newQuantity });
    } else {
      // ✅ If item does not exist, add new item with quantity
      return addDoc(cartRef, { ...product, quantity: 1 });
    }
  }

  // ✅ Get all cart items (Live Updates)
  getCartItems(): Observable<any[]> {
    const cartRef = collection(this.firestore, `cart/${this.sessionId}/items`);
    return collectionData(cartRef, { idField: 'id' }); // Returns live updates
  }

  // ✅ Update cart item quantity
  async updateCartItem(itemId: string, quantity: number) {
    if (quantity <= 0) {
      return this.removeCartItem(itemId); // If quantity is 0, remove item
    }
    const itemRef = doc(this.firestore, `cart/${this.sessionId}/items/${itemId}`);
    return updateDoc(itemRef, { quantity });
  }

  // ✅ Remove item from cart
  async removeCartItem(itemId: string) {
    const itemRef = doc(this.firestore, `cart/${this.sessionId}/items/${itemId}`);
    return deleteDoc(itemRef);
  }
}
