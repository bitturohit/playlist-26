import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
   name: "song",
   initialState: [],
   reducers: {
      addSong(state, action) {
         state.push(action.payload);
      },
      removeSong(state, action) {
         const index = state.indexOf(action.payload);
         state.splice(index, 1);
      },
   },
});

const store = configureStore({
   reducer: {
      songs: songsSlice.reducer,
   },
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;

// console.log(store);
// console.log(songsSlice.actions.addSong("Some Song"));

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(songsSlice.actions.addSong("Some Song"));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
