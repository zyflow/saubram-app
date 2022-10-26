import { Text, View} from "react-native";
import {styles} from "../css/styles";
import React from "react";

export const Ultimate = () => {
    return     <View style={styles.body}>
        <View style={styles.container}>
            <Text style={styles.headerText}> Ultimate TODO:</Text>
        </View>
    </View>
}
