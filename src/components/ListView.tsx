import React from "react";
import { 
  View,
  FlatList,
  TouchableOpacity,
  Text
} from "react-native";
import AppTheme from "../theme";
import Flag from "../common/Flag";

export const ListView = (props: any) => {
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