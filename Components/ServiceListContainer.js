import { Text, View } from "react-native";
import { styles } from "../css/styles";
import React from "react";
import { ServiceList } from "./ServiceList";

export const ServiceListContainer = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Kāds pakalpojums tev ir nepieciešams!
        </Text>
        <Text>
          Izvēlieties vēlamo pakalpojumu, un mēs jums piemeklēsim atbilstošu
          pakalpojumu sniedzēju
        </Text>

        <ServiceList navigation={navigation} />
      </View>
    </View>
  );
};
