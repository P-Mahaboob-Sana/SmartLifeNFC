import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Checklist from './components/Checklist'
import DrawerNavigation from './components/DrawerNavigation'
import HomePage from './components/HomePage'
import TabBar from './components/TabBar'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import NFCtools from './components/NFCtools'

const App =()=>{
  
  return (
    <NavigationContainer>
      <DrawerNavigation/>
     {/* <NFCtools/> */}
      {/* <Checklist /> */}
    </NavigationContainer>
  );

}
 export default App;