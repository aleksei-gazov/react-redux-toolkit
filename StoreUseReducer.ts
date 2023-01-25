import { combineReducers, legacy_createStore } from 'redux'
import {reducer} from './reducer'


const reducers =  combineReducers({
  reducer: reducer
})

const store = legacy_createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>

export default store;
