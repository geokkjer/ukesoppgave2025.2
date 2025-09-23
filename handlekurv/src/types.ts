export type AppState = {
  app: App,
  products: Product[],
  cart: Cart;
  users: User[];
}
export type User = {
  id: number;
  username: string;
  password: string;
}
export type App = {
  currentPage: Page;
}
export type Cart = {
  items: CartItem[];
  total: number;
}
export type CartItem = {
  product: Product;
  quantity: number;
}
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: ProductCategory;
}

export type DispatchFunction = {
  (action: 'login', value: { username: string, password: string }): void;
  (action: 'products-view' | 'cart-view' | 'login-view', value: Page): void;
  (action: 'addToCart', value: number): void;
};
type ProductCategory = "Elektronikk" | "Hjem" | "Livsstil";

export type Page = "login" | "products" | "product-detail" | "cart" | "main";