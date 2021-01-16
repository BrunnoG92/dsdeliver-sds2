import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { RectButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {
    const [orders,setOrders] = useState <Order[] > ([]);
    const [isLoading, setIsLoading] = useState (false);
   useEffect(() =>{
       setIsLoading (true);
    fetchOrders ()
    .then (response => setOrders (response.data))
    .catch (() => Alert.alert ("Houve um erro ao buscar os pedidos !"))
    .finally (() => setIsLoading (false));
   }, []);
    return (
        <>
            <Header/>
            <ScrollView style={styles.container}>
              {isLoading ? (
                  <Text>Aguarde enquanto carregamos seus pedidos ...</Text> 
              ): (
                orders.map ( order => (<TouchableWithoutFeedback key = {order.id}>
                    <OrderCard order = {order}/>
                </TouchableWithoutFeedback>))
              )}
              
            </ScrollView>
        </>

    );
}
const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',

    }

});
export default Orders;