import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { InputBlock } from "../InputBlock";
import { InputStepCount } from "../InputStepCount";
import { InputRadioGroup } from "../InputRadioGroup";
import { StepInfoContext } from "../../Contexts/StepInfoProvider";

export function RoomSize({ stepValues, setStepValues }) {
  const [stepCountResult, setStepCountResult] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const pricePerm2 = 1;
  const pricePerRoom = 10;

  const [houseType, setHouseType] = useState("Māja");
  const { setSteps, steps, currentStep } = useContext(StepInfoContext);
  // const [price, setPrice] = useState(0);

  useEffect(() => {
    setStepValues({
      roomCount: inputValue,
      roomSize: stepCountResult,
    });

    let totalPrice = 0;
    if (inputValue) {
      totalPrice = pricePerm2 * inputValue;
    }

    if (stepCountResult) {
      totalPrice += stepCountResult * pricePerRoom;
    }
    // console.log(inputValue, stepCountResult);

    setSteps({
      ...steps,
      [currentStep]: {
        roomSizeM2: inputValue,
        roomCount: stepCountResult,
        houseType: houseType,
      },
      totalPrice: totalPrice,
    });
  }, [inputValue, stepCountResult]);

  return (
    <ScrollView>
      <InputBlock
        inputValue={inputValue}
        setInputValue={setInputValue}
        numeric={true}
      />
      <InputStepCount setStepCountResult={setStepCountResult} />
      <InputRadioGroup
        setHouseType={setHouseType}
        options={["Māja", "Dzīvoklis", "Viesu māja"]}
      />
    </ScrollView>
  );
}

export const styles = StyleSheet.create({});
