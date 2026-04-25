import React from 'react'
import Decrease from './Decrease'
import Increase from './Increase'
import { useDispatch, useSelector } from 'react-redux'
import { addToListAction } from '../redux/actions/list.actions';

function Counter() {
  const cnt = useSelector(x => x.cnt);
  const dispatch = useDispatch();

  return (
    <div>
      <Decrease />
      <button onClick={() => dispatch(addToListAction(cnt))}>{cnt}</button>
      <Increase />
    </div>
  )
}

export default Counter