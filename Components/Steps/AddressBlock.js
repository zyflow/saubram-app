import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { InputBlock } from "../InputBlock";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StepInfoContext } from "../../Contexts/StepInfoProvider";

export function AddressBlock({
  setAddress,
  currentLocation,
  setCurrentLocation,
}) {
  const { setSteps, steps, currentStep } = useContext(StepInfoContext);

  const [currLoc, setCurrLoc] = useState(currentLocation);
  const updateAddress = (data) => {
    setAddress(data);

    setSteps({
      ...steps,
      [currentStep]: {
        adderss: data,
      },
    });
  };

  const initState = {
    ...currentLocation,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0421,
  };

  const getInitialState = () => {
    return initState;
  };

  const onRegionChange = (region) => {
    // console.log("ze rtegion", region);
    return getInitialState();
  };

  const updateMarker = (e) => {

    setCurrLoc({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    });
    return e.nativeEvent.coordinate;
  };

  return (
    <ScrollView>
      <Text style={styles.title}>Kāda ir tava adrese?</Text>

      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={initState}
          // onRegionChange={(region) => onRegionChange(region)}
        >
          <Marker
            draggable
            pinColor={"red"} // any color
            coordinate={currentLocation}
            onDragEnd={(e) => updateMarker(e)}
          />
        </MapView>
      </View>

      <InputBlock
        position={"start"}
        icon={"search1"}
        placeholder={"Meklēt vietu vai adresi"}
        setInputValue={updateAddress}
      />
      <View style={styles.iconBlockContainer}>
        <View style={styles.iconBlock}>
          <Ionicons name="navigate-outline" size={24} color="black" />
        </View>
        <View style={styles.iconBlockText}>
          <Text>Pašreizējā atrašanās vieta</Text>
          <Text>Aitonovas iela 20, Zemgales priekš</Text>
          <Text>
            {currLoc.latitude} {currLoc.longitude}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  iconBlockText: {},
  iconBlockContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
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
    height: 250,
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
    marginBottom: 20,
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
    marginBottom: 15,
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
