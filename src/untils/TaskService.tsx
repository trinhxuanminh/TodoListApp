import React from "react";
import Service from "./Service";
import ITask from "../common/ITask";
import Filter from "../common/Filter";
import Flag from "../common/Flag";

const TaskService: Service = {
  filterTask(input: ITask[], filter: Filter) {
    var result = input
    switch (filter) {
      case Filter.all: {
        break
      }
      case Filter.done: {
        result = result.filter((item) => {
          return item.flag == Flag.done
        })
        break
      }
      case Filter.unfinished: {
        result = result.filter((item) => {
          return item.flag == Flag.unfinished
        })
        break
      }
    }
    return result
  },
  
  searchTask(input: ITask[], query: string) {
    var result = input
    if (!query || /^\s*$/.test(query)) {
      return result
    }
    result = result.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    return result
  },

  filters(input: ITask[], filter: Filter, query: string): ITask[] {
    var result = input
    result = this.filterTask(result, filter)
    result = this.searchTask(result, query)
    return result
  }
}

export default TaskService