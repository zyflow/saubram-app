import {
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
// import { Footer } from "./Footer";
import { Platform } from "react-native";

export const PricingContext = React.createContext({
  price: 0,
  items: {},
  setPrice: () => {},
  setItems: () => {},
});

export const ServiceView = ({ route, navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState({});

  // memoize the full context value
  const contextValue = useMemo(
    () => ({
      price,
      setPrice,
      items,
      setItems,
    }),
    [price, setPrice, items, setItems]
  );

  return (
    <SafeAreaView style={inlineStyle.test}>
      <Text>SERVICE VIEW</Text>
      {/*<ProgressBar*/}
      {/*  progress={(currentStep + 1) / stepContainer.length}*/}
      {/*  color={"#2a7dca"}*/}
      {/*/>*/}
      <KeyboardAvoidingView
        style={inlineStyle.container}
        keyboardVerticalOffset={-900}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        {/*{stepContainer ? stepContainer[currentStep] : ""}*/}

        {/*<RoomSize navigation={navigation} />*/}
        {/*<Footer*/}
        {/*  route={route}*/}
        {/*  setCurrentStep={setCurrentStep}*/}
        {/*  currentStep={currentStep}*/}
        {/*  navigation={navigation}*/}
        {/*/>*/}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export const inlineStyle = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
    height: "100%",
  },
  test: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
  },
  padding: {
    padding: 400,
  },
});
