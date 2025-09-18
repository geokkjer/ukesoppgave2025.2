import type { CartItem, Model } from './types';


export function addToCart(state: Model, productId: number, quantity = 1): Model {
  const model = structuredClone(state);

  const product = model.products.find((product) => product.id === productId)
  //const product: CartItem = getProductById(model, productId);
  if (!product) return model;

  const existingItem = model.cart.items.find(
    (item: CartItem) => item.product.id === productId,
  );
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    model.cart.items.push({ product, quantity });
  }

  // render(model, null );

  return model;
}
export function loginTask(model: Model, credentials: { username: string, password: string }): Model {
  const state = structuredClone(model);
  state.credentials!.username = credentials.username;
  state.credentials!.password = credentials.password;
  state.app.currentPage = "products";
  return state;
}