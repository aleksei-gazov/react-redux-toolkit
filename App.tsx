import * as React from 'react';
import './style.css';
import CountUseReducer, { CountUseReducerWRAPPER } from './CountUseReducer';
// import { useSelector, useDispatch } from 'react-redux';
// import {increment, decrement,  reset} from './reducer_Slice';
export default function App() {

//  const count = useSelector(state=> state.counter.value)
//  const dispatch = useDispatch();

  return (
    <div>

{/* {count}
<button onClick={()=>dispatch(increment())}>+</button>
<button onClick={()=>dispatch(decrement())}>-</button>
<button onClick={()=>dispatch( reset())}>reset</button> */}
<hr/>
{/* <CountUseReducer/> */}
<CountUseReducerWRAPPER/>
     </div>
  );
}


