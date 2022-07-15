import ITask from "../../common/ITask"
import Flag from "../../common/Flag"
import AppAction from "../../common/AppAction"

const nextTaskId = (tasks: ITask[]) => {
  const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1)
  return maxId + 1
}

const initialState = {
  value: new Array<ITask>()
}

export const TaskReducer = (state = initialState, action: any) => {
  var newState = state
  switch (action.type) {
    case AppAction.taskAdded: {
      let name = String(action.value)
      newState = {
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
      break
    }
    case AppAction.taskFlagChanged: {
      let id = Number(action.value)
      newState = {
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
      break
    }
    case AppAction.taskRemoved: {
      let id = Number(action.value)
      newState = {
        ...state,
        value: state.value.filter((item) => {
          return item.id != id
        })
      }
      break
    }
    default:
      newState = state
      break
  }
  return newState
}