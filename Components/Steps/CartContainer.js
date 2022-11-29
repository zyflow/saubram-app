import React, {useEffect, useState} from "react";
import { Text, StyleSheet, ScrollView, View, TouchableWithoutFeedback } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CartItem} from "../CartItem";
import {Button} from "react-native-paper";

export function CartContainer({navigation}) {
  const [cart, setCartItems] = useState('');

  useEffect(() => {

    const stuff = async  () => {
      await AsyncStorage.getItem('storage_Key').then(res => {
        const data = JSON.parse(res);
        const dateObj = new Date();
        const todayByFormat = `${dateObj.getFullYear()}-${dateObj.getUTCMonth()}-${dateObj.getUTCDay()}`
        let prep = data.map(item => {
          const cartDateObj = new Date(item?.WhenArrive?.arrivalDate);

          /**
           * If cart date less then today, then skip item
           */
          if (cartDateObj.getTime() < dateObj.getTime()) {
            return null
          }

          return <CartItem item={item}/>
        })
        setCartItems(prep)
      })

    }

    stuff()
  }, [])


  const buyAction = async () => {
    await AsyncStorage.setItem('storage_Key', "")
    navigation.navigate("SuccessContainer");
  }


  return (
    <View >
     <TouchableWithoutFeedback  >
       <ScrollView   >
         <View style={styles.cartContainer}>
           {cart}

           <View style={styles.footer}>
             <View style={styles.emptyBlock}>
             </View>
             <View style={styles.purchase}>
               <Button
                   contentStyle={styles.button}
                   style={styles.button}
                   mode="contained"
                   onPress={() => buyAction()}
               >Buy </Button>
             </View>
           </View>
         </View>
       </ScrollView>
     </TouchableWithoutFeedback>
    </View>
  );
}

export const styles = StyleSheet.create({
  cartContainer: {
    padding: 10,
    width: "100%",
  },
  footer: {
    flexDirection: "row"
  },
  large: {
    alignItem: "right",
  },
  purchase: {
    marginTop: 10,
    height: 70,
    justifyContent: "center",
    alignItem: "right",
    flex: 1,
  },
  button: {
    maxWidth: 220,
    width: 100,
    backgroundColor: "#2669ba",
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
  },
  emptyBlock: {
    width: "70%",
  }
});
