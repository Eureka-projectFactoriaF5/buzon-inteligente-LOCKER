import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css';
import { NoAvailableLockers } from './modals/NoAvailableLockers';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoAvailableLockers />
  </StrictMode>,
)
