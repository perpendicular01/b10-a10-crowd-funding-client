import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './routes/router';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Contexts/AuthProvider';
import CampaignProvider from './Contexts/CampaignProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CampaignProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
      </CampaignProvider>
    </AuthProvider>
    
  </StrictMode>,
)
