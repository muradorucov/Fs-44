import React from 'react'
import { RouterProvider } from 'react-router'
import { routers } from './routers'
import { Provider } from 'react-redux'
import { globalStore } from './redux/store'

function App() {
  return (
    <Provider store={globalStore}>
      <RouterProvider router={routers} />
    </Provider>
  )
}

export default App