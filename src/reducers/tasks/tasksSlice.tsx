import React from "react";
import ITask from "../../common/ITask"
import Flag from "../../common/Flag"
import { createSlice } from "@reduxjs/toolkit";

const nextTaskId = (tasks: ITask[]) => {
  const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1)
  return maxId + 1
}

const initialState = {
  value: new Array<ITask>()
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    added(state, action) {
      let name = String(action.payload.name)
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
    },
    flagChanged(state, action) {
      let id = Number(action.payload.id)
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
    },
    removed(state, action) {
      let id = Number(action.payload.id)
      return {
        ...state,
        value: state.value.filter((item) => {
          return item.id != id
        })
      }
    }
  }
})

const { actions, reducer } = tasksSlice
export const { added, flagChanged, removed } = actions
export const tasksReducer = reducer