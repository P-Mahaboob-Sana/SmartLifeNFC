import React from 'react'
import {View, Text, StyleSheet,Image,Button,TouchableOpacity, ImageBackground} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Tags from 'react-native-tags';
import Icon from 'react-native-ionicons';

export default function Checklist() {

    
  return (
    <View>
        <LinearGradient  colors={['#66B2FF','#0000CC','#000099', '#000066', 'black']}
        style={styles.background}>
            <View style={[styles.Container, { marginTop: 50 }]} >
        <View style={styles.left} ><Image
            source={{ uri: 'https://image.slidesharecdn.com/revisionpresentsimple-dailyroutine-230520041601-2d5f6e92/85/revision-present-simple-daily-routinepptx-1-320.jpg?cb=1684556533' }}
            style={styles.image}
            resizeMode="cover"
            
          />
          
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>DAILY ROUTINE</Text></TouchableOpacity>
          
          </View>
        <View style={styles.right}><Image
            source={{ uri: 'https://www.shutterstock.com/image-vector/hours-taking-medicine-doctor-trending-260nw-2350309211.jpg' }}
            style={styles.image}
            resizeMode="cover"
           
          />
     <TouchableOpacity style={styles.button}><Text style={styles.btnText}>MEDICATION</Text></TouchableOpacity>
     </View>
        </View>
      
      <View style={[styles.Container, { marginTop: 50 }]}>
        <View style={styles.left2} ><Image
            source={{ uri: 'https://www.bajajallianz.com/blog/wp-content/uploads/2022/12/travel-packing-list-things-to-carry-while-travelling-1.png' }}
            style={styles.image}
            resizeMode="cover"
          
          />
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>TRAVEL</Text></TouchableOpacity>
          </View>
        <View style={styles.right2}><Image
            source={{ uri: 'https://thumbs.dreamstime.com/b/smart-home-automation-temperature-heating-control-security-surveillance-lighting-screen-smartphone-wireless-connections-250263227.jpg' }}
            style={styles.image}
            resizeMode="cover"
            
          />
<TouchableOpacity style={styles.button}><Text style={styles.btnText4}>HOME AUTOMATION</Text></TouchableOpacity></View>
        </View>
        <View>
          {/* <Text style={{color:'white'}}>icon</Text> */}
        <Icon
              name="add-circle"
              style={styles.add}
           />
        </View>
        </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
  },
 Container : {
    flex : 1,
    flexDirection: 'row',
 },
 left : {
    backgroundColor:'#CC0066',
    height: 200, // Set the height
    width: 180,
    marginRight:25,
    marginLeft:10,
    borderRadius:20,
    borderTopLeftRadius:20
    
    
 },
 left2 : {
    backgroundColor:'#CC0066',
    height: 200, // Set the height
    width: 180,
    marginRight:25,
    marginLeft:10,
    borderRadius:20,
    bottom:60

    
    
 },
 right :{
backgroundColor: '#CC0066',
height: 200, // Set the height
    width: 180,
    borderRadius: 20,
    marginTop:30
 },
 right2:{
    backgroundColor: '#CC0066',
    height: 200, // Set the height
        width: 180,
        borderRadius: 20,
        bottom:20   
     },
 image: {
    flex: 1,
    width: 179,
    height: 200,
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },
  button:{
    height:50,
    width:180,
  },
  btnText:{
    fontSize:18,
    fontWeight:'bold',
    color:'black',
    paddingLeft:26,
    paddingTop:12,
    
  },
  btnText4:{
    fontSize:18,
    fontWeight:'bold',
    color:'black',
    paddingLeft:26,
    paddingTop:6,
  },
  // add:{
  //   height:40,
  //   width:40
  // }
})

