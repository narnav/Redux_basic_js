import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectColor,cngColor } from './features/counter/clrSlice';

const UserColor = () => {
    const dispatch = useDispatch();
    const clr = useSelector(selectColor);
  return (
    <div> <h1 style={{color:clr}}> UserColor  {clr}</h1>
    <button onClick={()=>dispatch(cngColor({color:"Blue"}))}>Blue</button>
    <button onClick={()=>dispatch(cngColor({color:"Red"}))}>Red</button>
    <button onClick={()=>dispatch(cngColor({color:"Green"}))}>Green</button>
    </div>
  )
}

export default UserColor