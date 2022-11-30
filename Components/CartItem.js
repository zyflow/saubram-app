import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import image from '../assets/cleaner.jpg';

export function CartItem({item}) {
    const loadedImage = item.PictureBlock.pictureUrl;
    return <View style={styles.item}>
        <View style={styles.imageBlock}>
            {loadedImage ?
                <Image source={{uri: loadedImage}} style={styles.image}/> :
                <Image source={image} style={styles.image} />
            }
        </View>
        <View style={styles.infoContainer}>
            <View style={styles.infoBlock}>
                <Text>Address: {item.AddressBlock.address}</Text>
                <Text>Rooms: {item.RoomSize.houseType} {item.RoomSize.roomCount} {item.RoomSize.roomSizeM2}</Text>
                <Text>Arrival: {item.WhenArrive.arrivalDate}</Text>
            </View>
            <View style={styles.totalBlock}>
                <Text style={styles.text}>Total: {item.totalPrice} €</Text>
            </View>
        </View>

    </View>
}


export const styles = StyleSheet.create({
    infoContainer: {
        flex: 1,
    },
    infoBlock: {
        height: 100,
    },
    totalBlock: {
        width: "100%"
    },
    text: {
        textAlign: "right",
        alignItem: "right",
        fontSize: 20,
    },
    item: {
        flexDirection: "row",
        borderWidth: 0.3,
        borderColor: '#6e6e6e',
        width: "100%",
        height: 150,
        marginTop: 10,
        borderRadius: 6,
        padding: 5,
    },
    imageBlock: {
        width: 130,
    },
    image: {
        width: 120,
        height: "100%",
        borderRadius: 5,
    },
    large: {
        width: "100%",
        // height: 300,
        // borderColor: "red",
        // borderWidth: 1,
    }
});
