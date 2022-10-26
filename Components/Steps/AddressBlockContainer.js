import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { Footer } from "../Footer";
import { AddressBlock } from "./AddressBlock";
import { StepInfoContext } from "../../Contexts/StepInfoProvider";
import { styles } from "../../css/styles";
import * as Location from "expo-location";

export function AddressBlockContainer({ route, navigation, items }) {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 56.9354343,
    longitude: 24.1342781,
  });
  // const [currentLocation, setCurernt] = useState(null);
  const { setSteps, steps, currentStep } = useContext(StepInfoContext);

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

  // let currentLocation = ;
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    // setCurrentLocation({
    //   latitude: location.coords.latitude,
    //   longitude: location.coords.longitude,
    // });
    // console.log("te..", location.coords.latitude, location.coords.longitude);
    text = JSON.stringify(location);
  }

  return (
    <ScrollView style={styles.container}>
      <Text>Picture block container</Text>

      <AddressBlock
        navigation={navigation}
        setAddress={setAddress}
        setCurrentLocation={setCurrentLocation}
        currentLocation={currentLocation}
      />
      <Footer navigation={navigation} route={route} />
    </ScrollView>
  );
}
