import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './layout/user'
import AdminLayout from './layout/admin'
import Home from './pages/user/Home'
import Contact from './pages/user/Contact'
import About from './pages/user/About'
import Dashboard from './pages/admin/Dashboard'
import Products from './pages/admin/Products'
import Contacts from './pages/admin/Contacts'
import NotFound from './pages/404'
import PrivateRouter from './provider/privateRouter'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='/admin' element={<PrivateRouter>
          <AdminLayout />
        </PrivateRouter>}>
          <Route index element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

// RBAC

export default App