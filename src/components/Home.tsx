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
import { ITask } from '../untils/ITask';
import Filter from '../common/Filter';
import Flag from '../common/Flag';

const Home = () => {
  const [filterName, setFilterName] = useState('')
  const service: Service = MockService
  const [filter, setFilter] = useState(AppCommon.Filter.all)
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
        returnKeyType = "search"
        onChangeText = {newText => setFilterName(newText)}
        // onSubmitEditing = {submitEditing}
        defaultValue = {filterName}
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
            <TouchableOpacity
              onPress = {() => {
                setListTask(service.changeFlag(item))
              }}
            >
              <View
                style = {AppTheme.StyleHome.taskItem}
              >
                <View
                  style = {{
                    backgroundColor: item.flag == Flag.done ? "#00FF00" : "#FFA500",
                    width: 16,
                    height: 16,
                    borderRadius: 8
                  }}
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