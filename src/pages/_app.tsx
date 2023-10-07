import allReducers from "@/reducers";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createStore } from "redux";

export default function App({ Component, pageProps }: AppProps) {
  const store = createStore(allReducers);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
