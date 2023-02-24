import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
// import "overlayscrollbars/css/OverlayScrollbars.min.css";
import App from "./components/App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
