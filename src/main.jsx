import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <h1>Hello World!</h1>,
            },
            {
                path: '/details/:id',
                element: <h1>Details!</h1>,
            },
            {
                path: '/timeline',
                element: <h1>Timeline!</h1>,
            },
            {
                path: '/stats',
                element: <h1>Stats!</h1>,
            },
            {
                path: '*',
                element: <h1>Error!</h1>,
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
