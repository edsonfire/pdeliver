import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, Alert } from 'react-native';
import { RectButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fechOrders } from '../Api';
import Header from '../Header';
import OrderCard from '../OrderCard'
import { Order } from '../types';



 function Orders() {

    const [orders, setOrders] = useState<Order[]>([])

    const [isLoading, setIsloading] = useState(false);


      useEffect(()=>{
          setIsloading(true);
          fechOrders()
          .then(response => setOrders(response.data))
          .catch(error => Alert.alert('Algo saiu errado!!!!'))
          .finally(()=>setIsloading(false))
      }, []);

 

      return (
    <>
             <Header></Header>
            <ScrollView style={styles.container}>

            

             {
               isLoading ?(
                    <Text>Buscando Pedidos...</Text>
               ):(

                orders.map(
                  order => (
                    <TouchableWithoutFeedback key={order.id}>
                         <OrderCard  order={order}></OrderCard>
              
 
                    </TouchableWithoutFeedback>
                  )
                )
               )
             }
            </ScrollView>

    </>

  );
}

const styles = StyleSheet.create({
  container:{

    paddingRight:'5%',
    paddingLeft:'5%'
  }

});


export default Orders;
