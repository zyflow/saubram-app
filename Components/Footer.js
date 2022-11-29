import React, { useContext, useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { StepInfoContext } from "../Contexts/StepInfoProvider";
import { postData } from "../Services/DataService";
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Footer({ navigation, route, stepValues = {}, locked }) {
  const { setCurrentStep, serviceListData, steps } =
    useContext(StepInfoContext);

  let currentStep = "RoomSize";
  if (route.name) {
    currentStep = route.name.replace("Container", "");
  }
  const currentIndex = serviceListData.indexOf(currentStep);

  const nextStep = async () => {
    const newStep = serviceListData[currentIndex + 1];

    if (newStep === 'Success') {
      const existingItem = await AsyncStorage.getItem('storage_Key')
      let allSteps = [];
      const parsedExistingItem = JSON.parse(existingItem);
      if (parsedExistingItem && parsedExistingItem instanceof Array) {
        allSteps = parsedExistingItem
      }
      allSteps.push(steps);
      await AsyncStorage.setItem('storage_Key', JSON.stringify(allSteps))
      const resp = await postData(steps);
    }
    setCurrentStep(newStep);
    navigation.navigate(newStep + "Container", {
      currentStep,
      stepValues,
    });
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
        {locked ?
            <Button
                contentStyle={styles.buttonLocked}
                style={styles.button}
                mode="contained"
                onPress={() => console.log('locked...')}
            >
              <Text>Next</Text>
            </Button> :
            <Button
                contentStyle={styles.button}
                style={styles.button}
                mode="contained"
                onPress={() => nextStep()}
            >
              <Text>Next</Text>
            </Button>
        }
      </View>
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
  buttonLocked: {
    maxWidth: 220,
    width: 100,
    backgroundColor: "#c1c0c0",
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
