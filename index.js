var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var product = {};
 product = {
   itemName: `${item}`,
   price: Math.floor(Math.random() * 100) + 1,
}
 cart.push(product);
 return `${product.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (!cart.length) {
    return 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $undefined.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $undefined, and ${cart[1].itemName} at $undefined.`
  } else if (cart.length === 3) {
    return `In your cart, you have ${cart[0].itemName} at $undefined, ${cart[1].itemName} at $undefined, and ${cart[2].itemName} at $undefined.`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
