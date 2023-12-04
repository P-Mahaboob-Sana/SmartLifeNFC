import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Checklist from './components/Checklist'
import DrawerNavigation from './components/DrawerNavigation'
import HomePage from './components/HomePage'
import TabBar from './components/TabBar'
import { NavigationContainer } from '@react-navigation/native'

const App =()=>{
  
  return (
<DrawerNavigation/>
  );

}
 export default App;