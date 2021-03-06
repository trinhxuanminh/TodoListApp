import Service from "./Service";
import ITask from "../common/ITask";
import Filter from "../common/Filter";
import Flag from "../common/Flag";

const MockService: Service = {
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
    var result: ITask[] = [
      {id: 5, name: 'Hãy luôn nhớ rằng trạng thái là "nguồn chân lý" của bạn', flag: Flag.unfinished},
      {id: 4, name: 'Simple', flag: Flag.done},
      {id: 3, name: 'Hãy cảnh giác với việc loại bỏ trạng thái trên cơ sở một bộ lọc tạm thời.', flag: Flag.unfinished},
      {id: 2, name: 'Learn React', flag: Flag.done },
      {id: 1, name: 'Learn Redux', flag: Flag.unfinished},
      {id: 0, name: 'Build something fun!', flag: Flag.done}
    ]
    result = this.filterTask(result, Filter.all)
    result = this.searchTask(result, "")
    return result
  }
}

export default MockService