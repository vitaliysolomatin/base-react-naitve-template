import { combineReducers } from 'redux'
import rootSaga from './RootSaga'
import configureStore from './Store'

export interface RootState {}

export default () => {
  const rootReducer = combineReducers({})

  return configureStore(rootReducer, rootSaga)
}
