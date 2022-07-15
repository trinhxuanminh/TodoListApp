import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

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
    <View
      style = {
        {
          flex: 1,
          marginHorizontal: 16,
          backgroundColor: "red"
        }
      }
    >
      <A/>
      <B/>
    </View>
  )
}

export default MockView