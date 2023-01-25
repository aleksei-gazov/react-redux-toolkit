import * as React from 'react';
// import {StoreContext} from 'react-redux';
import './style.css';
import {incCoutnAC, decCoutnAC,  reducer, initialState } from './reducer'
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

export default function CountUseReducer(props) {

  // return (
  // <StoreContext.Consumer>
  //              {(store) => {
  //               let state = store.getState()


// let [count, disp] = React.useReducer(reducer, initialState)
  return (
    <div>
{/* {count} */}
{props.count}
{/* <button onClick={()=> disp(incCoutnAC())}>+</button>
<button onClick={()=> disp(decCoutnAC())}>-</button> */}
<button onClick={props.inc}>+</button>
<button onClick={props.dec}>-</button>
     </div>
  );


//   </StoreContext.Consumer>
//   )
 }


 const mapStateToProps = (state) => {
   console.log(state)
  return {
    count: state.reducer
  }
}
const mapDispatchToProps = (dispatch: Dispatch ) => {
return {
  inc: ()=> {
    dispatch(incCoutnAC())
  },
  dec: ()=> {
    dispatch(decCoutnAC())
  }
}
}
export const CountUseReducerWRAPPER = connect( mapStateToProps, mapDispatchToProps)( CountUseReducer)