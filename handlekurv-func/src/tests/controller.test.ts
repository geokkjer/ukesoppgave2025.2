import { initialState } from '../model';
import { expect, test } from 'vitest';
import { addToCart, loginTask } from '../controller';
import type { Model } from '../types';
// import type { Model, CartItem, Cart } from './types';



test ("addToCart",()=>{
    //Arrange
    const model: Model = {
        ...initialState,
    }
    // Act
    const updatedModel = addToCart(model, 1);
    // Assert
    expect(updatedModel?.cart.items).toHaveLength(1);

} )
 test ("tester loginTask",()=> {
    //Arrange
    const model: Model = {
        ...initialState,
    }
    // Act
    const updatedModel = loginTask(model, {username: "test", password: "test"});
    // Assert
    expect(updatedModel?.credentials).toEqual({username: "test", password: "test"});
    expect(updatedModel?.app.currentPage).toBe("products");

} )