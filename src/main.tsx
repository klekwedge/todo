import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import 'overlayscrollbars/overlayscrollbars.css';
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
