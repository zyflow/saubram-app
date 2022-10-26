import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { styles } from "../../css/styles";

import { Footer } from "../Footer";
import { WhenArrive } from "./WhenArrive";

export function SuccessScreenContainer({ route, navigation, items }) {
  return (
    <ScrollView style={styles.container}>
      <Text>Success</Text>
    </ScrollView>
  );
}
