
export const initialState =  0


export const reducer= (state = initialState, action: IncCoutnACType) => {
  switch(action.type) {
    case "INC": {  
     return state += 1
    }
    case 'DEC': {  
     return state -= 2
    }
    default:
  return state
  }
  
}
    
export  type  IncCoutnACType = ReturnType<typeof incCoutnAC>
export const incCoutnAC = () => {
  return {
    type: 'INC'
  }
}
export const decCoutnAC = () => {
  return {
    type: 'DEC'
  }
}