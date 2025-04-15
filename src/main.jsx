import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { InUseSizeLocker } from './modals/InUseSizeLocker'
import { NoAvailableLockers }  from './modals/NoAvailableLockers'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoAvailableLockers />
  </StrictMode>,
)
