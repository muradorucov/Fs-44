import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseAction } from '../redux/actions/cnt.actions';

function Decrease() {
  const disptach = useDispatch();


  return (
    <button onClick={() => disptach(decreaseAction(5))}>decrease</button>
  )
}

export default Decrease