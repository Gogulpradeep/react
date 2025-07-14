import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Nest from './Nest.jsx'
import Ref from './Ref.jsx'
import Optimization from '../Optimization.jsx'
import Grammar from './Grammar.jsx'
import Word from './Word.jsx'
import Readtime from './Readtime.jsx'
import Paraphraser from './Paraphraser.jsx'
import Texttone from './Texttone.jsx'
import Video from './Video.jsx'
import HomePage from '../Homepage.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <HomePage/>
    <Grammar/>
    <Word />
    <Readtime />
    <Paraphraser />
    < Texttone />
    <Video />
  

  </StrictMode>,
)
