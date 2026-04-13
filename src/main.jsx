import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import Error from './components/error/Error.jsx'
import AllFrinds from './components/main/all-friends/AllFriends.jsx'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <AllFrinds></AllFrinds>,
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

        ]
    },
    {
        path: '*',
        element: <Error></Error>,
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
