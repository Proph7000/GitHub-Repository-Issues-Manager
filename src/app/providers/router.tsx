import {
  createBrowserRouter,
  Navigate,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'

import { MainPageRouter } from '@pages/main'

import { MainLayout } from './layouts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [MainPageRouter],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
])

export function RouterProvider() {
  return <ReactRouterProvider router={router} />
}
