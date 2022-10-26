import {Button, FlatList, Text, TextInput, ToastAndroid, View, Image} from "react-native";
import {styles} from "../css/styles";
import {coffeeStyles} from "../css/coffee";
import React, {useEffect, useState} from "react";
import {ItemBlockWithImage} from "./ItemBlockWithImage";

export const Coffee = () => {

    const coffeeList = [
        {
            name: "Jacobs",
            image: "https://cdn.shopify.com/s/files/1/0413/1107/6505/products/03231408-4104de-1650x1650_500x.jpg?v=1606812943",
            rating: 3,
        },
        {
            name: "Pellini",
            image: "https://netprice.lv/369-large_default/pellini-nr-9-cremoso-pupinas-1-kg.jpg",
            rating: 3,
        },
        {
            name: "Burtukana",
            image: "https://img.kavosdraugas.lt/04f56592-7ca4-4b16-818f-88e104f9780b/470x470/burtukaanajpg.jpg",
            rating: 3,
        },
        {
            name: "Jacobs",
            image: "https://cdn.shopify.com/s/files/1/0413/1107/6505/products/03231408-4104de-1650x1650_500x.jpg?v=1606812943",
            rating: 3,
        },
        {
            name: "Pellini",
            image: "https://netprice.lv/369-large_default/pellini-nr-9-cremoso-pupinas-1-kg.jpg",
            rating: 3,
        },
        {
            name: "Burtukana",
            image: "https://img.kavosdraugas.lt/04f56592-7ca4-4b16-818f-88e104f9780b/470x470/burtukaanajpg.jpg",
            rating: 3,
        },
        {
            name: "Jacobs",
            image: "https://cdn.shopify.com/s/files/1/0413/1107/6505/products/03231408-4104de-1650x1650_500x.jpg?v=1606812943",
            rating: 3,
        },
        {
            name: "Pellini",
            image: "https://netprice.lv/369-large_default/pellini-nr-9-cremoso-pupinas-1-kg.jpg",
            rating: 3,
        },
        {
            name: "Burtukana",
            image: "https://img.kavosdraugas.lt/04f56592-7ca4-4b16-818f-88e104f9780b/470x470/burtukaanajpg.jpg",
            rating: 3,
        },
    ];



    const renderItem = ({ item }) => (
        <ItemBlockWithImage title={item.name} image={item.image} rating={item.rating} edit={false}  />
    );

    return     <View style={styles.body}>
        <View style={styles.container}>
            <Text style={styles.headerText}>Coffee page ({coffeeList.length})</Text>

            <FlatList
                data={coffeeList}
                renderItem={renderItem}
                keyExtractor={(item,index) => index.toString()}
            />
        </View>
    </View>
}
