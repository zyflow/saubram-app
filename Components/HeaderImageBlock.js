import {Image, Linking, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import React from "react";

export const HeaderImageBlock = ({ navigation }) => {
    const image = "https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0";
    const text = 'stuff12r';
    const onClick = () => {
        Linking.openURL('https://facebook.com');
    }

    return (
        <View style={serviceItemStyle.body}>
            <TouchableWithoutFeedback onPress={onClick} >
                <View style={serviceItemStyle.headerContainer}>
                    <Image style={serviceItemStyle.logo} source={{uri: image}} />

                    <View style={serviceItemStyle.textContainer}>
                       <Text style={serviceItemStyle.miniText}> Blogs</Text>
                       <Text style={serviceItemStyle.text}> Eksperta padoms: kad labāk tīrīt māju</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export const serviceItemStyle = StyleSheet.create({
    body: {
        margin: 10,
    },
    textContainer: {
        color: "red",
        position: "absolute",
        bottom: 40,
        width: 250,
        left: 15,

    },
    miniText: {
        textShadowColor: '#000',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        color: "#fff",
        fontSize: 16,
    },
    text: {
        fontSize: 24,
        color: "#fff",
        textShadowColor: '#000',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    headerContainer: {
        width: "100%",
        height: 200,
        borderRadius: 6,
    },

    logo: {
        height: "100%",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        objectFit: "contain",
        borderRadius: 6,
    },



})
