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
 var price = Math.floor(Math.random() * 100 + 1);
 cart.push({
   itemName: `${item}`,
   itemPrice: price,
});
 return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0){
    return `Your shopping cart is empty.`

  } else if(cart.length ===1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`

  } else {

    var start = `In your cart, you have`
    var mid = []
    var end = `, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`

    for (var i = 0; i < cart.length-1; i++){
    mid.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
            }
         }
  return start + mid + end
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
