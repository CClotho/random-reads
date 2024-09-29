import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './router/router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from 'features/hooks/AuthProvider'
import UserProvider from 'features/hooks/useUser'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
     <UserProvider>
        
      <RouterProvider router={router}/>
     </UserProvider>
    </AuthProvider>
  </StrictMode>,
)
