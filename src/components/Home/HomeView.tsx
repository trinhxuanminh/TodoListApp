import React from 'react'
import {
  View, 
  SafeAreaView, 
  StatusBar,
  Keyboard,
  Alert
} from 'react-native'
import AppText from '../../common/AppText';
import AppTheme from '../../theme';
import AppColor from '../../assets/AppColor';
import TopView from './TopView';
import SearchView from './SearchView';
import FilterView from './FilterView';
import ListView from './ListView';
import { connect } from 'react-redux';
import AppAction from '../../common/AppAction';

const HomeView = (props: any) => {

  const taskAdded = props.taskAdded

  const showAddView = () => {
    Alert.prompt(
      AppText.titleAlert,
      AppText.messageAlert,
      [
        {
          text: AppText.cancelAlert,
          onPress: Keyboard.dismiss,
          style: "cancel"
        },
        {
          text: AppText.saveAlert,
          onPress: (name) => {
            Keyboard.dismiss()
            taskAdded(name)
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
      <SearchView/>
      <FilterView/>
      <View
        style = {AppTheme.StyleHome.splitView}
      />
      <ListView/>
    </SafeAreaView>
  )
}

export default connect(
  state => {
    return {}
  },
  dispatch => {
    return {
      taskAdded: (name: any) => dispatch({
        type: AppAction.taskAdded,
        value: name
      })
    }
  }
)(HomeView)