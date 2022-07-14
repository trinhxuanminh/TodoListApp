import React from "react";
import { 
  View,
  FlatList,
  TouchableOpacity,
  Text
} from "react-native";
import AppTheme from "../../theme";
import Flag from "../../common/Flag";
import { connect } from "react-redux";
import AppAction from "../../common/AppAction";
import ITask from "../../common/ITask";
import AppColor from "../../assets/AppColor";
import Service from "../../untils/Service";
import TaskService from "../../untils/TaskService";
import MockService from "../../untils/MockService";

const ListView = (props: any) => {

  const taskFilters = () => {
    let listTask: ITask[] = props.data.tasks.value
    let query = props.data.tasks.filters.query
    let filter = props.data.tasks.filters.filter
    return service.filters(listTask, filter, query)
  }

  const service: Service = TaskService  //MockService
  const listTask = taskFilters()
  const taskChangeFlag = props.taskChangeFlag

  return (
    <View
      style = {AppTheme.StyleHome.listView}
    >
      <FlatList
        style = {AppTheme.StyleHome.flatList}
        showsVerticalScrollIndicator = {false}
        bounces = {false}
        data = {listTask}
        keyExtractor = {(item) => String(item.id)}
        renderItem = {({item}) => (
          <TouchableOpacity
            onPress = {() => taskChangeFlag(item.id)}
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
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default connect(
  state => {
    return {
      data: state
    }
  },
  dispatch => {
    return {
      taskChangeFlag: (id: any) => dispatch({
        type: AppAction.taskFlagChanged,
        value: id
      })
    }
  }
)(ListView)