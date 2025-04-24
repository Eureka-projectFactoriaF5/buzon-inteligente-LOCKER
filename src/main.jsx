import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css';
import { InUseSizeLocker } from './modals/InUseSizeLocker'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InUseSizeLocker />
  </StrictMode>,
)
