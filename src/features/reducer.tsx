import { combineReducers } from 'redux'
import { FilterReducer } from './filters/filtersSlice'
import { TaskReducer } from './tasks/tasksSlice'

const RootReducer = combineReducers({
  tasks: TaskReducer,
  filters: FilterReducer
})

export default RootReducer