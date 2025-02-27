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
        name: 'Thuja Plant - XL',
        image: 'assets/alovera.jpg',
        oldPrice: 2449,
        newPrice: 1999,
        discount: 18,
        images: ['assets/alovera.jpg', 'assets/top16.jpg', 'assets/top19.jpg'],
        description: 'A beautiful Thuja plant that enhances your garden decor.',
        advantages: ['Air purifier', 'Easy to maintain']
      },
      {
        name: 'Monstera',
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
    Accessories: [
      {
        name: 'Coco&Coir',
        image: 'assets/coco.webp',
        oldPrice: 499,
        newPrice: 399,
        discount: 20,
        images: ['assets/coco.webp'],
        description: 'Coco and coir pots are biodegradable plant containers made from natural coconut coir fibers. These eco-friendly pots serve as an excellent alternative to plastic pots and are widely used in gardening, horticulture, and nursery applications.',
        advantages: [' Eco-Friendly & Biodegradable  Sustainable alternative to plastic, decomposes naturally'
,'Boosts Root Growth – Prevents root binding and reduces transplant shock.']
      },
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
    document.getElementById('accessories-btn')?.addEventListener('click', () => this.renderProducts('Accessories'));
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
