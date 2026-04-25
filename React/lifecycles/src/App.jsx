import { useState } from 'react'
import Component from './Counter'
import Blogs from './Blogs'

function App() {
  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <Blogs />
      {/* <button
        onClick={() => setIsShow(!isShow)}
      >{isShow ? "HIDE" : "SHOW"}</button>
      {isShow ? <Component /> : null} */}
    </div>
  )
}

export default App