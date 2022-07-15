import { createSlice } from "@reduxjs/toolkit"
import React from "react"
import Filter from "../../common/Filter"

const initialState = {
  query: '',
  filter: Filter.all
}

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    searched(state, action) {
      let query = String(action.payload.query)
      return {
        ...state,
        query: query
      }
    },
    filtered(state, action) {
      let filter = action.payload.filter as Filter
      return {
        ...state,
        filter: filter
      }
    }
  }
})

const { actions, reducer } = filtersSlice
export const { searched, filtered } = actions
export const filtersReducer = reducer