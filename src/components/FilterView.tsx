import React, {
  useState
} from "react";
import { 
  View,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import {
  Menu,
  MenuItem
} from "react-native-material-menu";
import Filter from "../common/Filter";
import AppTheme from "../theme";


export const FilterView = (props: any) => {
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