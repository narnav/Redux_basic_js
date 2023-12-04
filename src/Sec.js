import React from 'react'
import { useDispatch } from 'react-redux';
import { cngWaga } from './features/counter/myCounterSlice';

const Sec = () => {
    // methods
    const dispatch = useDispatch();
    return (
        <div>Sec

            <button onClick={() => dispatch(cngWaga())}>cng</button>

        </div>
    )
}

export default Sec