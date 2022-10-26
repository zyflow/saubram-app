import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const InputBlock = ({
  setInputValue,
  position = "end",
  icon = null,
  placeholder = null,
  numeric = false,
}) => {
  const [text, setText] = useState();
  // setInputValue(333);

  const updateFields = (e) => {
    if (numeric) {
      const newText = checkForNumbersOnly(e);
      // console.log("new", newText);
      setText(newText);
      setInputValue(newText);
    } else {
      setText(e);
      setInputValue(e);
    }
  };

  const checkForNumbersOnly = (text) => {
    let newText = "";
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
    }

    return newText.substring(0, 10);
  };

  return (
    <View style={styles.block}>
      {position === "start" ? (
        <View style={styles.startPartBlock}>
          <Text style={styles.endPart}>
            {icon ? <AntDesign name={icon} size={24} color="black" /> : null}
          </Text>
        </View>
      ) : null}
      <TextInput
        numeric
        keyboardType={"numeric"}
        style={styles.input}
        value={text}
        placeholder={placeholder ? placeholder : ""}
        // onChange={(e) => updateFields(e)}
        onChangeText={(e) => updateFields(e)}
      />
      {position === "end" ? (
        <View style={styles.endPartBlock}>
          <Text style={styles.endPart}>m2</Text>
        </View>
      ) : null}
    </View>
  );
};

export const styles = StyleSheet.create({
  input: {
    // paddingLeft: 5,
    display: "flex",
    width: "85%",
    padding: 15,
    paddingLeft: 30,
  },

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

    paddingLeft: 20,
  },
  endPartBlock: {
    display: "flex",
    height: "100%",
    maxWidth: 120,
    backgroundColor: "#b4a7d7",
    fontWeight: "700",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 17,
    width: "25%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  startPartBlock: {
    display: "flex",
    height: "100%",
    maxWidth: 120,
    // backgroundColor: "#b4a7d7",
    fontWeight: "700",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 17,
    width: "15%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  endPart: {
    fontWeight: "700",
    color: "black",
    fontSize: 17,
  },
});
