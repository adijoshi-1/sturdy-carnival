import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Dropbox, Chatbox, Contactbox, Profile, NotFound, Login } from './pages'

const router = createBrowserRouter([
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/contactbox',
    element: <Contactbox />,
  },
  {
    path: '/dropbox',
    element: <Dropbox />,
  },
  {
    path: '/chatbox',
    element: <Chatbox />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export const App = () => {
  const loggedIn = useSelector((state) => state.loggedIn)
  useEffect(() => {
    console.log(loggedIn)
    if (!loggedIn && window.location.pathname !== '/login') {
      window.location.href = '/login'
    } else if (loggedIn && window.location.pathname === '/login') {
      window.location.href = '/'
    }
  }, [])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

