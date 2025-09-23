function handleAddToCart(productId) {
  addToCart(productId);
  updateView();
}

function handleRemoveFromCart(productId) {
  removeFromCart(productId);
  updateView();
}

function changeQuantity(productId, change) {
  const cart = getCart();
  const item = cart.find(item => item.productId === productId);

  if (item) {
    const newQuantity = item.quantity + change;
    updateCartQuantity(productId, newQuantity);
    updateView();
  }
}

function handleClearCart() {
  if (confirm('Er du sikker på at du vil tømme handlekurven?')) {
    clearCart();
    updateView();
  }
}

function navigateToCart() {
  model.app.currentPage = 'cart';
  updateView();
}
