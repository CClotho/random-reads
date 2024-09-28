import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './router/router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from 'features/hooks/AuthProvider'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
