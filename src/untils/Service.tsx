import React from "react";
import { ITask } from "./ITask";
import Filter from "../common/Filter";

export interface Service {
  listTask: ITask[]
  fetch(): ITask[]
  // search(input: string, filter: Filter): any
  // filter(result: any, filter: Filter): any
  add(name: string | undefined): ITask[]
  changeFlag(item: ITask): ITask[]
}