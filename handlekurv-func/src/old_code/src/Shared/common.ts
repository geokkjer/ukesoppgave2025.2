import { model } from "../model";
import type { CartItem, Product } from "./types";

export function calculateCartTotal(cartItems: CartItem[]) {
  let total = 0;
  for (const item of cartItems) {
    total += item.product.price * item.quantity;
  }
  return total;
}

export function calculateCartItemCount(cartItems: CartItem[]) {
  let count = 0;
  for (const item of cartItems) {
    count += item.quantity;
  }
  return count;
}

export function getAllProducts() {
  return model.data.products;
}

export function getProductById(id: string) {
  const productId = parseInt(id);
  return model.data.products.find((product) => product.id === productId);
}

export function addToCart(productId: number, quantity = 1) {
  const product: CartItem = getProductById(productId);
  if (!product) return false;

  const existingItem = model.data.cart.find(
    (item: CartItem) => item.productId === productId,
  );
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    model.data.cart.push({ productId, quantity, product });
  }
  return true;
}

export function removeFromCart(productId) {
  const newCart: CartItem[] = [];
  for (const item of model.data.cart) {
    if (item.productId !== productId) {
      newCart.push(item);
    }
  }
  model.data.cart = newCart;
}

export function updateCartQuantity(productId: any, quantity: number) {
  const item = model.data.cart.find((item) => item.productId === productId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
    }
  }
}

export function getCart() {
  return model.data.cart;
}

export function getCartTotal() {
  return calculateCartTotal(model.data.cart);
}

export function getCartItemCount() {
  return calculateCartItemCount(model.data.cart);
}

export function clearCart() {
  model.data.cart = [];
}
