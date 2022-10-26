import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { InputBlock } from "../InputBlock";
import { InputStepCount } from "../InputStepCount";
import { InputRadioGroup } from "../InputRadioGroup";
import { PricingContext } from "../ServiceView";

export function Step2() {
  return (
    <ScrollView>
      <InputRadioGroup options={["Māja2", "Dzīvoklis2", "Viesu māja2"]} />
      <InputStepCount setStepCountResult={setStepCountResult} />
    </ScrollView>
  );
}

export const styles = StyleSheet.create({});
