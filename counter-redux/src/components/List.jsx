import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromListAction } from '../redux/actions/list.actions';

function List() {
  const list = useSelector(state => state.list);
  const dis = useDispatch()
  return (
    <ul>
      {
        list.map(item => <li key={item}>
          <span>{item}</span>
          <button onClick={() => dis(removeFromListAction(item))}>delete</button>
        </li>)
      }
    </ul>
  )
}

export default List