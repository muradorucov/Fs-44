import { useState } from 'react'

function Button() {
  // let text = 
  const [text, setText] = useState("Click")

  function getSayHello() {
    setText("Clicked");
  }


  return (
    <div>
      <button onClick={getSayHello}>{text}</button>
    </div>
  )
}

export default Button