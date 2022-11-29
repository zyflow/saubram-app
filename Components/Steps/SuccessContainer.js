import React, { useContext, useEffect, useRef, useState } from "react";
import { Text, StyleSheet, ScrollView, Image, View } from "react-native";
import animationData from "../../assets/1818-success-animation.json";
import LottieView from "lottie-react-native";
import { serviceItemStyle } from "../../css/ServiceItemStyle";

export function SuccessContainer({ route, navigation, items }) {
  const animation = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home", {});
    }, 3000);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={serviceItemStyle.title}>All done!</Text>

        <View style={styles.lottiecontainer}>
          <LottieView
              autoPlay
              loop={false}
              ref={animation}
              style={{
                width: 200,
                height: 200,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              source={animationData}
          />

        </View>
        <View style={styles.infocontainer}>
          <Text style={serviceItemStyle.title}>Redirecting back to list ...</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#faa",
    height: "100%",
    width: "100%"
  },
  infocontainer: {
    // borderWidth: 1,
    // borderColor: "red",
  },
  lottiecontainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: "100%",
    display: "flex",
  },
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
