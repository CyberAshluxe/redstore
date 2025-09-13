import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'animate.css';
import './index.css'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
