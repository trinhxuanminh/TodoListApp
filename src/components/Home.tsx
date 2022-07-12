import React, { useEffect, useState } from 'react'
import {
  TextInput, 
  Text, 
  View, 
  SafeAreaView, 
  StatusBar, 
  Image,
  Keyboard,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native'
import AppCommon from '../common';
import AppTheme from '../theme';
import AppColor from '../assets/AppColor';
import { Service } from '../untils/Service';
import MockService from '../untils/MockService';
import { ITask } from '../common/ITask';
import Filter from '../common/Filter';
import Flag from '../common/Flag';

const Home = () => {
  const service: Service = MockService
  const [listTask, setListTask] = useState(new Array<ITask>())

  const showAddView = () => {
    Alert.prompt(
      "Thêm nhiệm vụ",
      "Nhập vào công việc bạn muốn thực hiện",
      [
        {
          text: "Huỷ",
          onPress: Keyboard.dismiss,
          style: "cancel"
        },
        {
          text: "Lưu",
          onPress: (name) => {
            Keyboard.dismiss()
            setListTask(service.add(name))
          }
        }
      ]
    )
  }

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
        <TouchableOpacity
          onPress = {showAddView}
        >
          <Image
            style = {AppTheme.StyleHome.titleImage}
            source = {require('../assets/image/addTask.png')}
          />
        </TouchableOpacity>
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
        returnKeyType = "done"
        onChangeText = {newText => {
          service.setQuery(newText)
          setListTask(service.fetch())
        }}
        onSubmitEditing = {Keyboard.dismiss}
        defaultValue = {service.query}
        />
      </View>
      <View
        style = {AppTheme.StyleHome.filterView}
      >
        <TouchableOpacity
          // onPress = {}
        >
          <Image
            style = {AppTheme.StyleHome.filterImage}
            source = {require('../assets/image/filter.png')}
          />
        </TouchableOpacity>
        <Text
          style = {AppTheme.StyleHome.filterText}
        >
          {service.filter}
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
          renderItem = {({item}) => (
            <TouchableOpacity
              onPress = {() => {
                setListTask(service.changeFlag(item))
              }}
            >
              <View
                style = {AppTheme.StyleHome.taskItem}
              >
                <View
                  style = {[AppTheme.StyleHome.flagTaskView, {
                    backgroundColor: item.flag == Flag.done ? "#00FF00" : "#FFA500"
                  }]}
                >
                </View>
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
    </SafeAreaView>
  )
}

export default Home;