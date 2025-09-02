import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from './components/ui/sonner.tsx'
import './index.css'
import HeadlineProvider from './provider/HeadlineProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeadlineProvider>
      <App />
      <Toaster />
    </HeadlineProvider>
  </StrictMode>
)
