import React from 'react'
import Counter from './components/Counter'
import List from './components/List'
import { useDispatch } from 'react-redux'
import { clearListAction } from './redux/actions/list.actions'

function App() {
  const dis = useDispatch()
  return (
    <div>
      <Counter />
      <br />
      <button onClick={() => dis(clearListAction())}>Clear List</button>
      <List />
    </div>
  )
}

export default App