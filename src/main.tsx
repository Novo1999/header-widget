import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import HeadlineProvider from './provider/HeadlineProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeadlineProvider>
      <App />
    </HeadlineProvider>
  </StrictMode>
)
