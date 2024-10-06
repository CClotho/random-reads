import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './router/router'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import AuthProvider from 'features/hooks/AuthProvider'
import UserProvider from 'features/hooks/useUser'
import App from 'App'


createRoot(document.getElementById('root')!).render(
  
    <StrictMode>
      <AuthProvider>
      <UserProvider>
       <RouterProvider router={router}></RouterProvider> 
        {/*  <BrowserRouter><App/></BrowserRouter> */}
      </UserProvider>
    </AuthProvider>
    </StrictMode>
 
)
