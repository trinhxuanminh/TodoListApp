import React, { useState } from "react";
import { Service } from "./Service";
import { ITask } from "../common/ITask";
import Filter from "../common/Filter";
import Flag from "../common/Flag";

const MockService: Service = {
  doneTask: [],
  unfinishedTask: [],
  query: '',
  filter: Filter.all,

  setQuery(input) {
    this.query = input
  },

  setFilter(input) {
    this.filter = input
  },

  fetch(): ITask[] {
    var result: ITask[]
    switch (this.filter) {
      case Filter.all: {
        result = this.unfinishedTask.concat(this.doneTask)
        break
      }
      case Filter.done: {
        result = this.doneTask
        break
      }
      case Filter.unfinished: {
        result = this.unfinishedTask
        break
      }
    }

    result = result.sort((obj1, obj2) => {
      if (obj1.date > obj2.date) {
          return -1;
      }
      if (obj1.date < obj2.date) {
          return 1;
      }
      return 0;
    })

    if (!this.query || /^\s*$/.test(this.query)) {
      return result
    }
    result = result.filter((item) => {
      return item.name.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
    })
    return result
  },

  add(name: string | undefined): ITask[] {
    if (!name || /^\s*$/.test(name)) {
      return this.fetch()
    }
    let newTask: ITask = {
      date: new Date(),
      name: name,
      flag: Flag.unfinished
    }
    this.unfinishedTask = [newTask].concat(this.unfinishedTask)
    return this.fetch()
  },

  changeFlag(item: ITask): ITask[] {
    let newTask: ITask = {
      date: item.date,
      name: item.name,
      flag: item.flag == Flag.unfinished ? Flag.done : Flag.unfinished
    }
    switch (item.flag) {
      case Flag.unfinished: {
        let index = this.unfinishedTask.indexOf(item)
        this.unfinishedTask.splice(index, 1)
        this.doneTask = [newTask].concat(this.doneTask)
        break
      }
      case Flag.done: {
        let index = this.doneTask.indexOf(item)
        this.doneTask.splice(index, 1)
        this.unfinishedTask = [newTask].concat(this.unfinishedTask)
        break
      }
    }
    return this.fetch()
  }
}

export default MockService