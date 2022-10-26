import {View, Text, Image, TextInput} from "react-native";
import React, {useState} from "react";
import {serviceItemStyle} from "../css/ServiceItemStyle";
import {styles} from "../css/styles";
import {Animated, TouchableWithoutFeedback} from "react-native";

export const ServiceItem = ({image, text, onClick}) => {

    const [test, setTest] = useState('?');
    const nav = () => {
        onClick()
    }

    return     <View style={serviceItemStyle.container} onPress={onClick}>
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.formContainer} >
                <View >
                    <Image style={serviceItemStyle.logo} source={{uri: image}} />

                </View>
                <View style={serviceItemStyle.textBlock}>
                    <Text style={serviceItemStyle.title} >{text}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>


    </View>
}





