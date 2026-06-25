import { configureStore } from "@reduxjs/toolkit";

import { reset } from "./actions";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";

const store = configureStore({
   reducer: {
      songs: songsReducer,
      movies: moviesReducer,
   },
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };

// console.log(store);

// console.log(songsSlice.actions.addSong("Some Song"));

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(songsSlice.actions.addSong("Some Song"));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
