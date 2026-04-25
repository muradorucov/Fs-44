import React, { useState } from 'react'

function Game() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const generateDice = () => {
    let random1 = Math.ceil(Math.random() * 6);
    let random2 = Math.ceil(Math.random() * 6);
    setDice1(random1);
    setDice2(random2);
  }

  return (
    <div>Game

      <br />
      <img src={`/dices/${dice1}.png`} alt="" width={80} />
      :
      <img src={`/dices/${dice2}.png`} alt="" width={80} />
      <button onClick={generateDice}>Zər at</button>
    </div>
  )
}

export default Game