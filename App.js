
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReadStoryScreen from "./screens/ReadStoryScreen"
import WriteStory from "./screens/WriteStory"

import {createBottomTabNavigator} from 'react-navigation-tabs'
export default class App extends React.Component{
  render(){
    return(
      <View>
        <ReadStoryScreen/>
        <WriteStory/>
        <AppContainer/>
      </View>
     

    )
  }
}

const TabNavigator=createBottomTabNavigator({
  ReadStoryScreen:{screens:ReadStoryScreen},
  WriteStory:{screens:WriteStory}

});
const AppContainer=createAppContainer(TabNavigator)
