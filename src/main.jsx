import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'animate.css';
import './index.css'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import counterReducer  from './redux/counterSlice.js'

let store = configureStore({
  reducer: { counterReducer }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <CartProvider>
        <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
     </Provider>
  </StrictMode>,
)
