import { combineReducers } from 'redux'
import { TaskReducer } from './tasks/tasksSlice'

const RootReducer = combineReducers({
  tasks: TaskReducer
})

export default RootReducer