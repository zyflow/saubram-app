import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { IconButton } from "react-native-paper";

export const InputStepCount = ({ setStepCountResult }) => {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    const newResult = count - 1;
    if (count >= 1) {
      setCount(newResult);
    }
    if (setStepCountResult) {
      setStepCountResult(newResult);
    }
  };

  const increaseCount = () => {
    const newResult = count + 1;
    setCount(newResult);
    if (setStepCountResult) {
      setStepCountResult(newResult);
    }
  };

  return (
    <View style={styles.block}>
      <View style={styles.startLabel}>
        <Text style={styles.startLabelText}> Istabu skaits</Text>
      </View>
      <View style={styles.endPartBlock}>
        <IconButton
          icon="minus-circle"
          iconColor="#ccc"
          size={20}
          onPress={() => decreaseCount()}
        />

        <View style={styles.midNumberContainer}>
          <Text style={styles.midNumberText}>{count}</Text>
        </View>
        <IconButton
          icon="plus-circle"
          iconColor="#ccc"
          size={20}
          onPress={() => increaseCount()}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  block: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: "#808080",
    height: 50,
    marginBottom: 10,
  },
  startLabel: {
    width: "75%",
    padding: 15,
  },
  startLabelText: {
    fontSize: 14,
    fontWeight: "700",
  },
  endPartBlock: {
    display: "flex",
    height: "100%",
    maxWidth: 120,
    fontWeight: "700",
    color: "black",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "25%",
  },
  midNumberContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  midNumberText: {
    fontSize: 17,
    fontWeight: "500",
  },
});
