function updateViewProductsPage() {
  const products = getAllProducts();
  const html = generateProductsPage(products);
  document.getElementById('app').innerHTML = html;
}

function generateNavbar() {
  const cartCount = getCartItemCount();
  return /*HTML*/`
    <header>
      <nav class="navbar">
        <h1 class="logo">Nettbutikk</h1>
        <ul class="nav-links">
          <li><a href="#" onclick="model.app.currentPage='products'; updateView()">Produkter</a></li>
          <li><a href="#" onclick="model.app.currentPage='cart'; updateView()">Handlekurv (<span id="cart-count">${cartCount}</span>)</a></li>
        </ul>
      </nav>
    </header>
  `;
}

function generateFooter() {
  const year = new Date().getFullYear();
  return /*HTML*/`
    <footer class="site-footer">
      <p>&copy; Nettbutikk A/S ${year}</p>
    </footer>
  `;
}

function generateProductsPage(products) {
  let productCards = '';
  for (const p of products) {
    productCards += createProductCard(p);
  }
  return /*HTML*/`
    ${generateNavbar()}
    <main>
      <section class="page active" role="main" aria-label="Produktoversikt">
        <header>
          <h2>Våre Produkter</h2>
        </header>
        <div class="products-grid" role="list" aria-label="Liste over produkter">
          ${productCards}
        </div>
      </section>
    </main>
    ${generateFooter()}
  `;
}

function createProductCard(product) {
  return /*HTML*/`
    <article class="product-card" role="listitem" tabindex="0"
             onclick="showProductDetail(${product.id})"
             aria-label="Produkt: ${product.name}, Pris: ${product.price.toFixed(2)} kroner">
      <header>
        <div class="product-image" role="img" aria-label="Produktbilde: ${product.name}">${product.image}</div>
        <h3 class="product-name">${product.name}</h3>
      </header>
      <div class="product-info">
        <p class="product-price" aria-label="Pris: ${product.price.toFixed(2)} kroner">
          <span class="currency">kr</span> <span class="amount">${product.price.toFixed(2)}</span>
        </p>
        <p class="product-description">${product.description}</p>
      </div>
      <footer>
        <button class="btn btn-success" onclick="event.stopPropagation(); handleAddToCart(${product.id})" aria-label="Legg ${product.name} i handlekurv">Legg i handlekurv</button>
      </footer>
    </article>
  `;
}
