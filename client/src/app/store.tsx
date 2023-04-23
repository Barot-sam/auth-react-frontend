import { configureStore } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import userSlice from "./features/UserSlice";


const store = configureStore({
  reducer: {
    user: userSlice
  }
});

export type ReducerStoreType = ReturnType<typeof store.getState>;

export type ReducerDispatchType = typeof store.dispatch

interface I_ReduxStore {
  children: ReactNode
}

function ReduxStore({ children }: I_ReduxStore) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxStore;
