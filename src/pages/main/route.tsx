import { RouteObject } from 'react-router-dom'

import { routesPath } from '@shared/constants'

import { MainPage } from './ui'

export const MainPageRouter: RouteObject = {
  path: routesPath.mainGitHub,
  element: <MainPage />,
}
