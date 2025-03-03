import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
  },
  reducers: {
    addRemoveFavorite(state, action) {
      const existingIndex = state.favorites.findIndex(
        (item) => item.id === action.payload.movie.id
      );
      if (existingIndex === -1) {
        state.favorites.push(action.payload.movie);
      } else {
        state.favorites = state.favorites.filter(
          (movie) => movie.id !== action.payload.movie.id
        );
      }
    },
  },
});
export const { addRemoveFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
