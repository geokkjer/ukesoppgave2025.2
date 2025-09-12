function updateViewCartPage() {
  const cart = getCart();
  const total = getCartTotal();
  const itemCount = getCartItemCount();
  const html = generateCartPage(cart, total, itemCount);
  document.getElementById("app").innerHTML = html;
}

function generateCartPage(cartItems, total, itemCount) {
  let cartContent = "";
  if (cartItems.length === 0) {
    cartContent = /*HTML*/ `
      <div class="empty-cart" role="status" aria-live="polite">
         <h3>Handlekurven din er tom</h3>
         <p>Legg til noen produkter for å komme i gang!</p>
       </div>`;
  } else {
    for (const item of cartItems) {
      cartContent += createCartItem(item);
    }
  }

  const cartTotal =
    itemCount === 0
      ? ""
      : /*HTML*/ `
    <footer class="cart-total">
      <div class="total-amount" role="status" aria-live="polite" aria-label="Totalt beløp: ${total.toFixed(2)} kroner">
        Totalt: <span class="amount">${total.toFixed(2)} kr</span>
      </div>
      <div class="cart-actions">
        <button class="btn btn-primary" disabled aria-label="Gå til kasse for å fullføre kjøp">Gå til kasse</button>
        <button class="btn btn-danger" onclick="handleClearCart()" aria-label="Tøm hele handlekurven">Tøm handlekurv</button>
      </div>
    </footer>`;

  return /*HTML*/ `
    ${generateNavbar()}
    <main>
      <section class="page active" role="main" aria-label="Handlekurv">
        <header>
          <h2>Handlekurv</h2>
          ${itemCount > 0 ? `<p class="cart-summary" aria-live="polite">${itemCount} ${itemCount === 1 ? "vare" : "varer"} i handlekurven</p>` : ""}
        </header>
        <div class="cart-items" role="list" aria-label="Varer i handlekurv">
          ${cartContent}
        </div>
        ${cartTotal}
      </section>
    </main>
    ${generateFooter()}
  `;
}

function createCartItem(item) {
  return /*HTML*/ `
    <article class="cart-item" role="listitem">
      <header class="cart-item-info">
        <h3 class="cart-item-name">${item.product.name}</h3>
        <p class="cart-item-price" aria-label="Pris per stykk: ${item.product.price.toFixed(2)} kroner">
          <span class="amount">${item.product.price.toFixed(2)}</span> <span class="currency">kr</span> per stk
        </p>
      </header>
      <div class="cart-item-controls">
        <div class="quantity-controls" role="group" aria-label="Antall ${item.product.name}">
          <button class="quantity-btn" onclick="changeQuantity(${item.productId}, -1)" aria-label="Reduser antall ${item.product.name}" ${item.quantity <= 1 ? 'aria-describedby="min-quantity-warning"' : ""}>-</button>
          <span class="quantity" role="status" aria-live="polite" aria-label="${item.quantity} stykker">${item.quantity}</span>
          <button class="quantity-btn" onclick="changeQuantity(${item.productId}, 1)" aria-label="Øk antall ${item.product.name}">+</button>
          ${item.quantity <= 1 ? '<span id="min-quantity-warning" class="sr-only">Minimum antall er 1</span>' : ""}
        </div>
        <div class="item-total" aria-label="Totalt for ${item.product.name}: ${(item.product.price * item.quantity).toFixed(2)} kroner">
          <span class="amount">${(item.product.price * item.quantity).toFixed(2)}</span> <span class="currency">kr</span>
        </div>
        <button class="btn btn-remove" onclick="handleRemoveFromCart(${item.productId})" aria-label="Fjern ${item.product.name} fra handlekurv">Fjern</button>
      </div>
    </article>
  `;
}

export { updateViewCartPage };
