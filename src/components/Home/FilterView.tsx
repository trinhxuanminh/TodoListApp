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
import Filter from "../../common/Filter";
import AppTheme from "../../theme";
import AppColor from "../../assets/AppColor";
import { 
  useSelector,
  useDispatch
} from "react-redux";
import { filtered } from "../../reducers/filters/filtersSlice";

const FilterView = () => {

  const filter = useSelector((state: any) => state.filters.filter)
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()

  const hideMenu = () => setVisible(false)

  const showMenu = () => setVisible(true)

  const filterTask = (filter: Filter) => {
    const action = filtered({
      filter: filter
    })
    dispatch(action);
  }

  const selectMenu = (filter: Filter) => {
    hideMenu()
    filterTask(filter)
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
              source = {require('../../assets/image/filter.png')}
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
              backgroundColor: AppColor.doneTask
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
              backgroundColor: AppColor.unfinishedTask
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
        {filter}
      </Text>
    </View>
  )
}

export default FilterView