import React, { useContext, useEffect, useRef, useState } from "react";
import { Text, StyleSheet, ScrollView, Image, View } from "react-native";
import animationData from "../../assets/1818-success-animation.json";
import LottieView from "lottie-react-native";
import { serviceItemStyle } from "../../css/ServiceItemStyle";

export function SuccessContainer({ route, navigation, items }) {
  const animation = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("ServiceList", {});
    }, 3000);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={serviceItemStyle.title}>All done!</Text>

      <View style={styles.lottiecontainer}>
        <LottieView
          autoPlay
          loop={false}
          ref={animation}
          style={{
            width: "100%",
            height: "100%",
            // backgroundColor: "red",
          }}
          source={animationData}
        />
      </View>
      <View style={styles.infocontainer}>
        <Text style={serviceItemStyle.title}>Redirecting back to list ...</Text>
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  infocontainer: {
    borderWidth: 1,
    borderColor: "red",
    marginTop: 300,
  },
  lottiecontainer: {
    // borderWidth: 1,
    // borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderColor: "red",
    borderWidth: 1,
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
