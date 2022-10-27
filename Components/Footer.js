import React, { useContext, useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { StepInfoContext } from "../Contexts/StepInfoProvider";
import { postData } from "../Services/DataService";

export function Footer({ navigation, route, stepValues = {} }) {
  const { setCurrentStep, serviceListData, steps } =
    useContext(StepInfoContext);

  // console.log("steps", steps.totalPrice);
  let currentStep = "RoomSize";
  if (route.name) {
    currentStep = route.name.replace("Container", "");
  }
  const currentIndex = serviceListData.indexOf(currentStep);
  const total = route.params.total ?? 0;

  const nextStep = async () => {
    const newStep = serviceListData[currentIndex + 1];

    if (typeof newStep === "undefined" || typeof newStep === undefined) {
      const resp = await postData(steps);
    } else {
      setCurrentStep(newStep);
      navigation.navigate(newStep + "Container", {
        itemId: 86,
        currentStep,
        nextStep: 2,
        total: 123,
        stepValues,
      });
    }
  };

  const home = () => {
    navigation.navigate("ServiceList", {});
  };

  return (
    <View style={styles.footer}>
      <View>
        <Text style={styles.priceTitle}>Paredzamā cena ...</Text>
        <Text style={styles.price}>{steps.totalPrice} E</Text>
      </View>

      <View>
        <Button
          contentStyle={styles.button}
          style={styles.button}
          mode="contained"
          onPress={() => nextStep()}
        >
          <Text>Next</Text>
        </Button>
      </View>

      {/*<View>*/}
      {/*  <Button*/}
      {/*    contentStyle={styles.button}*/}
      {/*    mode="contained"*/}
      {/*    onPress={() => home()}*/}
      {/*  >*/}
      {/*    <Text>Home</Text>*/}
      {/*  </Button>*/}
      {/*</View>*/}
    </View>
  );
}

export const styles = StyleSheet.create({
  button: {
    maxWidth: 220,
    width: 100,
    backgroundColor: "#2669ba",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    margin: 15,
    padding: 10,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceTitle: {
    color: "#8a8989",
  },
  price: {
    fontWeight: "900",
    fontSize: 15,
  },
});
