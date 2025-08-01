import { BrowserRouter, HashRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <HashRouter>
    <App />
  </HashRouter>
  </BrowserRouter>
)
