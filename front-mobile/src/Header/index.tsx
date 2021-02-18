import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {


  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');
  
  }



  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>   
      <View style={styles.container}>
      <Image  source={require('../assets/logo.png')} ></Image>
      <Text style={styles.text}>Prime Deliver</Text>
    </View>
    </TouchableWithoutFeedback>

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
    marginLeft:5,
  }

});

