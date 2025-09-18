import { render } from './render';
import type { CartItem, Model} from './types';


export function addToCart(state:Model, productId: number,  quantity = 1): Model | void {
  const model = structuredClone(state);

  const product = model.products.find((product) => product.id === productId)
  //const product: CartItem = getProductById(model, productId);
  if (!product) return;

  const existingItem = model.cart.items.find(
    (item: CartItem) => item.product.id === productId,
  );
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    model.cart.items.push({  product, quantity });
  }

  // render(model, null );

  return model;
} 