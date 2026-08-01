import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { SeoService } from '../../services/seo.service';

@Component({
  standalone: true,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private seo: SeoService   // ✅ injected
  ) {}

  ngOnInit() {
    // Cart should not be indexed by search engines
    this.seo.updateSeo({
      title: 'Your Shopping Cart',
      description: 'Review your selected plants, seeds, and accessories in your SeedNestle cart. Checkout securely via WhatsApp.',
      canonical: '/cart'
    });

    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  updateQuantity(id: string, quantity: number) {
    this.cartService.updateCartItem(id, quantity).then(() => {
      console.log(`Updated item ${id} to quantity: ${quantity}`);
    });
  }

  removeItem(itemId: string) {
    this.cartService.removeCartItem(itemId);
  }

  proceedToCheckout() {
    if (this.cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    let message = '🛒 *Shopping Cart Details*%0A%0A';
    this.cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}%0A`;
    });

    const totalAmount = this.getTotalAmount();
    message += `%0A*Total Amount: ₹${totalAmount}*%0A%0A`;
    message += 'Proceeding with the order. Please confirm.';

    const whatsappNumber = '918970117954';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  changeQuantity(item: any, amount: number) {
    const newQuantity = item.quantity + amount;
    if (newQuantity > 0) {
      item.quantity = newQuantity;
    }
  }

  getTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}