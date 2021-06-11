import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context'

import Read from './screens/read';
import Write from './screens/write'

export default class Main extends React.Component {
  render() {
    return(
      <SafeAreaProvider>
        <AppContainer>
          <BottomTab.Navigation tabBarOptions={{activeTintColor:'#6dc9c8', inactiveTintColor:'#43b5b4'}}></BottomTab.Navigation>
        </AppContainer>
      </SafeAreaProvider>
    )
  }
}

const BottomTab = createBottomTabNavigator({
  Write:Write, Read:Read
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName;
      if(routeName==='Write') {
        return(
          <Image source={require('./assets/notes.png')} style={{width:30, height:30}}/>
        )
      } else if(routeName==='Read') {
        return(
          <Image source={require('./assets/book.png')} style={{width:30, height:30}}/>
        )
      }
    }
  })
})

const AppContainer = createAppContainer(BottomTab);