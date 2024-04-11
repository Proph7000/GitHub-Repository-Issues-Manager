import ReactDOM from 'react-dom/client'

import App from '@app/app'
import './reset.css'

const rootElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootElement).render(<App />)
