import { configureStore } from "@reduxjs/toolkit";
import moviveReducer from "./moviesSlice";
import favoriteReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    movies: moviveReducer,
    favorites: favoriteReducer,
  },
});
