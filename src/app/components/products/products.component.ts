import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    this.fetchCartItems();
  }

  async fetchCartItems() {
    try {
      console.log('Connecting to Firestore...');
      const cartCollection = collection(this.firestore, 'carts');
      const querySnapshot = await getDocs(cartCollection);

      querySnapshot.forEach((doc) => {
        this.cartItems.push({ id: doc.id, ...doc.data() });
      });

      console.log('Fetched cart items:', this.cartItems);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  }
}
