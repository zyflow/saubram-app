import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { styles } from "../../css/styles";

import { Footer } from "../Footer";
import { WhenArrive } from "./WhenArrive";
import { StepInfoContext } from "../../Contexts/StepInfoProvider";

export function WhenArriveContainer({ route, navigation, items }) {
  const [stepValues, setStepValues] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { setSteps, steps, currentStep } = useContext(StepInfoContext);

  useEffect(() => {
    setSteps({
      ...steps,
      [currentStep]: { arrivalDate: date, arrivalTime: time },
    });
  }, [date]);

  return (
    <ScrollView style={styles.container}>
      <Text>Room size container {date}</Text>
      <WhenArrive setDate={setDate} setTime={setTime} />
      <Footer
        stepValues={{ roomValues: stepValues }}
        navigation={navigation}
        route={route}
      />
    </ScrollView>
  );
}
