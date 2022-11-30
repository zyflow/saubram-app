import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { HorizontalDatePicker } from "../HorizontalDatePicker";
import { TimePicker } from "../TimePicker";

export function WhenArrive({ setDate, setTime }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kad mums ierasties</Text>
      <HorizontalDatePicker setDate={setDate} />
      {/*<TimePicker setTime={setTime} />*/}
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  button: {
    width: 220,
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
