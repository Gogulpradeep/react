import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Details from './Details.jsx'
import Props from './Props.jsx'
import Money from '../Money.jsx'
import Ref from './Ref.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <Details/>
   <Props/>
   <Money/>
   <Ref/>


   
  </StrictMode>,
)
