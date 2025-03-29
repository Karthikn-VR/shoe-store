let cart = [];
let total = 0;
let cartTimeout;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
  showCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  cartItems.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

function showCart() {
  const cartElement = document.querySelector('.cart');
  cartElement.classList.add('show');

  clearTimeout(cartTimeout);
  cartTimeout = setTimeout(() => {
    cartElement.classList.remove('show');
  }, 5000);
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
    showCart();
  }
}
