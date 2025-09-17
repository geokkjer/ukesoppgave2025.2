import { initialState } from './model';
import { vi } from 'vitest';
import { expect, test } from 'vitest';
import { addToCart } from './controller';
// import type { Model, CartItem, Cart } from './types';



test ("addToCart",()=>{
    //Arrange
    let state= initialState
    // const render = vi.fn (
        // sladknaslk
// )
    // Act
    addToCart(state, 1, 1)

    expect(state.cart.items.length).toBe(1)
} )

