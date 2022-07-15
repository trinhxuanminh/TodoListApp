import { combineReducers } from 'redux'
import { tasksReducer } from './tasks/tasksSlice'
import { filtersReducer } from './filters/filtersSlice'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer
})

export default rootReducer