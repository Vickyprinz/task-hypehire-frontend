import { configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "../features/home/homeSlice";

const rootReducer = homeSlice.reducer;
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
