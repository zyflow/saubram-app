import {View, Text, Image, StyleSheet} from "react-native";
import React, {useState} from "react";
import { TouchableWithoutFeedback} from "react-native";

export const ServiceItem = ({image, text, onClick}) => {

    const [test, setTest] = useState('?');
    const nav = () => {
        onClick()
    }

    return  <TouchableWithoutFeedback onPress={onClick} style={serviceItemStyle.container}>
            <View style={serviceItemStyle.formContainer} >
                <View style={serviceItemStyle.imageContainer}>
                    <Image style={serviceItemStyle.logo} source={{uri: image}} />
                </View>
                <View style={serviceItemStyle.textBlock}>
                    <Text style={serviceItemStyle.title} >{text}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>


}

export const serviceItemStyle = StyleSheet.create({

    container: {
        height: 120,

        // margin: 10,
        padding: 5,
        width: "100%",
        cursor: "pointer"
    },
    formContainer: {
        flexDirection: "row",
        marginBottom: 5,
        marginTop: 5,
        borderWidth: 0.3,
        borderColor: '#6e6e6e',
        borderRadius: 5,

    },
    imageContainer: {
        width: 100,
        height: 100,
        maxWidth: 100,
        flex: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    logo: {
        height: "100%",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        objectFit: "contain",
    },
    textBlock: {
        justifyContent: "center",
        flex: 2,
        padding: 10,
    },
    title: {
        fontSize: 20,
        justifyContent: "center",
        // lineHeight: 30,
        fontWeight: "500",
        flexDirection: "column",

    },

})




