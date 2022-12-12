import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback, Platform} from "react-native";
import React, {useRef, useState} from "react";

export const GoogleAutoCompleteInput = ({setCurrLoc, setCurrAddress, setAddress, keyboardStatus}) => {
    const ref = useRef();
    const [googlePlacesRef, setGooglePlacesRef] = useState(false)
    /**
     * TODO extract to env.
     * @type {string}
     */
    const apiKey = process.env.GOOGLE_API_KEY

    const clear = () => {
        ref.current?.clear()
    }

    return <View style={styles.googleSearchContainer}>
        <Text>Address:</Text>
        <GooglePlacesAutocomplete
            ref={ref}
            placeholder='Search'
            fetchDetails={true}
            currentLocationLabel='Current location'
            // renderRightButton={() => (
            //
            //     <TouchableWithoutFeedback
            //         onPress={() => {
            //             clear()
            //         }}
            //     >
            //         {Platform.OS == 'android' ? <View style={styles.clearButton}>
            //             <Text style={styles.clearButtonText}>x</Text>
            //         </View>: '' }
            //     </TouchableWithoutFeedback>
            // )}
            onPress={(data, details = null) => {
                setCurrAddress(data.description)
                setAddress(data.description)
                setCurrLoc({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                });
            }}
            query={{
                key: apiKey,
                language: 'en',
                components: 'country:lv',
            }}
            styles={{
                textInputContainer: {
                    // borderWidth: 0.3,
                    // borderColor: "#808080",
                    borderRadius: 5,
                },
            }}
        />
    </View>
}


export const styles = StyleSheet.create({
    googleSearchContainer: {
        padding: 10,
        // minHeight: 100,
        height: 500,
        // maxHeight: 500,
        // width: "100%",
        // display: "flex",
        // borderWidth: 1,
        // borderColor: "red",
        // height: "40%",

    },
    clearButton: {
        width: 30,
        display: "flex",
        alignItems: "center"
    },
    clearButtonText: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
    }
})
