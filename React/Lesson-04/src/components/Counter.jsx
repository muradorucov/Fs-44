import { useState } from "react";


function Counter() {
  const [cnt, setCnt] = useState(0);

  let decrease = () => setCnt(cnt - 1);
  let increase = () => setCnt(cnt + 1);

  return (
    <div>Counter
      <br />
      <button onClick={decrease}>-</button>
      <button>{cnt}</button>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default Counter