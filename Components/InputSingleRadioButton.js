import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { RadioButton } from "react-native-paper";

export const InputSingleRadioButton = ({
  option,
  currSelected,
  setCurrSelected,
}) => {
  const [checked, setChecked] = useState(false);

  const doSelect = () => {
    setChecked(!checked);
    setCurrSelected(option);
    // setHouseType(checked);
  };

  useEffect(() => {
    if (currSelected !== option) {
      setChecked(false);
    }
  }, [currSelected]);

  return (
    <TouchableWithoutFeedback onPress={() => setChecked(!checked)}>
      <View style={styles.block}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>
            {option} {checked}
          </Text>
        </View>
        <View>
          <RadioButton
            value={option}
            status={checked ? "checked" : "uncheked"}
            onPress={() => doSelect()}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const styles = StyleSheet.create({
  block: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: "#808080",
    height: 50,
    marginBottom: 10,
  },
  titleBlock: {
    display: "flex",
    padding: 15,
    width: "80%",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  endPartBlock: {
    display: "flex",
    height: "100%",
    maxWidth: 120,
    fontWeight: "700",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "20%",
  },
  endPart: {
    fontWeight: "700",
    color: "black",
    fontSize: 17,
  },
});
