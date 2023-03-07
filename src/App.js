import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dropbox, Chatbox, Contactbox, Personal } from './pages'

const router = createBrowserRouter([
  {
    path: '/personal',
    element: <Personal />,
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
    path: '*',
    element: <Dropbox />,
  },
])

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

