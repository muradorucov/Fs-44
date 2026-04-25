import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { globalState } from './redux/store/index.js'

createRoot(document.getElementById('root')).render(
  <Provider store={globalState}>
    <App />
  </Provider>
)
