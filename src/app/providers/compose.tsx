import { ConfigProvider } from 'antd'

import { RouterProvider } from './router'

export function ComposeProviders() {
  return <ConfigProvider children={<RouterProvider />} />
}
