import * as React from 'react';
import './style.css';
import {incCoutnAC, decCoutnAC,  reducer, initialState } from './reducer'
export default function CountUseReducer() {

let [count, disp] = React.useReducer(reducer, initialState)
  return (
    <div>
{count}
<button onClick={()=> disp(incCoutnAC())}>+</button>
<button onClick={()=> disp(decCoutnAC())}>-</button>
     </div>
  );
}
