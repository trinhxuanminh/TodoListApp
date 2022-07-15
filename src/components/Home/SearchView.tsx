import React from "react";
import { 
  View,
  Image,
  TextInput,
  Keyboard
} from "react-native";
import AppTheme from "../../theme";
import AppText from "../../common/AppText";
import AppColor from "../../assets/AppColor";
import { 
  useSelector,
  useDispatch
} from "react-redux";
import { searched } from "../../reducers/filters/filtersSlice";

const SearchView = (props: any) => {

  const dispatch = useDispatch()
  const query = useSelector((state: any) => state.filters.query)
  const searchTask = (query: string) => {
    const action = searched({
      query: query
    })
    dispatch(action);
  }

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

export default SearchView