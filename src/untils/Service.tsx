import React from "react";
import ITask from "../common/ITask";
import Filter from "../common/Filter";

interface Service {
  filterTask(input: ITask[], filter: Filter): ITask[]
  searchTask(input: ITask[], query: string): ITask[]
  filters(input: ITask[], filter: Filter, query: string): ITask[]
}

export default Service