import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { Footer } from "../Footer";
import { AddressBlock } from "./AddressBlock";
import { StepInfoContext } from "../../Contexts/StepInfoProvider";
import * as Location from "expo-location";

export function AddressBlockContainer({ route, navigation, items }) {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 56.9354343,
    longitude: 24.1342781,
  });

  const { setSteps, steps, currentStep } = useContext(StepInfoContext);

  console.log('address///', address)
  useEffect(() => {
    setSteps({
      ...steps,
      [currentStep]: {
        address: address,
      },
    });
  }, [address]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  return (
    // <View style={styles.container}>
    <View >
      <AddressBlock
        // navigation={navigation}
        setAddress={setAddress}
        // setCurrentLocation={setCurrentLocation}
        currentLocation={currentLocation}
      />
      <Footer navigation={navigation} route={route} />
    </View>
  );
}


export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    // height: "100%",
  },
});
