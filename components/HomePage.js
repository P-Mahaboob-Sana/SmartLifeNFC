import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
export default function HomePage() {
  return (
    <View>
      <LinearGradient
        colors={['white', '#000066', 'black']}
        style={styles.background}>
        <Image
          source={{
            uri: 'https://img.lovepik.com/photo/50097/2867.jpg_wh860.jpg',
          }}
          style={styles.InnerImage}
        />
        <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={['#0080FF', '#33FFFF', '#0001CC','black']}
          style={styles.gradient} >
          <Text style={styles.text}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>
<Text style={styles.tag}>Step towards a SmartLife</Text>
      </LinearGradient>

      {/* <Icon.Button name="facebook" backgroundColor="white">
    <Text style={{ fontFamily: 'Arial', fontSize: 15 ,height:50,width:100}}>
      Login with Facebook
    </Text>
  </Icon.Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
  },

  InnerImage: {
    height: 300,
    width: '100%',
  },
  gradient:{
    height:50,
    width:300,
    marginLeft:40,
    marginTop:100
  },
  text:{
   fontSize:25,
   color:'white',
   fontWeight:'bold',
   paddingLeft:80,
   paddingTop:5
   
  },
  tag:{
    fontSize:20,
    fontWeight:'350',
    color:'white',
    paddingLeft:79,
    paddingTop:50
  },
  button:{
    marginLeft:25
  }
});
