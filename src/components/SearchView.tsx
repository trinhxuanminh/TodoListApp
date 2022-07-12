import React from "react";
import { 
  View,
  Image,
  TextInput,
  Keyboard
} from "react-native";
import AppTheme from "../theme";
import AppCommon from "../common";

export const SearchView = (props: any) => {
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