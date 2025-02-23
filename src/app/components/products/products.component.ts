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

        // Discount badge
        const discountBadge = document.createElement('div');
        discountBadge.classList.add('discount-badge');
        discountBadge.innerText = `${product.discount}% OFF`;
        productDiv.appendChild(discountBadge);

        // Image
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.style.width = '150px';
        img.style.height = '150px';
        imageContainer.appendChild(img);
        productDiv.appendChild(imageContainer);

        // Product name
        const productName = document.createElement('div');
        productName.classList.add('product-name');
        productName.innerText = product.name;
        productDiv.appendChild(productName);

        // Price container
        const priceContainer = document.createElement('div');
        priceContainer.classList.add('price');

        // Old price (strikethrough)
        const oldPrice = document.createElement('span');
        oldPrice.classList.add('old-price');
        oldPrice.innerText = `₹${product.oldPrice}`;
        oldPrice.style.textDecoration = 'line-through';
        oldPrice.style.color = 'gray';
        oldPrice.style.marginRight = '5px';
        priceContainer.appendChild(oldPrice);

        // New price
        const newPrice = document.createElement('span');
        newPrice.classList.add('new-price');
        newPrice.innerText = `₹${product.newPrice}`;
        newPrice.style.color = 'green';
        newPrice.style.fontWeight = 'bold';
        priceContainer.appendChild(newPrice);

        productDiv.appendChild(priceContainer);

        // Rating
        const rating = document.createElement('div');
        rating.classList.add('rating');
        rating.innerText = '★★★★★';
        rating.style.color = '#f4b400';
        rating.style.fontSize = '18px';
        productDiv.appendChild(rating);

        // Buy Now Button
        const buyButton = document.createElement('button');
        buyButton.classList.add('action-button');
        buyButton.innerText = 'BUY NOW';
        buyButton.style.marginTop = '10px';
        buyButton.style.padding = '8px 12px';
        buyButton.style.background = '#007bff';
        buyButton.style.color = 'white';
        buyButton.style.border = 'none';
        buyButton.style.cursor = 'pointer';
        buyButton.style.borderRadius = '5px';
        buyButton.style.fontWeight = 'bold';

        // Buy Button Click Event - Show Popup
        buyButton.addEventListener('click', () => this.showOrderPopup(product.name));
        productDiv.appendChild(buyButton);

        container.appendChild(productDiv);
      });
    }
  }

  showOrderPopup(productName: string) {
    // Remove existing popup
    document.getElementById('popup-overlay')?.remove();

    // Create overlay
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

    // Popup container
    const popup = document.createElement('div');
    popup.classList.add('order-popup');
    popup.style.background = 'white';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    popup.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.3)';
    popup.style.textAlign = 'center';
    popup.style.maxWidth = '350px';
    popup.style.width = '90%';

    // Popup content
    const popupText = document.createElement('p');
    popupText.innerText = `To place an order for "${productName}", please contact us on WhatsApp.`;
    popup.appendChild(popupText);

    // WhatsApp Link
    const whatsappLink = document.createElement('a');
    whatsappLink.href = `https://wa.me/8217225662?text=I%20want%20to%20order%20${encodeURIComponent(productName)}`;
    whatsappLink.innerText = 'Chat on WhatsApp';
    whatsappLink.style.display = 'inline-block';
    whatsappLink.style.marginTop = '10px';
    whatsappLink.style.padding = '10px';
    whatsappLink.style.background = '#25D366';
    whatsappLink.style.color = 'white';
    whatsappLink.style.textDecoration = 'none';
    whatsappLink.style.fontWeight = 'bold';
    whatsappLink.style.borderRadius = '5px';

    popup.appendChild(whatsappLink);

    // Close button
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.style.marginTop = '10px';
    closeButton.style.padding = '5px 15px';
    closeButton.style.border = 'none';
    closeButton.style.background = 'red';
    closeButton.style.color = 'white';
    closeButton.style.cursor = 'pointer';
    closeButton.style.borderRadius = '5px';

    closeButton.addEventListener('click', () => overlay.remove());
    popup.appendChild(closeButton);

    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  }
}
