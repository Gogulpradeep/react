import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ParentCompound from './ParentCompound.jsx'
import Card from './Card.jsx'
import Counter from './Counter.jsx'
import Details from './Details.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <Details />
   
  </StrictMode>,
)
