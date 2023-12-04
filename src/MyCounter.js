import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cngWaga, selectBaga } from './features/counter/myCounterSlice';

const MyCounter = () => {
    // variables
    const myBaga = useSelector(selectBaga);
    // methods
    const dispatch = useDispatch();
  return (
    <div>MyCounter

        <button onClick={()=>dispatch(cngWaga())}>+</button>
        {myBaga}
    </div>
  )
}

export default MyCounter