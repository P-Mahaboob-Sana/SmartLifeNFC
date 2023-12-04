import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs/';
import HomePage from './HomePage';
import Checklist from './Checklist';

// import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-ionicons';

const Tab = createBottomTabNavigator();
 const screenOptions ={
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:60,
        background:'#fff'
    }
 }
export default function TabBar() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Home' component={HomePage} options={{
            tabBarIcon:({focused})=>{
               return(
                <View style={{alignItems:'center', justifyContent:'center'}}>
                <Icon name='md-home' size={24} color={focused? "#16247d":"#111"}/>
                <Text style={{fontSize:12, color:'#16247d'}}>Home</Text>
            </View>
               )
            }
        }}/>
        <Tab.Screen name='Checklist' component={Checklist}  options={{
            tabBarIcon:({focused})=>{
               return(
                <View style={{alignItems:'center', justifyContent:'center'}}>
                <Icon name='home' size={24} color={focused? "#16247d":"#111"}/>
                <Text style={{fontSize:12, color:'#16247d'}}>CheckList</Text>
            </View>
               )
            }
        }}/>
        

    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width: 0,
            height: 10,
        }
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
})