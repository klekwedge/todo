import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import 'overlayscrollbars/css/OverlayScrollbars.min.css';
import App from './components/App/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  // </React.StrictMode>
);
