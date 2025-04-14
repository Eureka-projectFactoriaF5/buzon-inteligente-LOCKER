import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InUseModalSizeLocker } from './modals/InUseModalSizeLocker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InUseModalSizeLocker />
  </StrictMode>,
)
