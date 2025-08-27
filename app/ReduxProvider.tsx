
"use client";

import { Provider } from "react-redux";
//import { store } from "./components/core/data/redux/store"; // adjust path to your store

import store from "./components/core/data/redux/store";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
