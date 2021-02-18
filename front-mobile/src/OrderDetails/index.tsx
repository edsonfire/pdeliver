import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function OrderDetails() {


  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Orders');
  
  }



  return (
    <View>
        <Text>Detalhes do Pedido</Text>     


        >>>>>>>>>>>>>>>>>>>>>>>> 1:59 <<<<<<<<<<<<<<<<<<<<   
    </View>

  );
}

const styles = StyleSheet.create({

    
});

