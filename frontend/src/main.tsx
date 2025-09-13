import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "../package/perseus/testing/perseus-init";
import { BrowserRouter } from "react-router-dom"

// main.tsx or App.tsx
import "../package/perseus/src/styles/perseus-renderer.css";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>,
  </BrowserRouter>
)
