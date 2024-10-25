import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name: 'Cart',
    initialState: {
        CartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.CartItems.push({
                id: action.payload.id,
                title: action.payload.title,
                price: action.payload.price,
                image: action.payload.image,
                description: action.payload.description,
            })
        },
        removeFromCart: (state, action) => {
            // state.CartItems.splice(state.CartItems.index, 1);
            // OR 
            state.CartItems = state.CartItems.filter(item => item.id !== action.payload.id)
        }
    }
});
export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;



