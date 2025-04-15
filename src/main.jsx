import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { InUseSizeLocker } from './modals/InUseSizeLocker'
//import { NoAvailableLockers }  from './modals/NoAvailableLockers'
import { AllLockersFull } from './modals/AllLockersFull';
import './styles/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllLockersFull />
  </StrictMode>,
)
