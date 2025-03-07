import { configureStore } from "@reduxjs/toolkit";
import moviveReducer from "./moviesSlice";
import favoriteReducer from "./favSlice";

export const store = configureStore({
  reducer: {
    movies: moviveReducer,
    favorites: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});

store.subscribe(() => {
  console.log("Store updated!");
  localStorage.setItem(
    "favorites",
    JSON.stringify(store.getState().favorites.favorites)
  );
});
