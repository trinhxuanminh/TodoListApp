import React from "react"
import { 
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native"
import AppTheme from "../../theme"

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
          source = {require('../../assets/image/addTask.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

export default TopView