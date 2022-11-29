import React, { useContext, useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

import { RoomSize } from "./RoomSize";
import { Footer } from "../Footer";
import { serviceItemStyle } from "../../css/ServiceItemStyle";

export function RoomSizeContainer({ route, navigation, items }) {
  const [stepValues, setStepValues] = useState();
  const [locked, setLocked] = useState(true);



    console.log('step values', stepValues)
  return (
    <ScrollView style={styles.container}>
      <Text style={serviceItemStyle.title}>Room size container</Text>
      <RoomSize
        navigation={navigation}
        stepValues={stepValues}
        setStepValues={setStepValues}
        setLocked={setLocked}
      />
      <Footer
        stepValues={{ roomValues: stepValues }}
        navigation={navigation}
        route={route}
        locked={locked}
      />
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
});
