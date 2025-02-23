import { Component, AfterViewInit } from '@angular/core';

interface Product {
  name: string;
  image: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit {
  categories: { [key: string]: Product[] } = {
    Plants: [
      { name: 'Thuja Plant - XL', image: 'assets/alovera.jpg', oldPrice: 2449, newPrice: 1999, discount: 18 },
      { name: 'Symposium Pink Plant', image: 'assets/top16.jpg', oldPrice: 299, newPrice: 279, discount: 7 },
      { name: 'Money Plant Golden', image: 'assets/top19.jpg', oldPrice: 2799, newPrice: 1899, discount: 32 },
      { name: 'Ficus Moclame Plant - XL', image: 'assets/top20.jpg', oldPrice: 2499, newPrice: 1999, discount: 20 }
    ],
    Accessories: [
      { name: 'Watering Can', image: 'assets/top21.jpg', oldPrice: 299, newPrice: 199, discount: 33 },
      { name: 'Gardening Gloves', image: 'assets/top23.jpg', oldPrice: 199, newPrice: 149, discount: 25 }
    ],
    Fertilizers: [
      { name: 'Organic Compost', image: 'assets/top25.jpg', oldPrice: 599, newPrice: 499, discount: 17 },
      { name: 'Liquid Fertilizer', image: 'assets/ZZ plant.jpg', oldPrice: 399, newPrice: 349, discount: 12 }
    ]
  };

  ngAfterViewInit() {
    this.renderProducts('Plants'); // Default category

    document.getElementById('plants-btn')?.addEventListener('click', () => this.renderProducts('Plants'));
    document.getElementById('accessories-btn')?.addEventListener('click', () => this.renderProducts('Accessories'));
    document.getElementById('fertilizers-btn')?.addEventListener('click', () => this.renderProducts('Fertilizers'));
  }

  renderProducts(category: string) {
    const container = document.getElementById('products-container');
    if (!container) return;
    container.innerHTML = ''; // Clear previous products
  
    const products = this.categories[category];
    if (products) {
      products.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
  
        productDiv.innerHTML = `
          <div class="discount-badge">${product.discount}% OFF</div>
          <div class="image-container">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-name">${product.name}</div>
          <div class="price">
            <span class="old-price">${product.oldPrice}</span>
            <span class="new-price">${product.newPrice}</span>
          </div>
          
          <button class="action-button">BUY NOW</button>
        `;
  
        container.appendChild(productDiv);
  
        // **Manually apply styles** after element is appended
        const oldPriceElement = productDiv.querySelector('.old-price') as HTMLElement;
        if (oldPriceElement) {
          oldPriceElement.style.textDecoration = 'line-through';
          oldPriceElement.style.color = 'gray';
          oldPriceElement.style.marginRight = '5px';
        }
  
        const newPriceElement = productDiv.querySelector('.new-price') as HTMLElement;
        if (newPriceElement) {
          newPriceElement.style.color = 'green';
          newPriceElement.style.fontWeight = 'bold';
          newPriceElement.style.fontSize = '18px';
        }
      });
  
      // Ensure images resize correctly
      setTimeout(() => {
        const images = document.querySelectorAll('.image-container img');
        images.forEach((img) => {
          (img as HTMLImageElement).style.width = '150px';
          (img as HTMLImageElement).style.height = '150px';
        });
      }, 0);
    }
  }
}  