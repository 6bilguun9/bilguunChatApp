import { ContextProvider } from "../context";
import "../styles/globals.css";
import "../styles/chat.css";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
