import React from 'react'
import {View, Text, StyleSheet,Image,Button,TouchableOpacity, ImageBackground} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Tags from 'react-native-tags';
import Icon from 'react-native-ionicons';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

export default function Checklist() {

    
  return (
    <GestureHandlerRootView>
    <ScrollView>
      <LinearGradient colors={['#3333FF','#0000CC','#000099', '#000066', '#000033']}>
      <TouchableOpacity style={styles.container}><Text style={styles.text}>Daily Routine</Text></TouchableOpacity> 
      <TouchableOpacity style={styles.container}><Text style={styles.text}>Medication</Text></TouchableOpacity> 
      <TouchableOpacity style={styles.container}><Text style={styles.text}>Travel Preps</Text></TouchableOpacity> 
      <TouchableOpacity style={styles.container}><Text style={styles.text}>Home Automation</Text></TouchableOpacity>
      </LinearGradient>
    </ScrollView>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container:{
    height:150,
    width:350,
    backgroundColor:'#E0E0E0',
    borderWidth:4,
    borderColor:'#3399FF',
    marginTop:30,
    marginLeft:30,
    borderRadius:20,
    shadowColor:'black',
    shadowOffset:{height:10, width:0},
    shadowOpacity: 0.9,
    elevation: 5,
    shadowRadius:20
  },
  text:{
 paddingTop:50,
 paddingLeft:80,
 fontSize:25,
 fontWeight:'bold',
 fontFamily:'SpaceMono-Regulars'
  }
})

