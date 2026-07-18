import React, { useEffect } from 'react'
import { currentUser } from '../services/auth'
import { useState } from 'react'
import { Navigate, useLocation } from 'react-router';

function PrivateRouter({ children }) {
  const [isLogin, setIsLogin] = useState(null);
  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { user } = await currentUser();
        if (!location.pathname.includes(user.role)) {
          setIsLogin(false)
        }
        else {
          setIsLogin(true)
        }
      } catch (error) {
        setIsLogin(false)
      }
    }
    fetchData()
  }, [])

  if (isLogin === null) {
    return <p>Loading....</p>
  }
  return isLogin ? children : <Navigate to={"/login"} />
}

export default PrivateRouter