import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image  source={require('../src/assets/logo.png')} ></Image>
      <Text style={styles.text}>Prime Deliver</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        backgroundColor:'#DA5c5c',
      height:90,
      paddingTop:50,
      flexDirection:'row',
      justifyContent:'center',
      
  },
  text:{

    fontSize:18,
    fontWeight: 'bold',
    lineHeight:25,
    color:'#FFF',
    letterSpacing: -0.024,
    marginLeft:5

  }

});

