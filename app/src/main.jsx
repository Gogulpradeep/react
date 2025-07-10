import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Nest from './Nest.jsx'
import Ref from './Ref.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
 <Ref/>

   
  </StrictMode>,
)
