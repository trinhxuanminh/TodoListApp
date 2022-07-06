import React, { useState } from 'react';
import {
  Button,
  StyleSheet, 
  TextInput, 
  Text, 
  View, 
  SafeAreaView, 
  StatusBar, 
  Image,
  Keyboard
} from 'react-native';

const App = () => {
  const [taskName, setTaskName] = useState('');

  return (
    <SafeAreaView style =  {styles.container}>
      <StatusBar
        backgroundColor = {"#120D29"}
        barStyle = {"light-content"}
      />
      <Text
        style = {styles.appTitle}
      >
        Todo List
      </Text>
      <View
        style = {styles.viewInput}
      >
        <Image
          style = {styles.iconInput}
          source = {require('../TodoListApp/Icon/search.png')}
        />
        <TextInput
        style = {styles.textInput}
        placeholder = "Tìm kiếm"
        returnKeyType = "search"
        onChangeText = {newText => setTaskName(newText)}
        onSubmitEditing = {Keyboard.dismiss}
        defaultValue = {taskName}
        />
      </View>
      <View
        style = {styles.filterContainer}
      >

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#120D29"
  },
  appTitle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    height: 36,
    color: "#FFF",
    marginTop: 10
  },
  viewInput: {
    alignContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 10,
    paddingHorizontal: 12,
    height: 44,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#4D4D4D",
    borderRadius: 10
  },
  iconInput: {
    width: 16,
    height: 16
  },
  textInput: {
    fontSize: 17,
    flex: 1,
    marginLeft: 8,
    color: "#000"
  },
  filterContainer: {
    height: 40
  }
});

export default App;