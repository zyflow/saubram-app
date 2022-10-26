import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { InputSingleRadioButton } from "./InputSingleRadioButton";

export const InputRadioGroup = ({ options, setHouseType }) => {
  const [currSelected, setCurrSelected] = useState();

  useEffect(() => {
    setHouseType(currSelected);
  }, [currSelected]);

  const radioButtons = options.map((option, key) => {
    return (
      <InputSingleRadioButton
        setCurrSelected={setCurrSelected}
        currSelected={currSelected}
        setHouseType={setHouseType}
        key={key}
        option={option}
        onClick={(e) => flagOption()}
        onChange={(e) => flagOption()}
      />
    );
  });

  return <View>{radioButtons}</View>;
};

export const styles = StyleSheet.create({});
