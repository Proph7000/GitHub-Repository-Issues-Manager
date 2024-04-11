import {
  createBrowserRouter,
  Navigate,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'

import { MainPageRouter } from '@pages/main'

import { routesPath } from '@shared/constants'

import { MainLayout } from './layouts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [MainPageRouter],
  },
  {
    path: '*',
    element: <Navigate to={routesPath.mainGitHub} />,
  },
])

export function RouterProvider() {
  return <ReactRouterProvider router={router} />
}
