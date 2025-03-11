import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
@Component({
  standalone: true, // ✅ Standalone component
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule, FormsModule] // ✅ Include FormsModule for ngModel
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
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
      alert("Your cart is empty!");
      return;
    }
  
    let message = "🛒 *Shopping Cart Details*%0A%0A";
    this.cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}%0A`;
    });
  
    const totalAmount = this.getTotalAmount();
    message += `%0A*Total Amount: ₹${totalAmount}*%0A%0A`;
    message += "Proceeding with the order. Please confirm.";
  
    // Replace the number with your WhatsApp number (include country code, no + sign)
    const whatsappNumber = "918217225662"; // Change this to your number
  
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
  
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
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