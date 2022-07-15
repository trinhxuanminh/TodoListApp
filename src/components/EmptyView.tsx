import React from "react";
import { 
  View,
  Image,
  Text
} from "react-native";
import AppText from "../common/AppText";
import AppTheme from "../theme";

const EmptyView = () => {
  return (
    <View
      style = {AppTheme.StyleCommon.emptyView}
    >
      <Image
        style = {AppTheme.StyleCommon.emptyImage}
        source = {require('../assets/image/emptyTask.png')}
      />
      <Text
        style = {AppTheme.StyleCommon.emptyLabel}
      >
        {AppText.emptyTask}
      </Text>
    </View>
  )
}

export default EmptyView