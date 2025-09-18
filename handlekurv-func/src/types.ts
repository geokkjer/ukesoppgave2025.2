export type Model = {
  app: App,
  products: Product[],
  cart: Cart;
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

type ProductCategory = "Elektronikk" | "Hjem" | "Livsstil";

export type Page = "products" | "product-detail" | "cart";