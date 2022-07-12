import React, { useState } from "react";
import { Service } from "./Service";
import { ITask } from "./ITask";
import Filter from "../common/Filter";
import Flag from "../common/Flag";

const MockService: Service = {
  listTask: [
    {id: "2", name: "Minh", flag: Flag.done},
    {id: "1", name: "Mai", flag: Flag.unfinished},
    {id: "0", name: "M", flag: Flag.done}
  ],

  fetch(): ITask[] {
    return this.listTask
  },

  // search(input: string, filter: Filter): any {
  //   return this.listTask.filter((item) => item.toLowerCase().indexOf(input.toLowerCase()) !== -1)
  // },

  // filter(result: any, filter: Filter): any {

  // },

  // check(input: string): any {

  // },

  add(name: string | undefined): ITask[] {
    if (!name || /^\s*$/.test(name)) {
      return this.listTask
    }
    let newTask: ITask = {
      id: String(this.listTask.length),
      name: name,
      flag: Flag.unfinished
    }
    this.listTask = [newTask].concat(this.listTask)
    return this.listTask
  },

  changeFlag(item: ITask): ITask[] {
    let index = this.listTask.indexOf(item)
    let newTask: ITask = {
      id: item.id,
      name: item.name,
      flag: item.flag == Flag.unfinished ? Flag.done : Flag.unfinished
    }
    this.listTask.splice(index, 1, newTask)
    return this.listTask
  }
}

export default MockService