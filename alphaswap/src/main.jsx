import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactUs from './Pages/contactus/ContactUs.jsx';
import Launch from './Pages/launch/Launch.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <div>404 Not Found</div>
  },
  {
    path: "/contactus",
    element: <ContactUs />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/launchdapp",
    element: <Launch />,
    errorElement: <div>404 Not Found</div>
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
