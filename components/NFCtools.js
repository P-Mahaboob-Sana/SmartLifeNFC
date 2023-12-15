import React from 'react'
import {View,Text, StyleSheet, Image} from 'react-native'
import { LinearTextGradient } from "react-native-text-gradient";
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

const readImg = require('../readingtagimage.png');
const writeImg = require('../writingimage.png');
const addTagImg = require('../addTagimage.png');
const eraseTagImg = require('../erasetagimage.jpg');

const NFCtools = () => {
  return (
    <View >
     <View style={styles.wrapper}> 
    <View style={styles.container}>
        <Text style={styles.heading}>NFC Tools</Text>
        <View style={styles.row}>
        <TouchableOpacity style={styles.inner_container}>
            <Image source={readImg} style={styles.image1}/><Text style={styles.text}>Read Tag</Text></TouchableOpacity>
        <TouchableOpacity style={styles.inner_container}>
        <Image source={writeImg} style={styles.image}/><Text style={styles.text}>Write Tag</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
        <TouchableOpacity style={styles.inner_container}>
        <Image source={addTagImg} style={styles.image}/><Text style={styles.text}>Add Tasks</Text></TouchableOpacity>
        <TouchableOpacity style={styles.inner_container}>
        <Image source={eraseTagImg} style={styles.image}/><Text style={styles.text}>Erase Tasks</Text></TouchableOpacity>
        </View>
        </View>
    </View>
    </View>
  )
}

export default NFCtools

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.75,
    shadowRadius: 10,
    elevation: 5,
    margin:-10
  },
container:{
    display:'flex',
    flexDirection:'column',
    height:400,
    width:400,
    borderWidth:2,
    borderColor:'black',
    borderRadius:20,
    marginTop:50,
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.75,
    shadowRadius: 10,
    elevation: 5, 
},
heading:{
   fontSize:30,
   paddingLeft:40,
   paddingTop:10,
   fontWeight:'bold',
   color:'black',
},
row:{
flex:1,
flexDirection:'row',
},
inner_container:{
    height:120,
    width:150,
    backgroundColor:'#E0E0E0',
    marginLeft:30,
    borderWidth:3,
    borderColor:'black',
    borderRadius:20,
    marginTop:30,
    shadowColor:'gray',
    shadowOffset:{height:10, width:0},
    shadowOpacity: 0.9,
    elevation: 5,
    shadowRadius:20
},
text:{
  paddingTop:10,
  paddingLeft:30,
  fontWeight:'bold',
  fontSize:20
},
image:{
    marginTop:20,
    marginLeft:50,
    height:50,
    width:50
},
image1:{
  height:40,
  width:40,
  marginTop:20,
  marginLeft:50,
  height:50,
  width:50
}
})
