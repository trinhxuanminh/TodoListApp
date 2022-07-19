import React from "react";
import { SafeAreaView, Text, View, StyleSheet, StatusBar } from "react-native";
import AppTheme from "../theme";
import AppColor from "../assets/AppColor";

const A = () => {
  return (
    <View
      style = {
        {
          position: 'absolute',
          alignSelf: "center",
          backgroundColor: "blue",
          marginTop: 200,
          width: 100,
          height: 100,
          zIndex: 1
        }
      }
    />
  )
}

const B = () => {
  return (
    <View
      style = {
        {
          backgroundColor: "green",
          flex: 1,
          zIndex: 0
        }
      }
    />
  )
}

const MockView = () => {
  return (
    <SafeAreaView
      style = {AppTheme.StyleHome.safeAreaView}
    >
      <StatusBar
        backgroundColor = {AppColor.backgroundColor}
        barStyle = {"light-content"}
      />
    </SafeAreaView>
  )
}

export default MockView