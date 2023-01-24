import * as React from 'react';
import './style.css';
// import {incCoutnAC, decCoutnAC,  reducer, initialState } from './reducer'
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './reducer_Slice';
export default function App() {

 const count = useSelector(state=> state.counter.value)
 const dispatch = useDispatch();


  return (
    <div>
{count}
<button onClick={()=>dispatch(increment())}>+</button>
<button onClick={()=>dispatch(decrement())}>-</button>
     </div>
  );
}
