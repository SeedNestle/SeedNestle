import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  price: number;
  discount: string;
  image: string;
  category: string;
  addedToCart: boolean;
  fullImage?: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  categories = ['Soils and growing medium', 'Fertilizers','Succulents & Cactus', 'Terrarium Plants', 'Seeds', 'Stones', 'Accessories', 'Gift Hampers'];
  selectedCategory = 'Soils and growing medium';
  cartCount = 0;

  private readonly placeholder = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="14"></svg>';

  products: Product[] = [


     //Soils and growing medium
// Soils and growing medium
/*
{ id: 1, name: 'Black Soil', originalPrice: 90, price: 60, discount: '15% OFF', image: 'assets/soil_photos/blacksoil.png', category: 'Soils and growing medium', addedToCart: false },
{ id: 2, name: 'Burn Rice Husk', originalPrice: 90, price: 60, discount: '15% OFF', image: 'assets/soil_photos/burntricehusk.png', category: 'Soils and growing medium', addedToCart: false },
...
{ id: 15, name: 'Vermiculite', originalPrice: 90, price: 60, discount: '15% OFF', image: 'assets/soil_photos/vermiculite.png', category: 'Soils and growing medium', addedToCart: false },
*/

{ id: 93, name: 'Vermicompost', originalPrice: 500, price: 400, discount: '20% OFF', image: 'assets/soil_photos/Sn_Vermicompost.png', category: 'Soils and growing medium', addedToCart: false },
{ id: 94, name: 'Red Soil', originalPrice: 250, price: 200, discount: '20% OFF', image: 'assets/soil_photos/Sn_Red_Soil.png', category: 'Soils and growing medium', addedToCart: false },
{ id: 95, name: 'Potting Mix', originalPrice: 350, price: 250, discount: '29% OFF', image: 'assets/soil_photos/SN_Potting_Mix.png', category: 'Soils and growing medium', addedToCart: false },
{ id: 96, name: 'Coco Peat', originalPrice: 300, price: 200, discount: '33% OFF', image: 'assets/soil_photos/Sn_Coco_Peat.png', category: 'Soils and growing medium', addedToCart: false },

/*
// Fertilizers
    { id: 16,  name: 'Sempervivum calcareum',                   originalPrice: 410, price: 99,  discount: '10% OFF', image: 'assets/medi-spray.webp',                                            category: 'Fertilizers',         addedToCart: false },
     { id: 17, name: 'Vermicompost',                           originalPrice: 90,  price: 60,  discount: '15% OFF', image: 'assets/soil_photos/vermicompost.png',                                category: 'Fertilizers',              addedToCart: false },
     { id: 18, name: 'Coco Peat Block',                        originalPrice: 90,  price: 60,  discount: '15% OFF', image: 'assets/soil_photos/cocopeakblock.png',                                category: 'Fertilizers',              addedToCart: false },
    { id: 19, name: 'Coco Peat Powder',                       originalPrice: 90,  price: 60,  discount: '15% OFF', image: 'assets/soil_photos/cocopeatpowder.png',                                category: 'Fertilizers',              addedToCart: false },
     { id: 20, name: 'Cow Manure Compost',                     originalPrice: 90,  price: 60,  discount: '15% OFF', image: 'assets/soil_photos/cowmanurecompost.png',                                category: 'Fertilizers',              addedToCart: false },
     { id: 21, name: 'Farm Yard Manure',                       originalPrice: 90,  price: 60,  discount: '15% OFF', image: 'assets/soil_photos/farmyardmanure.png',                                category: 'Fertilizers',              addedToCart: false },
     { id: 22, name: 'Garden Soil Mix',                        originalPrice: 90,  price: 60,  discount: '15% OFF', image: 'assets/soil_photos/gardensoilmix.png',                                category: 'Fertilizers',              addedToCart: false },
     { id: 23, name: 'Goat Manure Compost',                    originalPrice: 90,  price: 60,  discount: '15% OFF', image: 'assets/soil_photos/goatmanurecompost.png',                                category: 'Fertilizers',              addedToCart: false },
     { id: 24, name: 'Leaf Compost',                           originalPrice: 90,  price: 60,  discount: '15% OFF', image: 'assets/soil_photos/leafcompost.png',                                category: 'Fertilizers',              addedToCart: false },

  */
    // Succulents & Cactus


    { id: 25,  name: 'Mammillaria carmenae',                    originalPrice: 229, price: 159, discount: '12% OFF', image: 'assets/top1-Mammillaria carmenae.webp',                              category: 'Succulents & Cactus', addedToCart: false },
    { id: 26,  name: 'Chocolate Plant (Kalanchoe)',             originalPrice: 199, price: 149, discount: '12% OFF', image: 'assets/top2-chocolate soldier-Kalanchoe tomentosa.webp',            category: 'Succulents & Cactus', addedToCart: false },
    { id: 27,  name: 'Euphorbia Japonica',                      originalPrice: 249, price: 169, discount: '18% OFF', image: 'assets/top3-Euphobia japonica.webp',                                category: 'Succulents & Cactus', addedToCart: false },
    { id: 28,  name: 'Pachyphytum Compactum',                   originalPrice: 199, price: 159, discount: '18% OFF', image: 'assets/top4Pachyphytum Compactum.webp',                             category: 'Succulents & Cactus', addedToCart: false },
    { id: 29,  name: 'Echeveria Lilacina',                      originalPrice: 189, price: 149, discount: '18% OFF', image: 'assets/top5-Echeveria lilacina.webp',                               category: 'Succulents & Cactus', addedToCart: false },
    { id: 30,  name: 'Euphorbia globosa',                       originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top7-Euphorbia.webp',                                        category: 'Succulents & Cactus', addedToCart: false },
    { id: 31,  name: 'Echeveria',                               originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top8-Echeveria.webp',                                        category: 'Succulents & Cactus', addedToCart: false },
    { id: 32,  name: 'Sedum clavatum',                          originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top9-sedum clavantum.webp',                                  category: 'Succulents & Cactus', addedToCart: false },
    { id: 33, name: 'Echeveria',                               originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top10-echeveria.webp',                                       category: 'Succulents & Cactus', addedToCart: false },
    { id: 34, name: 'Pedilanthus (Euphorbia tithymaloides)',   originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top11-Pedilanthus, Euphorbia tithymaloides.webp',            category: 'Succulents & Cactus', addedToCart: false },
    { id: 35, name: 'Echeveria',                               originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top12-Echeveria.webp',                                       category: 'Succulents & Cactus', addedToCart: false },
    { id: 36, name: 'Pedilanthus tithymaloides',               originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top13-Pedilanthus Tithymaloides.webp',                       category: 'Succulents & Cactus', addedToCart: false },
    { id: 37, name: "Echeveria 'Green Spoon'",                 originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top14-Echeveria green spoon.webp',                           category: 'Succulents & Cactus', addedToCart: false },
    { id: 38, name: 'Sedum lineare',                           originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top15 sedum lineare.webp',                                   category: 'Succulents & Cactus', addedToCart: false },
    { id: 39, name: 'Haworthia cymbiformis',                   originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top16.webp',                                                 category: 'Succulents & Cactus', addedToCart: false },
    { id: 40, name: 'Euphorbia trigona',                       originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top17 euphorbia trigona.webp',                               category: 'Succulents & Cactus', addedToCart: false },
    { id: 41, name: 'Mammillaria gracilis',                    originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top18 mammilaria gracillis.webp',                            category: 'Succulents & Cactus', addedToCart: false },
    { id: 42, name: 'Pachyphytum oviferum',                    originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top19.webp',                                                 category: 'Succulents & Cactus', addedToCart: false },
    { id: 43, name: "Agave 'Burnt Burgundy'",                  originalPrice: 180, price: 159, discount: '13% OFF', image: 'assets/top20.webp',                                                 category: 'Succulents & Cactus', addedToCart: false },
    { id: 44, name: "Mammillaria elongata 'Green'",            originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top21.webp',                                                 category: 'Succulents & Cactus', addedToCart: false },
    { id: 45, name: 'Haworthia cooperi',                       originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top22 Haworthia cooperi.webp',                               category: 'Succulents & Cactus', addedToCart: false },
    { id: 46, name: 'Lenophyllum texanum',                     originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top23.webp',                                                 category: 'Succulents & Cactus', addedToCart: false },
    { id: 47, name: "Sedum 'Little Gem'",                      originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top24 sedum little gem.webp',                                category: 'Succulents & Cactus', addedToCart: false },
    { id: 48, name: "Aloe 'Pink Bluish'",                      originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top25.webp',                                                 category: 'Succulents & Cactus', addedToCart: false },
    { id: 49, name: 'Haworthia retusa',                        originalPrice: 180, price: 159, discount: '12% OFF', image: 'assets/top26 haworthia retusa.webp',                                category: 'Succulents & Cactus', addedToCart: false },
   
   //Terrarium Plants 

    { id: 50, name: 'Haworthia fasciata',                      originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/top27 haworthia fasciata.webp',                              category: 'Terrarium Plants',    addedToCart: false },
    { id: 51, name: 'Haworthia rounded',                       originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/top29.webp',                                                 category: 'Terrarium Plants',    addedToCart: false },
   
   //Seeds


    { id: 52, name: 'Beans Seeds',                             originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/beans.jpg',                                        category: 'Seeds',               addedToCart: false },
    { id: 53, name: 'Beetroot Seeds',                          originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/beetroot_1.jpg',                                   category: 'Seeds',               addedToCart: false },
    { id: 54, name: 'Beetroot Seeds',                          originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/beetroot_2.jpg',                                   category: 'Seeds',               addedToCart: false },
    { id: 55, name: 'Bitter Gourd Seeds',                      originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/bitter_gourd_1.jpg',                               category: 'Seeds',               addedToCart: false },
    { id: 56, name: 'Bitter Gourd Seeds',                      originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/bitter_gourd_2.jpg',                               category: 'Seeds',               addedToCart: false },
    { id: 57, name: 'Brinjal Seeds',                           originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/brinjal.jpg',                                      category: 'Seeds',               addedToCart: false },
    { id: 58, name: 'Cabbage Seeds',                           originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/cabbage.jpg',                                      category: 'Seeds',               addedToCart: false },
    { id: 59, name: 'Capsicum Seeds',                          originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/capsicum.jpg',                                     category: 'Seeds',               addedToCart: false },
    { id: 60, name: 'Carrot Seeds',                            originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/carrot.jpg',                                       category: 'Seeds',               addedToCart: false },
    { id: 61, name: 'Chayote Seeds',                           originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/choyote.jpg',                                      category: 'Seeds',               addedToCart: false },
    { id: 62, name: 'Corn Seeds',                              originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/corn.jpg',                                         category: 'Seeds',               addedToCart: false },
    { id: 63, name: 'Cucumber Seeds',                          originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/cucumber.jpg',                                     category: 'Seeds',               addedToCart: false },
    { id: 64, name: 'Green Chilli Seeds',                      originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/green_chilli.jpg',                                 category: 'Seeds',               addedToCart: false },
    { id: 65, name: 'Green Lettuce Seeds',                     originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/green_lettuce.jpg',                                category: 'Seeds',               addedToCart: false },
    { id: 66, name: 'Kohlrabi Seeds',                          originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/kohlrabi.jpg',                                     category: 'Seeds',               addedToCart: false },
    { id: 67, name: 'Ladies Finger Seeds',                     originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/ladies_finger.jpg',                                category: 'Seeds',               addedToCart: false },
    { id: 68, name: 'Long Beans Seeds',                        originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/long_beans.jpg',                                   category: 'Seeds',               addedToCart: false },
    { id: 69, name: 'Onion Seeds',                             originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/onion.jpg',                                        category: 'Seeds',               addedToCart: false },
    { id: 70, name: 'Pea Seeds',                               originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/pea_1.jpg',                                        category: 'Seeds',               addedToCart: false },
    { id: 71, name: 'Pea Seeds',                               originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/pea.jpg',                                          category: 'Seeds',               addedToCart: false },
    { id: 72, name: 'Pumpkin Seeds',                           originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/pumpkin.jpg',                                      category: 'Seeds',               addedToCart: false },
    { id: 73, name: 'Red Round Radish Seeds',                  originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/red_round_radish.jpg',                             category: 'Seeds',               addedToCart: false },
    { id: 74, name: 'Tomato Seeds',                            originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/tomato.jpg',                                       category: 'Seeds',               addedToCart: false },
    { id: 75, name: 'White Radish Seeds',                      originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/white_raddish.jpg',                                category: 'Seeds',               addedToCart: false },
    { id: 76, name: 'White Round Radish Seeds',                originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/white_round_radish_1.jpg',                         category: 'Seeds',               addedToCart: false },
    { id: 77, name: 'White Round Radish Seeds',                originalPrice: 230, price: 199, discount: '15% OFF', image: 'assets/seeds_img/white_round_radish_2.jpg',                         category: 'Seeds',               addedToCart: false },
    
    
    //Stones


    { id: 78, name: 'Black Small Decorative Stones',           originalPrice: 230, price: 60, discount: '15% OFF', image: 'assets/Stones_img/blach_small.jpeg',                                category: 'Stones',              addedToCart: false },
    { id: 79, name: 'Brown Big Decorative Stones',             originalPrice: 230, price: 60, discount: '15% OFF', image: 'assets/Stones_img/Brown_big.jpeg',                                  category: 'Stones',              addedToCart: false },
    { id: 80, name: 'Brown Chips Decorative Stones',           originalPrice: 230, price: 60, discount: '15% OFF', image: 'assets/Stones_img/brown_chips.jpeg',                                category: 'Stones',              addedToCart: false },
    { id: 81, name: 'Brown Cluster Decorative Stones',         originalPrice: 230, price: 50,  discount: '15% OFF', image: 'assets/Stones_img/brown_cluster.jpeg',                              category: 'Stones',              addedToCart: false },
    { id: 82, name: 'Green Crushed Gravel Chips',              originalPrice: 40,  price: 60, discount: '15% OFF', image: 'assets/Stones_img/green_chips.jpeg',                                category: 'Stones',              addedToCart: false },
    { id: 83, name: 'Grey Big Decorative Stones',              originalPrice: 230, price: 50,  discount: '15% OFF', image: 'assets/Stones_img/grey_big.jpeg',                                   category: 'Stones',              addedToCart: false },
    { id: 84, name: 'Light Emerald Green Stones',              originalPrice: 50,  price: 60, discount: '15% OFF', image: 'assets/Stones_img/light_emerald_green.jpeg',                        category: 'Stones',              addedToCart: false },
    { id: 85, name: 'Grey Crushed Gravel Chips',               originalPrice: 230, price: 50,  discount: '15% OFF', image: 'assets/Stones_img/light_grey.jpeg',                                 category: 'Stones',              addedToCart: false },
    { id: 86, name: 'Natural Mix Tumbled Pebbles',             originalPrice: 100, price: 60,  discount: '15% OFF', image: 'assets/Stones_img/medium_mix.jpeg',                                 category: 'Stones',              addedToCart: false },
    { id: 87, name: 'Mixed Small Pebbles',                     originalPrice: 90,  price: 50,  discount: '15% OFF', image: 'assets/Stones_img/mixed_chips.jpeg',                                category: 'Stones',              addedToCart: false },
    { id: 88, name: 'Red Crushed Gravel Chips',                originalPrice: 80,  price: 50,  discount: '15% OFF', image: 'assets/Stones_img/red_chips.jpeg',                                  category: 'Stones',              addedToCart: false },
    { id: 89, name: 'White Big Decorative Stones',             originalPrice: 90,  price: 60,  discount: '15% OFF', image: 'assets/Stones_img/white_big.jpeg',                                  category: 'Stones',              addedToCart: false },
    { id: 90, name: 'White Medium Decorative Stones',          originalPrice: 90,  price: 60,  discount: '15% OFF', image: 'assets/Stones_img/white_medium.jpeg',                               category: 'Stones',              addedToCart: false },
    { id: 91, name: 'White Mid-Medium Decorative Stones',      originalPrice: 90,  price: 60,  discount: '15% OFF', image: 'assets/Stones_img/white_mif_medium.jpeg',                           category: 'Stones',              addedToCart: false },
    { id: 92, name: 'White Small Decorative Stones',           originalPrice: 90,  price: 60,  discount: '15% OFF', image: 'assets/Stones_img/white_small.jpeg',                                category: 'Stones',              addedToCart: false },
    
    
   
  ];

  filteredProducts = [...this.products];
  selectedProduct: any = null;
  cartItems: any[] = [];

  private observer?: IntersectionObserver;

  constructor(
    private cartService: CartService,
    private router: Router,
    private seo: SeoService   // ✅ injected
  ) {}

  ngOnInit() {
    // ✅ Set page-specific SEO
    this.seo.updateSeo({
      title: 'Buy Succulents, Seeds, Stones & Plant Accessories Online',
      description: 'Shop rare succulents, cactus, terrarium plants, vegetable seeds, decorative stones & plant accessories at SeedNestle. Premium quality at great prices. Free delivery available.',
      keywords: 'buy succulents online India, rare cactus plants, Echeveria for sale, Haworthia plants, vegetable seeds online, terrarium plants, decorative stones for plants, plant accessories',
      canonical: '/products'
    });

    this.products.forEach(p => {
      p.fullImage = p.image;
      p.image = this.placeholder;
    });

    this.filteredProducts = [...this.products];
    this.subscribeToCart();
  }

  ngAfterViewInit() {
    setTimeout(() => this.initLazyLoad(), 0);
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
    this.cartCount = this.cartItems.length;
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = this.products.filter(p => p.category === category);
    setTimeout(() => this.initLazyLoad(), 0);
  }

  openProductDetails(product: any) {
    const productWithRealImage = Object.assign({}, product, { image: product.fullImage || product.image });
    this.selectedProduct = productWithRealImage;
  }

  closeProductDetails() {
    this.selectedProduct = null;
  }

  toggleCart(product: any) {
    if (!product.addedToCart) {
      this.cartService.addToCart(product).then(() => {
        product.addedToCart = true;
        this.filteredProducts = this.filteredProducts.map(p =>
          p.id === product.id ? { ...p, addedToCart: true } : p
        );
        if (this.selectedProduct && this.selectedProduct.id === product.id) {
          this.selectedProduct = Object.assign({}, this.selectedProduct, { addedToCart: true });
        }
        this.cartCount++;
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
        this.cartCount--;
      }).catch(error => console.error('Error removing from cart:', error));
    }
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  private initLazyLoad() {
    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const full = img.dataset['full'];
          if (full) {
            img.src = full;
            img.onload = () => img.classList.add('loaded');
            this.observer?.unobserve(img);
          }
        }
      });
    }, { rootMargin: '200px', threshold: 0.01 });

    const domImgs = Array.from(
      document.querySelectorAll('.product-grid .product-card img')
    ) as HTMLImageElement[];

    domImgs.forEach((imgEl, index) => {
      const prod = this.filteredProducts[index];
      if (!prod) return;
      imgEl.dataset['full'] = prod.fullImage || prod.image;
      imgEl.loading = 'lazy';
      this.observer?.observe(imgEl);
    });
  }
}