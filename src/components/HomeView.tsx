import React, { 
  useEffect, 
  useState 
} from 'react'
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
import {
  Menu,
  MenuItem,
  MenuDivider 
} from 'react-native-material-menu';

const HomeView = () => {
  const service: Service = MockService
  const [listTask, setListTask] = useState(new Array<ITask>())

  const onChangeText = (newText: string) => {
    service.setQuery(newText)
    setListTask(service.fetch())
  }

  const selectMenu = (filter: Filter) => {
    service.setFilter(filter)
    setListTask(service.fetch())
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

  const changeFlag = (item: ITask) => {
    setListTask(service.changeFlag(item))
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

const TopView = (props: any) => {
  return (
    <View
      style = {AppTheme.StyleHome.titleView}
    >
      <Text
        style = {AppTheme.StyleHome.titleText}
      >
        Todo List
      </Text>
      <TouchableOpacity
        onPress = {props.showAddView}
      >
        <Image
          style = {AppTheme.StyleHome.titleImage}
          source = {require('../assets/image/addTask.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

const SearchView = (props: any) => {
  return (
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
      placeholderTextColor = "#BCBCBC"
      returnKeyType = "done"
      onChangeText = {props.onChangeText}
      onSubmitEditing = {Keyboard.dismiss}
      defaultValue = {props.query}
      />
    </View>
  )
}

const FilterView = (props: any) => {
  const [visible, setVisible] = useState(false)

  const hideMenu = () => setVisible(false)

  const showMenu = () => setVisible(true)

  const selectMenu = (filter: Filter) => {
    hideMenu()
    props.selectMenu(filter)
  }

  return (
    <View
      style = {AppTheme.StyleHome.filterView}
    >
      <Menu
        style = {AppTheme.StyleHome.filterMenu}
        visible = {visible}
        anchor = {
          <TouchableOpacity
            onPress = {showMenu}
          >
            <Image
              style = {AppTheme.StyleHome.filterImage}
              source = {require('../assets/image/filter.png')}
            />
          </TouchableOpacity>
        }
        onRequestClose = {hideMenu}
      >
        <MenuItem
          onPress = {() => selectMenu(Filter.all)}
        >
          <Text
            style = {AppTheme.StyleHome.filterMenuItem}
          >
            {Filter.all}
          </Text>
        </MenuItem>
        <MenuItem
          onPress = {() => selectMenu(Filter.done)}
        >
          <View
            style = {[AppTheme.StyleHome.flagTaskView, {
              backgroundColor: "#00FF00"
            }]}
          />
          <Text
            style = {AppTheme.StyleHome.filterMenuItem}
          >
            {Filter.done}
          </Text>
        </MenuItem>
        <MenuItem
          onPress = {() => selectMenu(Filter.unfinished)}
        >
          <View
            style = {[AppTheme.StyleHome.flagTaskView, {
              backgroundColor: "#FFA500"
            }]}
          />
          <Text
            style = {AppTheme.StyleHome.filterMenuItem}
          >
            {Filter.unfinished}
          </Text>
        </MenuItem>
      </Menu>
      <Text
        style = {AppTheme.StyleHome.filterText}
      >
        {props.filter}
      </Text>
    </View>
  )
}

const ListView = (props: any) => {
  return (
    <View
      style = {AppTheme.StyleHome.listView}
    >
      <FlatList
        style = {AppTheme.StyleHome.flatList}
        showsVerticalScrollIndicator = {false}
        bounces = {false}
        data = {props.listTask}
        renderItem = {({item}) => (
          <TouchableOpacity
            onPress = {() => props.changeFlag(item)}
          >
            <View
              style = {AppTheme.StyleHome.taskItem}
            >
              <View
                style = {[AppTheme.StyleHome.flagTaskView, {
                  backgroundColor: item.flag == Flag.done ? "#00FF00" : "#FFA500"
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

export default HomeView;