import { Component, AfterViewInit } from '@angular/core';

interface Product {
  name: string;
  image: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  images: string[];
  description: string;
  advantages: string[];
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit {
  categories: { [key: string]: Product[] } = {
    Plants: [
      {
        name: 'shiffty plant',
        image: 'assets/top1-Mammillaria carmenae.webp',
        oldPrice: 269,
        newPrice: 159,
        discount: 12,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top2-chocolate soldier-Kalanchoe tomentosa.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 12,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top3-Euphobia%20japonica.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top4Pachyphytum%20Compactum.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top5-Echeveria%20lilacina.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top6-pedpoudhe%20sempervivum%20calcareum.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top7-Euphorbia.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top8-Echeveria.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top9-sedum%20clavantum.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top10-echeveria.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top11-Pedilanthus,%20Euphorbia%20tithymaloides.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top12-Echeveria.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top13-Pedilanthus%20Tithymaloides.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top14-Echeveria%20green%20spoon.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top15%20sedum%20lineare.webp',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top1-Mammillaria carmenae.jpg',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      
      
      {
        name: 'Pedilanthus Plant - XL',
        image: 'assets/Pedilanthus.png',
        oldPrice: 2449,
        newPrice: 1999,
        discount: 18,
        images: ['assets/top8-Echeveria.jpg', 'assets/top13.1.jpg', 'assets/top20.jpg'],
        description: 'A beautiful Thuja plant that enhances your garden decor.',
        advantages: ['Air purifier', 'Easy to maintain']
      }
    ],
    
    Accessories : [
      {
        name: 'Pebbals Stone',
        image: 'assets/pebbels.webp',
        oldPrice: 299,
        newPrice: 249,
        discount: 17,
        images: ['assets/pebbels.webp'],
        description: 'Using pebbles and stones in plant arrangements is a common practice that enhances both the aesthetic appeal and health of your plants. Here’s why adding stones to your plant setup can be beneficial',
        advantages: ['At the Bottom of the Pot – Helps with drainage and prevents waterlogging.','Helps prevent mold and fungal infections by improving aeration.']
      },
      {
        name: 'Small Black Pots',
        image: 'assets/BlackPots.webp',
        oldPrice: 299,
        newPrice: 249,
        discount: 17,
        images: ['assets/BlackPots.webp'],
        description: 'This 10Club package includes 24 UV-treated and anti-fade planter pots, each measuring 15.2D x 15.2W x 14H and designed with wide top support for easy carrying. Made from high-grade UV-treated plastic, these pots are exceptionally durable and resistant to fading, providing robust support at the top for effortless handling.',
        advantages: ['The drainage holes are vital for safeguarding delicate roots against rot, fungus, and bacteria.']
      },
      {
        name: 'Small Brown Pots',
        image: 'assets/BrownPot.webp',
        oldPrice: 299,
        newPrice: 249,
        discount: 17,
        images: ['assets/BrownPot.webp'],
        description: 'This 10Club package includes 24 UV-treated and anti-fade planter pots, each measuring 15.2D x 15.2W x 14H and designed with wide top support for easy carrying. Made from high-grade UV-treated plastic, these pots are exceptionally durable and resistant to fading, providing robust support at the top for effortless handling.',
        advantages: ['The drainage holes are vital for safeguarding delicate roots against rot, fungus, and bacteria.']
      },
      {
        name: 'Black-sm-Plates',
        image: 'assets/black-pot.webp',
        oldPrice: 58,
        newPrice: 48,
        discount: 17,
        images: ['assets/black-pot.webp'],
        description: 'Small black plates for plants are perfect for keeping your plant area clean and stylish. These plates help collect excess water and soil, preventing spills and maintaining a neat space. Made from durable plastic or ceramic, they are lightweight, easy to clean, and complement any indoor or outdoor setting.',
        advantages: ['Prevents water spills and soil messDurable and lightweight material']
      },
      {
        name: 'Blue-Oval-pot',
        image: 'assets/blue-3-pot.webp',
        oldPrice: 258,
        newPrice: 218,
        discount: 17,
        images: ['assets/blue-3-pot.webp'],
        description: 'The Blue Oval Pot is a sleek and modern planter designed to add elegance to any indoor or outdoor space. Its oval shape provides ample room for plant roots to grow, while the vibrant blue color enhances the aesthetics of your garden, balcony, or home.',
        advantages: ['Durable and weather-resistant materi','Lightweight and easy to move']
      },
      {
        name: 'Blue-Fade-white-pot',
        image: 'assets/blue-se-pot.webp',
        oldPrice: 268,
        newPrice: 198,
        discount: 17,
        images: ['assets/blue-se-pot.webp'],
        description: 'The Blue & White Fade Color Pot is a beautifully designed planter that adds a touch of elegance to any space. Its smooth gradient from deep blue to soft white creates a modern and calming aesthetic, perfect for indoor and outdoor plant décor',
        advantages: ['Ideal for small to medium-sized plants','Lightweight and easy to move']
      },
      {
        name: 'Brown-oval-pot',
        image: 'assets/brown-3-pot.webp',
        oldPrice: 258,
        newPrice: 218,
        discount: 17,
        images: ['assets/brown-3-pot.webp'],
        description: 'The Blue Oval Pot is a sleek and modern planter designed to add elegance to any indoor or outdoor space. Its oval shape provides ample room for plant roots to grow, while the vibrant blue color enhances the aesthetics of your garden, balcony, or home.',
        advantages: ['Durable and weather-resistant materi','Lightweight and easy to move']
      },
      {
        name: 'Brown-sm-Plates',
        image: 'assets/brown-pot.webp',
        oldPrice: 58,
        newPrice: 48,
        discount: 17,
        images: ['assets/brown-pot.webp'],
        description: 'Small black plates for plants are perfect for keeping your plant area clean and stylish. These plates help collect excess water and soil, preventing spills and maintaining a neat space. Made from durable plastic or ceramic, they are lightweight, easy to clean, and complement any indoor or outdoor setting.',
        advantages: ['Prevents water spills and soil messDurable and lightweight material']
      },
      {
        name: 'Brown-Single-pot',
        image: 'assets/brown-single-pot.webp',
        oldPrice: 58,
        newPrice: 48,
        discount: 17,
        images: ['assets/brown-single-pot.webp'],
        description: 'The Brown Pot is a classic and versatile planter that blends naturally with any indoor or outdoor setting. Its earthy tone complements all types of plants, adding a warm and rustic charm to your space',
        advantages: ['Natural earthy tone enhances plant aesthetics Available in ceramic, terracotta, or plastic materials']
      },
      {
        name: 'Green-Fade-white-pot',
        image: 'assets/green-se-pot.webp',
        oldPrice: 268,
        newPrice: 198,
        discount: 17,
        images: ['assets/green-se-pot.webp'],
        description: 'The Green & White Fade Color Pot is a beautifully designed planter that adds a touch of elegance to any space. Its smooth gradient from deep blue to soft white creates a modern and calming aesthetic, perfect for indoor and outdoor plant décor',
        advantages: ['Ideal for small to medium-sized plants','Lightweight and easy to move']
      },
      {
        name: 'Green-plastic',
        image: 'assets/green-sm-pot.webp',
        oldPrice: 38,
        newPrice: 18,
        discount: 17,
        images: ['assets/green-sm-pot.webp'],
        description: 'The Green Pot is a classic and versatile planter that blends naturally with any indoor or outdoor setting. Its earthy tone complements all types of plants, adding a warm and rustic charm to your space',
        advantages: ['Natural earthy tone enhances plant aesthetics Available in ceramic, terracotta, or plastic materials']
      },
      {
        name: 'Pink-Fade-white-pot',
        image: 'assets/pink-se-pot.webp',
        oldPrice: 268,
        newPrice: 198,
        discount: 17,
        images: ['assets/pink-se-pot.webp'],
        description: 'The Pink & White Fade Color Pot is a beautifully designed planter that adds a touch of elegance to any space. Its smooth gradient from deep blue to soft white creates a modern and calming aesthetic, perfect for indoor and outdoor plant décor',
        advantages: ['Ideal for small to medium-sized plants','Lightweight and easy to move']
      },
      {
        name: 'Purple-plastic',
        image: 'assets/purple-sm-pot.webp',
        oldPrice: 38,
        newPrice: 18,
        discount: 17,
        images: ['assets/purple-sm-pot.webp'],
        description: 'The Purple Pot is a classic and versatile planter that blends naturally with any indoor or outdoor setting. Its earthy tone complements all types of plants, adding a warm and rustic charm to your space',
        advantages: ['Natural earthy tone enhances plant aesthetics Available in ceramic, terracotta, or plastic materials']
      },
      {
        name: 'Gupta Pebbels',
        image: 'assets/rock1.webp',
        oldPrice: 78,
        newPrice: 58,
        discount: 17,
        images: ['assets/rock1.webp'],
        description: 'Gupta Pebbles are premium-quality decorative stones used for enhancing plant arrangements, aquariums, pathways, and home décor. These natural pebbles improve soil drainage, prevent weed growth, and add a stylish touch to indoor and outdoor gardens.',
        advantages: ['Enhances plant aesthetics with a natural and elegant look','Helps retain soil moisture and prevent erosion']
      },
      {
        name: 'Gupta Pebbels-varient',
        image: 'assets/rock2.webp',
        oldPrice: 78,
        newPrice: 58,
        discount: 17,
        images: ['assets/rock2.webp'],
        description: 'Gupta Pebbles are premium-quality decorative stones used for enhancing plant arrangements, aquariums, pathways, and home décor. These natural pebbles improve soil drainage, prevent weed growth, and add a stylish touch to indoor and outdoor gardens.',
        advantages: ['Enhances plant aesthetics with a natural and elegant look','Helps retain soil moisture and prevent erosion']
      },
      {
        name: 'White-sm-Plates',
        image: 'assets/white-plate.webp',
        oldPrice: 58,
        newPrice: 48,
        discount: 17,
        images: ['assets/white-plate.webp'],
        description: 'Small white plates for plants are perfect for keeping your plant area clean and stylish. These plates help collect excess water and soil, preventing spills and maintaining a neat space. Made from durable plastic or ceramic, they are lightweight, easy to clean, and complement any indoor or outdoor setting.',
        advantages: ['Prevents water spills and soil messDurable and lightweight material']
      },
      {
        name: 'WHite-Single-pot',
        image: 'assets/white-single-sm.webp',
        oldPrice: 58,
        newPrice: 48,
        discount: 17,
        images: ['assets/white-single.webp'],
        description: 'The White Pot is a classic and versatile planter that blends naturally with any indoor or outdoor setting. Its earthy tone complements all types of plants, adding a warm and rustic charm to your space',
        advantages: ['Natural earthy tone enhances plant aesthetics Available in ceramic, terracotta, or plastic materials']
      },
      {
        name: 'White-sm-plastic',
        image: 'assets/white-sm-pot.webp',
        oldPrice: 38,
        newPrice: 18,
        discount: 17,
        images: ['assets/white-sm-pot.webp'],
        description: 'The White Pot is a classic and versatile planter that blends naturally with any indoor or outdoor setting. Its earthy tone complements all types of plants, adding a warm and rustic charm to your space',
        advantages: ['Natural earthy tone enhances plant aesthetics Available in ceramic, terracotta, or plastic materials']
      },
      {
        name: 'White-hard-Pots',
        image: 'assets/white-smB-pot.webp',
        oldPrice: 58,
        newPrice: 48,
        discount: 17,
        images: ['assets/white-smB-pot.webp'],
        description: '',
        advantages: ['']
      }
    ],
    
    Gift: [
      {
        name: 'Mammillaria carmenae',
        image: 'assets/top1-Mammillaria carmenae.jpg',
        oldPrice: 169,
        newPrice: 149,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'Mammillaria carmenae is a small, globular, slow-growing cactus with soft white spines and crown-like pink or white flowers, ideal for low-maintenance collections.',
        advantages: ['Indoor Plant', 'Easy to maintain']
      },
      {
        name: 'chocolate plant',
        image: 'assets/Monstera.jpg',
        oldPrice: 2449,
        newPrice: 1999,
        discount: 18,
        images: ['assets/Monstera.jpg', 'assets/top19.jpg', 'assets/top11.1.jpg'],
        description: 'A beautiful Thuja plant that enhances your garden decor.',
        advantages: ['Air purifier', 'Easy to maintain']
      },
      {
        name: 'Pedilanthus Plant - XL',
        image: 'assets/Pedilanthus.png',
        oldPrice: 2449,
        newPrice: 1999,
        discount: 18,
        images: ['assets/top8-Echeveria.jpg', 'assets/top13.1.jpg', 'assets/top20.jpg'],
        description: 'A beautiful Thuja plant that enhances your garden decor.',
        advantages: ['Air purifier', 'Easy to maintain']
      }
    ],
    Fertilizers: [
      {
        name: 'Organic Compost',
        image: 'assets/compost.jpg',
        oldPrice: 599,
        newPrice: 499,
        discount: 17,
        images: ['assets/compost.jpg', 'assets/top25.jpg'],
        description: 'Nutrient-rich organic compost for healthy plants.',
        advantages: ['Improves soil fertility', 'Eco-friendly']
      },
      {
        name: 'Liquid Fertilizer',
        image: 'assets/liquid_fertilizer.jpg',
        oldPrice: 399,
        newPrice: 349,
        discount: 12,
        images: ['assets/liquid_fertilizer.jpg', 'assets/ZZ plant.jpg'],
        description: 'Boost plant growth with this liquid fertilizer.',
        advantages: ['Fast absorption', 'Easy to apply']
      }
    ]
  };

  ngAfterViewInit() {
    this.renderProducts('Plants');

    document.getElementById('plants-btn')?.addEventListener('click', () => this.renderProducts('Plants'));
    document.getElementById('terrarium-btn')?.addEventListener('click', () => this.renderProducts('Terrarium'));
    document.getElementById('accessories-btn')?.addEventListener('click', () => this.renderProducts('Accessories'));
    document.getElementById('gift-btn')?.addEventListener('click', () => this.renderProducts('Gift'));
    document.getElementById('fertilizers-btn')?.addEventListener('click', () => this.renderProducts('Fertilizers'));
  }

  renderProducts(category: string) {
    const container = document.getElementById('products-container');
    if (!container) return;
    container.innerHTML = '';

    this.categories[category].forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-card');

      productDiv.innerHTML = `
        <div class="discount-badge">${product.discount}% OFF</div>
        <div class="image-container"><img src="${product.image}" alt="${product.name}" style="width:150px;height:150px;"></div>
        <div class="product-name">${product.name}</div>
        <div class="price">
          <span class="old-price" style="text-decoration: line-through; color: grey;">₹${product.oldPrice}</span>
          <span class="new-price" style="color: green; font-weight: bold;">₹${product.newPrice}</span>
        </div>
        
        <button class="action-button">VIEW</button>
      `;

      productDiv.querySelector('.action-button')?.addEventListener('click', () => this.showProductDetails(product));

      container.appendChild(productDiv);
    });
  }

  showProductDetails(product: Product) {
    document.getElementById('popup-overlay')?.remove();

    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '1000';

    const popup = document.createElement('div');
    popup.classList.add('product-popup');
    popup.style.background = 'white';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    popup.style.width = '400px';

    popup.innerHTML = `
      <h2>${product.name}</h2>
      <div class="popup-images">
        ${product.images.map(img => `<img src="${img}" style="width:80px;height:80px;margin:5px;">`).join('')}
      </div>
      <p>${product.description}</p>
      <strong>Advantages:</strong>
      <ul>${product.advantages.map(adv => `<li>${adv}</li>`).join('')}</ul>
      <br>
      <p>click on "BUY NOW" to send your request via WhatsApp. We will contact you shortly! ✅</p>
      <a href="https://wa.me/8217225662?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}" 
        style="display:block;margin-top:10px;padding:10px;background:#25D366;color:white;text-align:center;
        text-decoration:none;border-radius:5px;">
        BUY NOW
      </a>
      <button onclick="document.getElementById('popup-overlay').remove()" 
        style="margin-top:10px;padding:5px 10px;background:red;color:white;border:none;cursor:pointer;">
        Close
      </button>
    `;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  }
}
