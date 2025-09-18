export type Model = {
  app: App,
  products: Product[],
  cart: Cart;
  credentials: { 
    username: string, 
    password: string 
  } | null;
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
    (action: 'login', value: { username: string, password: string }) : void;

    (action: 'addToCart', value:  number ) : void;
};
type ProductCategory = "Elektronikk" | "Hjem" | "Livsstil";

export type Page = "login" | "products" | "product-detail" | "cart";