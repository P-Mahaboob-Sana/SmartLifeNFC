import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomePage from './HomePage'
import Checklist from './Checklist'
import Icon from 'react-native-ionicons'

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <NavigationContainer>
    <Drawer.Navigator >
    <Drawer.Screen name="Account" component={Checklist} 
      options={{
        title: 'My Account',
        drawerIcon: ({focused, size}) => (
           <Icon
              name="person"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
           />
        ),
     }} 
      />
      <Drawer.Screen name="Home" component={HomePage}  
       options={{
        title: 'Home',
        drawerIcon: ({focused, size}) => (
           <Icon
              name="home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
           />
        ),
     }} />
      <Drawer.Screen name="Checklist" component={Checklist} 
      options={{
        title: 'CheckList',
        drawerIcon: ({focused, size}) => (
           <Icon
              name="checkbox-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
           />
        ),
     }} 
      />
      <Drawer.Screen name="Add User" component={Checklist} 
      options={{
        title: 'Add user',
        drawerIcon: ({focused, size}) => (
           <Icon
              name="person-add"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
           />
        ),
     }} 
      />
      <Drawer.Screen name="LogOut" component={Checklist} 
      options={{
        title: 'LogOut',
        drawerIcon: ({focused, size}) => (
           <Icon
              name="checkbox-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
           />
        ),
     }} 
      />
    </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigation
