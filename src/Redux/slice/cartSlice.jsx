// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: JSON.parse(localStorage.getItem("card")) || [],
};

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existing = state.cart.find(item => item.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
                existing.totalPrice = existing.quantity * existing.price;
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1,
                    totalPrice: action.payload.price,
                });
            }

            localStorage.setItem("card", JSON.stringify(state.cart))

        },

        increaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                if (item.quantity >= 3) {
                    return
                }
                item.quantity += 1;
                item.totalPrice = item.quantity * item.price;
            }
            localStorage.setItem("card", JSON.stringify(state.cart))
        },

        decreaseQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                item.quantity -= 1;
                if (item.quantity === 0) {
                    state.cart = state.cart.filter(i => i.id !== item.id);
                } else {
                    item.totalPrice = item.quantity * item.price;
                }
            }
            localStorage.setItem("card", JSON.stringify(state.cart))
        },

        removeFromCart(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            localStorage.setItem("card", JSON.stringify(state.cart))
        },

    },
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
