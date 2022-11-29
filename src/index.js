import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Slice from "./Features/Slice";
import App from "./App";

const store = configureStore({
  reducer: {
    value: Slice
  }
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
