import React, {useContext, useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView, Keyboard
} from "react-native";
import MapView, {Marker} from "react-native-maps";
import {StepInfoContext} from "../../Contexts/StepInfoProvider";
import {GoogleAutoCompleteInput} from "../GoogleAutoCompleteInput";


export function AddressBlock({
                                 setAddress,
                                 currentLocation,
                             }) {
    const [currLoc, setCurrLoc] = useState(currentLocation);
    const [currAddress, setCurrAddress] = useState("");
    const [keyboardStatus, setKeyboardStatus] = useState('hide');

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus("show");
        });
        Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus("hide");
        });
    })

    const updateMarker = (e) => {

        setCurrLoc({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
        });
        return e.nativeEvent.coordinate;
    };

    return (
        <View style={styles.addressBlockContainer}>
            <Text style={styles.title}>Kāda ir tava adrese?</Text>
            {keyboardStatus === 'hide' ? <SafeAreaView style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: currLoc.latitude,
                        longitude: currLoc.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                >
                    <Marker
                        draggable
                        pinColor={"red"} // any color
                        coordinate={currLoc}
                        onDragEnd={(e) => updateMarker(e)}
                    />
                </MapView>
            </SafeAreaView> : ''}

            <View style={styles.googleInputStyle}>
                <GoogleAutoCompleteInput setCurrLoc={setCurrLoc} setCurrAddress={setCurrAddress}
                                         setAddress={setAddress} keyboardStatus={keyboardStatus}/>
            </View>

        </View>
    );
}

export const styles = StyleSheet.create({
    iconBlockText: {},
    googleInputStyle: {
    },
    iconBlockContainer: {
        width: "100%",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
    },
    mapContainer: {
        height: 170,
    },
    addressBlockContainer: {
        height: "80%",
    },
    iconBlock: {
        padding: 10,
        backgroundColor: "#e7e7e7",
        width: 50,
        borderRadius: 5,
        marginRight: 10,
    },
    block: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: "#808080",
        justifyContent: "flex-end",
        height: 50,
        marginBottom: 10,
        padding: 15,
    },
    endPartBlock: {
        display: "flex",
        height: "100%",
        maxWidth: 120,
        backgroundColor: "#b4a7d7",
        fontWeight: "700",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 17,
        width: "25%",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    input: {
        width: "75%",
        // paddingLeft: 5,
        display: "flex",
        // padding: 15,
    },
    map: {
        width: Dimensions.get("window").width,
        height: 150,
        borderRadius: 5,
    },
    textArea: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 20,
        borderWidth: 0.3,
        borderColor: "#ccc",
        width: "90%",
        height: 70,
        borderRadius: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
    },
    buttonBlock: {
        justifyContent: "center",
        alignItems: "center",
    },

    blockTitle: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: "500",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        height: 500,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent",
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
});
