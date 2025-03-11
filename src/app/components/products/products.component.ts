import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories = ['Succulents & Cactus', 'Terrarium Plants', 'Accessories', 'Gift Hampers', 'Fertilizers'];
  selectedCategory = 'Succulents & Cactus';
  cartCount = 0; // ✅ Track cart item count

  products = [
    { id: 1, name: 'Shifty Plant', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top20.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 2, name: 'Chocolate Plant (Kalanchoe)', originalPrice: 170, price: 149, discount: '12% OFF', image: 'assets/top7-Euphorbia.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 3, name: 'Euphorbia Japonica', originalPrice: 182, price: 149, discount: '18% OFF', image: 'assets/top8-Echeveria.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 4, name: 'Pachyphytum Compactum', originalPrice: 182, price: 149, discount: '18% OFF', image: 'assets/top16.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 5, name: 'Echeveria Lilacina', originalPrice: 182, price: 149, discount: '18% OFF', image: 'assets/top19.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 6, name: 'Fertilizer A', originalPrice: 110, price: 99, discount: '10% OFF', image: 'assets/medi-spray.webp', category: 'Fertilizers', addedToCart: false },
    { id: 7, name: 'Gardening Gloves', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/rich-pot.webp', category: 'Accessories', addedToCart: false }
  ];

  filteredProducts = [...this.products];
  selectedProduct: any = null;
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.subscribeToCart();
  }

  subscribeToCart() {
    this.cartService.getCartItems().subscribe(cart => {
      this.cartItems = cart;
      this.syncCartState();
    });
  }

  syncCartState() {
    this.products.forEach(product => {
      product.addedToCart = this.cartItems.some(cartItem => cartItem.id === product.id);
    });

    this.cartCount = this.cartItems.length; // ✅ Update floating cart count
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = this.products.filter(p => p.category === category);
  }

  openProductDetails(product: any) {
    console.log('Opening product:', product);
    this.selectedProduct = this.products.find(p => p.id === product.id);
  }

  closeProductDetails() {
    this.selectedProduct = null;
  }

  toggleCart(product: any) {
    if (!product.addedToCart) {
      this.cartService.addToCart(product).then(() => {
        this.filteredProducts = this.filteredProducts.map(p => 
          p.id === product.id ? { ...p, addedToCart: true } : p
        );
        this.cartCount++; // ✅ Increase cart count
        console.log('Added to cart:', product);
      }).catch(error => console.error('Error adding to cart:', error));
    } else {
      this.cartService.removeCartItem(product.id).then(() => {
        this.filteredProducts = this.filteredProducts.map(p => 
          p.id === product.id ? { ...p, addedToCart: false } : p
        );
        this.cartCount--; // ✅ Decrease cart count
        console.log('Removed from cart:', product);
      }).catch(error => console.error('Error removing from cart:', error));
    }
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
