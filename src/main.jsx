import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css';
import { AllLockersFull } from './modals/AllLockersFull';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllLockersFull />
  </StrictMode>,
)
