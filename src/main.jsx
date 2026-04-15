import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import Error from './components/error/Error.jsx'
import AllFrinds from './components/main/all-friends/AllFriends.jsx'
import Details from "./components/details/Details.jsx";
import Timeline from "./components/timeline/TimeLine.jsx";
import Stats from "./components/stats/Stats.jsx";
import FriendsProvider from "./context/FriendsContext.jsx";


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
                element: <Details ></Details>,
            },
            {
                path: '/timeline',
                element: <Timeline></Timeline>,
            },
            {
                path: '/stats',
                element: <Stats></Stats>,
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
      <FriendsProvider>
          <RouterProvider router={router}></RouterProvider>
      </FriendsProvider>
  </StrictMode>,
)
