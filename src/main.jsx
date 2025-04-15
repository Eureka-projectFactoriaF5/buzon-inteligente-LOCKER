import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { NoAvailableLockers }  from './modals/NoAvailableLockers'
import './styles/styles.css';
//import { InUseSizeLocker } from './modals/InUseSizeLocker';
import { AllLockersFull } from './modals/AllLockersFull';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllLockersFull />
  </StrictMode>,
)
