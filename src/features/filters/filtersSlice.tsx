import React from "react"
import Filter from "../../common/Filter"
import AppAction from "../../common/AppAction"

const initialState = {
  query: '',
  filter: Filter.all
}

export const FilterReducer = (state = initialState, action: any) => {
  var newState = state
  switch (action.type) {
    case AppAction.filtersSearched: {
      let query = String(action.value)
      newState = {
        ...state,
        query: query
      }
      break
    }
    case AppAction.filtered: {
      let filter = action.value as Filter
      newState = {
        ...state,
        filter: filter
      }
      break
    }
    default:
      newState = state
      break
  }
  return newState
}