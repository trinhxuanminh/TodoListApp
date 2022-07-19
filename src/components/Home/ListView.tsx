import React from "react";
import { 
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import AppTheme from "../../theme";
import Flag from "../../common/Flag";
import ITask from "../../common/ITask";
import AppColor from "../../assets/AppColor";
import Service from "../../untils/Service";
import TaskService from "../../untils/TaskService";
import MockService from "../../untils/MockService";
import EmptyView from "../EmptyView";
import { 
  useSelector,
  useDispatch
} from "react-redux";
import { flagChanged, removed } from "../../reducers/tasks/tasksSlice";

const ListView = (props: any) => {

  const taskFilters = () => {
    let listTask: ITask[] = useSelector((state: any) => state.tasks.value)
    let query = useSelector((state: any) => state.filters.query)
    let filter = useSelector((state: any) => state.filters.filter)
    return service.filters(listTask, filter, query)
  }

  const service: Service = TaskService
  // const service: Service = MockService
  const dispatch = useDispatch()
  const listTask = taskFilters()

  const taskFlagChanged = (id: number) => {
    const action = flagChanged({
      id: id
    })
    dispatch(action)
  }

  const taskRemoved = (id: number) => {
    const action = removed({
      id: id
    })
    dispatch(action)
  }

  return (
    <View
      style = {AppTheme.StyleHome.listView}
    >
      { listTask.length == 0 &&
        <EmptyView/>
      }
      <FlatList
        style = {AppTheme.StyleHome.flatList}
        showsVerticalScrollIndicator = {false}
        bounces = {false}
        data = {listTask}
        keyExtractor = {(item) => String(item.id)}
        renderItem = {({item}) => (
          <TouchableOpacity
            onPress = {() => taskFlagChanged(item.id)}
          >
            <View
              style = {AppTheme.StyleHome.taskItem}
            >
              <View
                style = {[AppTheme.StyleHome.flagTaskView, {
                  backgroundColor: item.flag == Flag.done ? AppColor.doneTask : AppColor.unfinishedTask
                }]}
              />
              <Text
                style = {AppTheme.StyleHome.nameTaskText}
              >
                {item.name}
              </Text>
              <TouchableOpacity
                onPress = {() => taskRemoved(item.id)}
              >
                <Image
                  style = {AppTheme.StyleHome.removeImage}
                  source = {require('../../assets/image/removeTask.png')}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default ListView