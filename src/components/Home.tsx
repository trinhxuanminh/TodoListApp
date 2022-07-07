import React, { useState } from 'react'
import {
  Button,
  TextInput, 
  Text, 
  View, 
  SafeAreaView, 
  StatusBar, 
  Image,
  Keyboard,
  FlatList
} from 'react-native'
import AppCommon from '../common';
import AppTheme from '../theme';
import AppColor from '../assets/AppColor';

const Home = () => {
  const [taskName, setTaskName] = useState('')
  const [filter, setFilter] = useState(AppCommon.Filter.all)

  const [listTask, setListTask] = useState([
    {id: "1", name: "Tom"},
    {id: "2", name: "Jerry"},
    {id: "3", name: "Tom"},
    {id: "4", name: "Jerry"},
    {id: "5", name: "Tom"},
    {id: "6", name: "Để việc tổ chức bố cục của project được hiệu quả bạn cần xác định được các nhóm resource"},
    {id: "7", name: "Tom"},
    {id: "8", name: "Jerry"},
    {id: "9", name: "Tom"},
    {id: "10", name: "Jerry"},
    {id: "11", name: "Tom"},
    {id: "12", name: "Jerry"},
    {id: "13", name: "Tom"},
    {id: "14", name: "Jerry"},
    {id: "15", name: "Tom"},
    {id: "16", name: "Jerry"},
    {id: "17", name: "Tom"},
    {id: "18", name: "Jerry"}
  ])

  return (
    <SafeAreaView style = {AppTheme.StyleHome.safeAreaView}>
      <StatusBar
        backgroundColor = {AppColor.backgroundColor}
        barStyle = {"light-content"}
      />
      <View
        style = {AppTheme.StyleHome.titleView}
      >
        <Text
          style = {AppTheme.StyleHome.titleText}
        >
          Todo List
        </Text>
        <Image
          style = {AppTheme.StyleHome.titleImage}
          source = {require('../assets/image/addTask.png')}
        />
      </View>
      <View
        style = {AppTheme.StyleHome.inputView}
      >
        <Image
          style = {AppTheme.StyleHome.inputImage}
          source = {require('../assets/image/search.png')}
        />
        <TextInput
        style = {AppTheme.StyleHome.textInput}
        placeholder = {AppCommon.AppText.searchPlaceholder}
        returnKeyType = "search"
        onChangeText = {newText => setTaskName(newText)}
        onSubmitEditing = {Keyboard.dismiss}
        defaultValue = {taskName}
        />
      </View>
      <View
        style = {AppTheme.StyleHome.filterView}
      >
        <Image
          style = {AppTheme.StyleHome.filterImage}
          source = {require('../assets/image/filter.png')}
        />
        <Text
          style = {AppTheme.StyleHome.filterText}
        >
          {filter}
        </Text>
      </View>
      <View
        style = {AppTheme.StyleHome.splitView}
      />
      <View
        style = {AppTheme.StyleHome.listView}
      >
        <FlatList
          style = {AppTheme.StyleHome.flatList}
          showsVerticalScrollIndicator = {false}
          bounces = {false}
          data = {listTask}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (
            <View
              style = {AppTheme.StyleHome.taskItem}
            >
              <Text
                style = {AppTheme.StyleHome.nameTaskText}
              >
                {item.name}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home;