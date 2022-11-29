import {Image, StyleSheet, Text, TouchableWithoutFeedback, ScrollView, View} from "react-native";
import {styles} from "../css/styles";
import React from "react";
import {HeaderImageBlock} from "./HeaderImageBlock";
import {CategoryListBlock} from "./CategoryListBlock";
import {SpecialsBlock} from "./SpecialsBlock";
import {SocialIconList} from "./SocialIconsList";

export const Home = ({navigation}) => {
    return (
        <ScrollView style={styles.body}>
            <View style={styles.container}>
                <HeaderImageBlock/>
                <CategoryListBlock navigation={navigation}/>
                <SpecialsBlock navigation={navigation}/>
                <SocialIconList/>
            </View>
        </ScrollView>
    );
};

export const serviceItemStyle = StyleSheet.create({

    body: {
        margin: 10,
    },
    headerContainer: {
        width: "100%",
        height: 200,
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 6,
    },
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
