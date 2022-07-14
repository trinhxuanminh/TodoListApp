import React from "react";
import { 
  View,
  Image,
  TextInput,
  Keyboard
} from "react-native";
import AppTheme from "../../theme";
import AppText from "../../common/AppText";
import { connect } from "react-redux";
import AppAction from "../../common/AppAction";
import AppColor from "../../assets/AppColor";

const SearchView = (props: any) => {

  const query = props.data.tasks.filters.query
  const searchTask = props.searchTask

  return (
    <View
      style = {AppTheme.StyleHome.inputView}
    >
      <Image
        style = {AppTheme.StyleHome.inputImage}
        source = {require('../../assets/image/search.png')}
      />
      <TextInput
      style = {AppTheme.StyleHome.textInput}
      placeholder = {AppText.searchPlaceholder}
      placeholderTextColor = {AppColor.placeholderText}
      returnKeyType = "done"
      onChangeText = {searchTask}
      onSubmitEditing = {Keyboard.dismiss}
      defaultValue = {query}
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
      searchTask: (input: any) => dispatch({
        type: AppAction.taskSearched,
        value: input
      })
    }
  }
)(SearchView)