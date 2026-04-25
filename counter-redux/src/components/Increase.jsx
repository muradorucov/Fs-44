import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseAction } from '../redux/actions/cnt.actions';

function Increase() {
  const disptach = useDispatch();

  return (
    <button onClick={() => disptach(increaseAction(10))}>increase</button>
  )
}

export default Increase