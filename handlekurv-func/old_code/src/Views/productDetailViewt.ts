import { model } from "../model";

function updateViewProductDetailPage() {
  const productId = model.view.productDetail.selectedId;
  const product = getProductById(productId);
  const html = generateProductDetailPage(product);
  document.getElementById("app")!.innerHTML = html;
}

function generateProductDetailPage(product) {
  if (!product) {
    return /*HTML*/ `
      ${generateNavbar()}
      <main>
        <section class="page active" role="main" aria-label="Produktdetaljer">
          <nav aria-label="Breadcrumb">
            <button class="back-btn" onclick="model.app.currentPage='products'; updateView()" aria-label="Gå tilbake til produktoversikt">← Tilbake til Produkter</button>
          </nav>
          <div role="alert" aria-live="polite">
            <p>Produktet ble ikke funnet</p>
          </div>
        </section>
      </main>
      ${generateFooter()}
    `;
  }
  return /*HTML*/ `
    ${generateNavbar()}
    <main>
      <section class="page active" role="main" aria-label="Produktdetaljer">
        <nav aria-label="Breadcrumb">
          <button class="back-btn" onclick="model.app.currentPage='products'; updateView()" aria-label="Gå tilbake til produktoversikt">← Tilbake til Produkter</button>
        </nav>
        <article class="product-detail">
          <header>
            <div class="product-image" role="img" aria-label="Produktbilde: ${product.name}">${product.image}</div>
            <h1 class="product-name">${product.name}</h1>
          </header>
          <div class="product-info">
            <p class="product-price" aria-label="Pris: ${product.price.toFixed(2)} kroner">
              <span class="currency">kr</span> <span class="amount">${product.price.toFixed(2)}</span>
            </p>
            <p class="product-description">${product.description}</p>
            <p class="product-category">Kategori: <span>${product.category}</span></p>
          </div>
          <footer>
            <button class="btn btn-success" onclick="handleAddToCart(${product.id})" aria-label="Legg ${product.name} i handlekurv">Legg i handlekurv</button>
          </footer>
        </article>
      </section>
    </main>
    ${generateFooter()}
  `;
}
export { updateViewProductDetailPage };
