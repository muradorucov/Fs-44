import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { RouterProvider } from 'react-router'
import { routers } from './routers/index.jsx'
import "./style.css"

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routers} />
  </Provider>
)
