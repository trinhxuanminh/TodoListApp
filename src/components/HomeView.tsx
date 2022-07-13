import React, { 
  useEffect, 
  useState 
} from 'react'
import {
  View, 
  SafeAreaView, 
  StatusBar,
  Keyboard,
  Alert
} from 'react-native'
import AppCommon from '../common';
import AppTheme from '../theme';
import AppColor from '../assets/AppColor';
import { Service } from '../untils/Service';
import MockService from '../untils/MockService';
import { ITask } from '../common/ITask';
import Filter from '../common/Filter';
import { TopView } from './TopView';
import { SearchView } from './SearchView';
import { FilterView } from './FilterView';
import { ListView } from './ListView';

export const HomeView = () => {
  const service: Service = MockService
  const [listTask, setListTask] = useState(new Array<ITask>())

  useEffect(() => {
    setListTask(service.fetch())
  }, [])

  const onChangeText = (newText: string) => {
    service.setQuery(newText)
    setListTask(service.fetch())
  }

  const selectMenu = (filter: Filter) => {
    service.setFilter(filter)
    setListTask(service.fetch())
  }

  const changeFlag = (item: ITask) => {
    setListTask(service.changeFlag(item))
  }

  const showAddView = () => {
    Alert.prompt(
      AppCommon.AppText.titleAlert,
      AppCommon.AppText.messageAlert,
      [
        {
          text: AppCommon.AppText.cancelAlert,
          onPress: Keyboard.dismiss,
          style: "cancel"
        },
        {
          text: AppCommon.AppText.saveAlert,
          onPress: (name) => {
            Keyboard.dismiss()
            setListTask(service.add(name))
          }
        }
      ]
    )
  }

  return (
    <SafeAreaView
      style = {AppTheme.StyleHome.safeAreaView}
    >
      <StatusBar
        backgroundColor = {AppColor.backgroundColor}
        barStyle = {"light-content"}
      />
      <TopView
        showAddView = {showAddView}
      />
      <SearchView
        onChangeText = {onChangeText}
        query = {service.query}
      />
      <FilterView
        selectMenu = {selectMenu}
        filter = {service.filter}
      />
      <View
        style = {AppTheme.StyleHome.splitView}
      />
      <ListView
        listTask = {listTask}
        changeFlag = {changeFlag}
      />
    </SafeAreaView>
  )
}