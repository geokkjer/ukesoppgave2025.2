import { initialState } from './model';
import { expect, test } from 'vitest';
import { addToCart } from './controller';
import type { Model } from './types';
// import type { Model, CartItem, Cart } from './types';



test ("addToCart",()=>{
    //Arrange
    const model: Model = {
        ...initialState,
    }
    // Act
    const updated = addToCart(model, 1);
    // Assert
    expect(updated?.cart.items).toHaveLength(1);

} )

