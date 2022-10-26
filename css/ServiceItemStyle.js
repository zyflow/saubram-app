import { StyleSheet } from 'react-native';

export const serviceItemStyle = StyleSheet.create({
    container: {
        borderWidth: 0.3,
        height: 120,
        borderColor: '#6e6e6e',
        margin: 10,
        borderRadius: 5,
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: 5,
        // cursor: "pointer"
    },

    blockContainer: {
        display: "flex",
        flex: 1,
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    logo: {
        width: 100,
        height: "100%",
        display: "flex",
    },
    bigImg: {
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        display: "flex",
    },
    textBlock: {
        justifyContent: "center",
        padding: 10,

    },
    title: {
        fontSize: 20,
        justifyContent: "center",
        lineHeight: 30,
        fontWeight: "500",

    }
})
