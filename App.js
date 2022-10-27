import React, {useMemo, useState} from "react";
import {Home} from "./Components/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Provider as PaperProvider} from "react-native-paper";
import {Button, Text, View} from "react-native";
import {PictureBlock} from "./Components/Steps/PIctureBlock";
import {RoomSize} from "./Components/Steps/RoomSize";
import {RoomSizeContainer} from "./Components/Steps/RoomSizeContainer";
import {PictureBlockContainer} from "./Components/Steps/PIctureBlockContainer";
import {AddressBlockContainer} from "./Components/Steps/AddressBlockContainer";
import {WhenArrive} from "./Components/Steps/WhenArrive";
import {WhenArriveContainer} from "./Components/Steps/WhenArriveContainer";
import {StepInfoContext} from "./Contexts/StepInfoProvider";
import {SuccessContainer} from "./Components/Steps/SuccessContainer";
import Ionicons from "@expo/vector-icons/Ionicons";

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

    const options = (navigation, title) => {
            return {
                headerTitle: (props) => <Text>{title}</Text>,
                headerRight: () => (
                    <Text onPress={() => navigation.navigate("ServiceList", {})}>
                        <Ionicons name="home" size={24} color="black"/> Home
                    </Text>
                ),
                title: title,
            }
    }

    return (
        <PaperProvider>
            <StepInfoContext.Provider value={contextValue}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="ServiceList" component={Home} options={({route}) => {
                            return {title: "Service list"};
                        }}/>

                        <Stack.Screen
                            name="RoomSizeContainer"
                            component={RoomSizeContainer}
                            options={({navigation, route}) => options(navigation, 'Room')}
                            // screenOptions={header}
                        />

                        <Stack.Screen
                            name="PictureBlockContainer"
                            component={PictureBlockContainer}
                            options={({navigation, route}) => options(navigation, 'Picture')}

                        />

                        <Stack.Screen
                            name="AddressBlockContainer"
                            component={AddressBlockContainer}
                            options={({navigation, route}) => options(navigation, 'Address')}

                        />

                        <Stack.Screen
                            name="WhenArriveContainer"
                            component={WhenArriveContainer}
                            options={({navigation, route}) => options(navigation, 'Arrival')}

                        />

                        <Stack.Screen
                            name="SuccessContainer"
                            component={SuccessContainer}
                            options={({navigation, route}) => options(navigation, 'Success')}

                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </StepInfoContext.Provider>
        </PaperProvider>
    );
}

export default App;
