import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Toggle from './toggle.tsx'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toggle />
  </StrictMode>,
)
