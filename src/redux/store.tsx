import { configureStore } from '@reduxjs/toolkit';
import contactReducer from "./Slices/contactSlice";

const store = configureStore({
  reducer: {
  contacts: contactReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
