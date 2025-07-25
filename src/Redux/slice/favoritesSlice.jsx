// favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('favorites')) || [],
};


const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const id = action.payload;
            const index = state.items.indexOf(id);
            if (index === -1) {
                state.items.push(id);
            } else {
                state.items.splice(index, 1);
            }
            localStorage.setItem('favorites', JSON.stringify(state.items)); // Save after change
        },

        removeFromFavorites: (state, action) => {
            state.items = state.items.filter((item) => item !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.items)); // Save after change
        }
    }
});


export const { toggleFavorite, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
