import ITask from "../../common/ITask"
import Flag from "../../common/Flag"
import Filter from "../../common/Filter"
import AppAction from "../../common/AppAction"

const initialState = {
  value: [
    {id: 2, name: 'Learn React', flag: Flag.done },
    {id: 1, name: 'Learn Redux', flag: Flag.unfinished},
    {id: 0, name: 'Build something fun!', flag: Flag.done}
  ],
  filters: {
    query: '',
    filter: Filter.all
  }
}

const nextTaskId = (tasks: ITask[]) => {
  const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1)
  return maxId + 1
}

export const TaskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AppAction.taskAdded: {
      let name = String(action.value)
      return {
        ...state,
        value: [
          {
            id: nextTaskId(state.value),
            name: name,
            flag: Flag.unfinished
          },
          ...state.value
        ]
      }
    }
    case AppAction.taskFlagChanged: {
      let id = Number(action.value)
      return {
        ...state,
        value: state.value.map(task => {
          if (task.id !== id) {
            return task
          }
          return {
            ...task,
            flag: task.flag == Flag.unfinished ? Flag.done : Flag.unfinished
          }
        })
      }
    }
    case AppAction.taskSearched: {
      let query = String(action.value)
      return {
        ...state,
        filters: {
          ...state.filters,
          query: query
        }
      }
    }
    case AppAction.taskFiltered: {
      let filter = action.value as Filter
      return {
        ...state,
        filters: {
          ...state.filters,
          filter: filter
        }
      }
    }
    default:
      return state
  }
}