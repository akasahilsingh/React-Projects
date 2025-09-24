import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router'
import Accordian from './Components/Accordian.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordian />
  </StrictMode>,
)
