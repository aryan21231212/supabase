import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Supabase from './supabase.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Supabase />
  </StrictMode>,
)
  