import React, { useMemo, useState } from "react";
import { Home } from "./Components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { PictureBlock } from "./Components/Steps/PIctureBlock";
import { RoomSize } from "./Components/Steps/RoomSize";
import { RoomSizeContainer } from "./Components/Steps/RoomSizeContainer";
import { PictureBlockContainer } from "./Components/Steps/PIctureBlockContainer";
import { AddressBlockContainer } from "./Components/Steps/AddressBlockContainer";
import { WhenArrive } from "./Components/Steps/WhenArrive";
import { WhenArriveContainer } from "./Components/Steps/WhenArriveContainer";
import { StepInfoContext } from "./Contexts/StepInfoProvider";
import { SuccessContainer } from "./Components/Steps/SuccessContainer";

function App() {
  const Stack = createNativeStackNavigator();

  const [currentStep, setCurrentStep] = useState("RoomSize");
  const [steps, setSteps] = useState({
    RoomSize: {
      roomSizeM2: 0,
      roomCount: 0,
      housingType: "apartment",
    },
    AddressBlock: {
      address: "",
    },
    WhenArriveBlock: {
      date: "",
      time: "",
    },
  });

  const serviceList = [
    "RoomSize",
    "PictureBlock",
    "AddressBlock",
    "WhenArrive",
    "Success",
  ];
  const contextValue = useMemo(
    () => ({
      serviceListData: serviceList,
      currentStep,
      setCurrentStep,
      steps,
      setSteps,
    }),
    [serviceList]
  );

  return (
    <PaperProvider>
      <StepInfoContext.Provider value={contextValue}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="ServiceList" component={Home} />
            {/*<Stack.Screen*/}
            {/*  name="Item"*/}
            {/*  component={ServiceView}*/}
            {/*  options={({ route }) => {*/}
            {/*    return { title: route.params.title };*/}
            {/*  }}*/}
            {/*/>*/}
            <Stack.Screen
              name="RoomSizeContainer"
              component={RoomSizeContainer}
              options={({ route }) => {
                return { title: route.params.title };
              }}
            />

            <Stack.Screen
              name="PictureBlockContainer"
              component={PictureBlockContainer}
              options={({ route }) => {
                return { title: route.params.title };
              }}
            />

            <Stack.Screen
              name="AddressBlockContainer"
              component={AddressBlockContainer}
              options={({ route }) => {
                return { title: route.params.title };
              }}
            />

            <Stack.Screen
              name="WhenArriveContainer"
              component={WhenArriveContainer}
              options={({ route }) => {
                return { title: route.params.title };
              }}
            />

            <Stack.Screen
              name="SuccessContainer"
              component={SuccessContainer}
              options={({ route }) => {
                return { title: route.params.title };
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StepInfoContext.Provider>
    </PaperProvider>
  );
}

export default App;
