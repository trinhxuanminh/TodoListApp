import { createStore } from 'redux'
import rootReducer from './reducer'

const Store = () => {
  return createStore(rootReducer)
}

export default Store