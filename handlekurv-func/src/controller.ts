import type { AppState, CartItem, User } from './types';

export function addToCart(state: AppState, productId: number, quantity = 1): AppState {
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
  return model;
}
export function loginTask(model: AppState, credentials: { username: string, password: string }): AppState {
  const state = structuredClone(model);
  // Check if the username and password match any user in the model
  if (credentials.username === '' || credentials.password === '') {
    alert('Skriv inn brukernavn eller passord')
  } else if(credentials.username && credentials.password){ 
    
    // check it exist or not, hint! use some() method
    const exist = state.users.some((user: User) => 
      user.username === credentials.username 
      && user.password === credentials.password)
      
    const id = state.users.find((user: User) => 
      user.username === credentials.username 
      && user.password === credentials.password)?.id;
    console.log(id);
    
    if(exist) {
      alert('Velkommen ' + credentials.username);
      state.app.currentPage = "products";
    } else {
      alert('Feil brukernavn eller passord');
    }




    // for (let user of state.users) {
    //   if(user.username === credentials.username) {
    //     alert('Riktig!!!!')
    //     state.app.currentPage = "products";
    //   }
    // }
    
  } else {
    alert('Feil brukernavn eller passord');
  }
  return state;
}
  

