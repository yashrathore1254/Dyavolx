import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slice/favoritesSlice.jsx'
import cartReducer from './slice/cartSlice.jsx'
import userReducer from './slice/userSlice.jsx'
export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        carts: cartReducer,
        user: userReducer
    }
});
