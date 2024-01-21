// Simple e-commerce console application for beginners

// Product class to represent each item in the store
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  // ShoppingCart class to manage the user's cart
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product) {
      this.items.push(product);
      console.log(`${product.name} added to the cart.`);
    }
  
    getTotal() {
      let total = 0;
      for (const item of this.items) {
        total += item.price;
      }
      return total.toFixed(2);
    }
  
    displayCart() {
      console.log("\nShopping Cart:");
      for (const item of this.items) {
        console.log(`${item.name} - $${item.price.toFixed(2)}`);
      }
      console.log(`\nTotal: $${this.getTotal()}`);
    }
  }
  
  // Sample products
  const shirt = new Product("Shirt", 19.99);
  const jeans = new Product("Jeans", 29.99);
  
  // Initialize shopping cart
  const shoppingCart = new ShoppingCart();
  
  // Display product list
  console.log("Product List:");
  console.log(`1. ${shirt.name} - $${shirt.price.toFixed(2)}`);
  console.log(`2. ${jeans.name} - $${jeans.price.toFixed(2)}`);
  
  // Simulate user adding items to the cart
  shoppingCart.addItem(shirt);
  shoppingCart.addItem(jeans);
  
  // Display the final shopping cart
  shoppingCart.displayCart();
  