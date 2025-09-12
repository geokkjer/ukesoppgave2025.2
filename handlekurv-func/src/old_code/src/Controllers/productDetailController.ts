function showProductDetail(productId) {
  model.app.currentPage = 'product-detail';
  model.view.productDetail.selectedId = productId;
  updateView();
}
