import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { InputBlock } from "../InputBlock";
import { InputStepCount } from "../InputStepCount";
import { PricingContext } from "../ServiceView";

export function Step3({ price, setPrice }) {
  const [stepCountResult, setStepCountResult] = useState(0);
  const data = useContext(PricingContext);

  const stepCounterPrice = (e) => {
    setPrice(stepCountResult * 5 + price);
  };

  console.log("doing stuff", stepCountResult, data);

  return (
    <ScrollView>
      <InputBlock />
      <InputStepCount />
    </ScrollView>
  );
}

export const styles = StyleSheet.create({});
