import React from "react";
import { ITask } from "../common/ITask";
import Filter from "../common/Filter";

export interface Service {
  doneTask: ITask[]
  unfinishedTask: ITask[]
  query: string
  filter: Filter
  setQuery(input: string): void
  setFilter(input: Filter): void
  fetch(): ITask[]
  add(name: string | undefined): ITask[]
  changeFlag(item: ITask): ITask[]
}