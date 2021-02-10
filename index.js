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
  var list = [];
  if (!cart.length) {
    return 'Your shopping cart is empty.';
  } else if(cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].price}.`
  } else {
    for (let i = 1; i < cart.length; i++) {
      if (i === cart.length - 1){
        list.push(` ${cart[i].itemName} at $${cart[i].price}`)
      }
      list.push(` ${cart[i].itemName} at $${cart[i].price}, and`);
    }
    return `In your cart, you have${list}.`
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
