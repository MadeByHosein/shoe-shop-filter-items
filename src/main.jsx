import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Home/Nav/Nav.jsx'
import {ProductProvider} from './components/context/context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
    <Nav />
    <App />
    </ProductProvider>
  </StrictMode>,
)
