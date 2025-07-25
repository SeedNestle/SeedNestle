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
  categories = ['Succulents & Cactus', 'Terrarium Plants', 'Accessories', 'Gift Hampers', 'Fertilizers','Seeds'];
  selectedCategory = 'Succulents & Cactus';
  cartCount = 0; // ✅ Track cart item count

  products = [
    { id: 1, name: 'Mammillaria carmenae', originalPrice: 229, price: 159, discount: '12% OFF', image: 'assets/top1-Mammillaria carmenae.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 2, name: 'Chocolate Plant (Kalanchoe)', originalPrice: 199, price: 149, discount: '12% OFF', image: 'assets/top2-chocolate soldier-Kalanchoe tomentosa.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 3, name: 'Euphorbia Japonica', originalPrice: 249, price: 169, discount: '18% OFF', image: 'assets/top3-Euphobia japonica.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 4, name: 'Pachyphytum Compactum', originalPrice: 199, price: 159, discount: '18% OFF', image: 'assets/top4Pachyphytum Compactum.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 5, name: 'Echeveria Lilacina', originalPrice: 189, price: 149, discount: '18% OFF', image: 'assets/top5-Echeveria lilacina.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 6, name: 'Sempervivum calcareum', originalPrice: 410, price: 99, discount: '10% OFF', image: 'assets/medi-spray.webp', category: 'Fertilizers', addedToCart: false },
    { id: 7, name: 'Euphorbia globosa ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top7-Euphorbia.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 8, name: 'Echeveria ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top8-Echeveria.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 9, name: 'Sedum clavatum ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top9-sedum clavantum.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 10, name: 'Echeveria ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top10-echeveria.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 11, name: 'Pedilanthus (Euphorbia tithymaloides) ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top11-Pedilanthus, Euphorbia tithymaloides.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 12, name: 'Echeveria ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top12-Echeveria.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 13, name: 'Pedilanthus tithymaloides ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top13-Pedilanthus Tithymaloides.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 14, name: 'Echeveria (green spoon)', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top14-Echeveria green spoon.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 15, name: 'Sedum lineare ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top15 sedum lineare.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 16, name: 'Haworthia cymbiformis ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top16.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 17, name: 'Euphorbia trigona ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top17 euphorbia trigona.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 18, name: 'Mammillaria gracilis ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top18 mammilaria gracillis.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 19, name: 'Pachyphytum oviferum ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top19.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 20, name: 'Agave (Burnt Burgundy) ', originalPrice: 180, price: 159, discount: '13% OFF', image: 'assets/top20.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 21, name: 'Mammillaria elongata (Green) ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top21.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 22, name: 'Haworthia cooperi ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top22 Haworthia cooperi.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 23, name: 'Lenophyllum texanum ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top23.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 24, name: 'Sedum (Little Gem) ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top24 sedum little gem.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 25, name: 'Aloe (Pink Bluish)', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top25.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 26, name: 'Haworthia retusa ', originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top26 haworthia retusa.webp', category: 'Succulents & Cactus', addedToCart: false },
    { id: 27, name: 'Haworthia fasciata', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/top27 haworthia fasciata.webp', category: 'Terrarium Plants', addedToCart: false },
    { id: 28, name: 'Haworthia rouded', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/top29.webp', category: 'Terrarium Plants', addedToCart: false },
    { id: 29, name: 'Beans seeds', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/beans.jpg', category: 'Seeds', addedToCart: false },
    { id: 30, name: 'Beetroot', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/beetroot_1.jpg', category: 'Seeds', addedToCart: false },
    { id: 31, name: 'Beetroot', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/beetroot_2.jpg', category: 'Seeds', addedToCart: false },
    { id: 32, name: 'Bitter Gourd', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/bitter_gourd_1.jpg', category: 'Seeds', addedToCart: false },
    { id: 33, name: 'Bitter Gourd ', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/bitter_gourd_2.jpg', category: 'Seeds', addedToCart: false },
    { id: 34, name: 'Brinjal ', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/brinjal.jpg', category: 'Seeds', addedToCart: false },
    { id: 35, name: 'Cabbage', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/cabbage.jpg', category: 'Seeds', addedToCart: false },
    { id: 36, name: 'Capsicum', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/capsicum.jpg', category: 'Seeds', addedToCart: false },
    { id: 37, name: 'Carrot', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/carrot.jpg', category: 'Seeds', addedToCart: false },
    { id: 38, name: 'Choyote', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/choyote.jpg', category: 'Seeds', addedToCart: false },
    { id: 39, name: 'Corn', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/corn.jpg', category: 'Seeds', addedToCart: false },
    { id: 40, name: 'Cucumber', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/cucumber.jpg', category: 'Seeds', addedToCart: false },
    { id: 41, name: 'Green Chilli', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/green_chilli.jpg', category: 'Seeds', addedToCart: false },
    { id: 42, name: 'Green Lettuce', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/green_lettuce.jpg', category: 'Seeds', addedToCart: false },
    { id: 43, name: 'Kohlrabi', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/kohlrabi.jpg', category: 'Seeds', addedToCart: false },
    { id: 44, name: 'Ladies Finger', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/ladies_finger.jpg', category: 'Seeds', addedToCart: false },
    { id: 45, name: 'Long Beans', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/long_beans.jpg', category: 'Seeds', addedToCart: false },
    { id: 46, name: 'Onion', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/onion.jpg', category: 'Seeds', addedToCart: false },
    { id: 47, name: 'Pea', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/pea_1.jpg', category: 'Seeds', addedToCart: false },
    { id: 48, name: 'Pea', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/pea.jpg', category: 'Seeds', addedToCart: false },
    { id: 49, name: 'Pumpkin', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/pumpkin.jpg', category: 'Seeds', addedToCart: false },
    { id: 50, name: 'Red Round Radish', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/red_round_radish.jpg', category: 'Seeds', addedToCart: false },
    { id: 51, name: 'Tomato', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/tomato.jpg', category: 'Seeds', addedToCart: false },
    { id: 52, name: 'White radish', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/white_raddish.jpg', category: 'Seeds', addedToCart: false },
    { id: 53, name: 'White Round Radish', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/white_round_radish_1.jpg', category: 'Seeds', addedToCart: false },
    { id: 54, name: 'White Round Radish', originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/white_round_radish_2.jpg', category: 'Seeds', addedToCart: false },



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
        product.addedToCart = true;
        
        // ✅ Update filteredProducts properly
        this.filteredProducts = this.filteredProducts.map(p => 
          p.id === product.id ? { ...p, addedToCart: true } : p
        );
  
        // ✅ Force modal UI update by creating a new object reference
        if (this.selectedProduct && this.selectedProduct.id === product.id) {
          this.selectedProduct = Object.assign({}, this.selectedProduct, { addedToCart: true });
        }
  
        this.cartCount++; // ✅ Update cart count
      }).catch(error => console.error('Error adding to cart:', error));
    } else {
      this.cartService.removeCartItem(product.id).then(() => {
        product.addedToCart = false;
  
        this.filteredProducts = this.filteredProducts.map(p => 
          p.id === product.id ? { ...p, addedToCart: false } : p
        );
  
        if (this.selectedProduct && this.selectedProduct.id === product.id) {
          this.selectedProduct = Object.assign({}, this.selectedProduct, { addedToCart: false });
        }
  
        this.cartCount--; // ✅ Update cart count
      }).catch(error => console.error('Error removing from cart:', error));
    }
  }
  

  goToCart() {
    this.router.navigate(['/cart']);
  }
}