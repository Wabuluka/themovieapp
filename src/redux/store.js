import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import moviveReducer from "./moviesSlice";
import favoriteReducer from "./favSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviveReducer,
    favorites: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});

store.subscribe(() => {
  localStorage.setItem(
    "favorites",
    JSON.stringify(store.getState().favorites.favorites)
  );
  localStorage.setItem("user", JSON.stringify(store.getState().auth.user));
  localStorage.setItem("token", store.getState().auth.token);
});
