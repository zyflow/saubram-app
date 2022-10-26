import { StyleSheet } from 'react-native';

export const coffeeStyles = StyleSheet.create({
    item: {
        borderWidth: 1,
        height: 120,
        borderColor: 'black',
        margin: 10,
        borderRadius: 5,
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: 5,
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 5,
    },
    imageBlock: {
        padding: 5,
        flexDirection: "column",
    },
    textBlock: {
        padding: 5,
        flex: 1,
    },
    header: {
        fontSize: 20,
    },
    topLine: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
    },
    buttonContainer: {
        height: 50,
    }

})
