import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  src: string;
  desc: string;
  price: string;
  offer: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedType: string | null = null;

  products: { [key: string]: Product[] } = {
    Electronics: [
      { name: "Laptop", src: "assets/ficus.png", desc: "Powerful gaming laptop", price: "$1200", offer: "10% Off" },
      { name: "Mobile", src: "assets/mobile.jpg", desc: "5G smartphone with a great camera", price: "$799", offer: "15% Off" },
      { name: "Headphones", src: "assets/headphones.jpg", desc: "Noise-canceling sound", price: "$150", offer: "5% Off" }
    ],
    Clothing: [
      { name: "T-Shirt", src: "assets/tshirt.jpg", desc: "Cool cotton t-shirt", price: "$20", offer: "Buy 1 Get 1" },
      { name: "Jeans", src: "assets/jeans.jpg", desc: "Stretchable denim", price: "$50", offer: "20% Off" }
    ],
    Books: [
      { name: "Angular Guide", src: "assets/angular.jpg", desc: "Complete guide to Angular", price: "$25", offer: "10% Off" }
    ]
  };

  selectType(type: string) {
    this.selectedType = type;
    this.renderProducts();
  }

  renderProducts() {
    const productContainer = document.getElementById("product-container");
    if (productContainer) {
      productContainer.innerHTML = ""; // Clear previous products

      if (this.selectedType && this.products[this.selectedType]) {
        const selectedProducts: Product[] = this.products[this.selectedType];

        selectedProducts.forEach((product) => {
          const productDiv = document.createElement("div");
          productDiv.className = "product-card";

          productDiv.innerHTML = `
            <div class="product-img">
              <img src="${product.src}" alt="${product.name}">
            </div>
            <div class="product-info">
              <h1>${product.name}</h1>
              <p>${product.desc}</p>
              <p class="price"><span>${product.price}</span> <small>${product.offer}</small></p>
              <button onclick="alert('You have selected to buy: ${product.name}')">BUY NOW</button>
            </div>
          `;

          productContainer.appendChild(productDiv);
        });
      }
    }
  }

  ngOnInit() {
    (window as any).angularComponent = this;
  }
}
