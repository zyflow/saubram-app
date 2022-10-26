// import React, {useMemo, useState} from "react";
//
// export const ServiceList = () => {
//     const [currentStep, setCurrentStep] = useState("RoomSize");
//     const serviceList = [
//         "RoomSize",
//         "PictureBlock",
//         "AddressBlock",
//         "WhenArrive",
//     ];
//     const contextValue = useMemo(
//         () => ({
//             serviceListData: serviceList,
//             currentStep,
//             setCurrentStep,
//         }),
//         [serviceList]
//     );
//
//
// };

import { createContext } from "react";

export const StepInfoContext = createContext({
  price: 0,
  items: {},
  steps: {},
  setSteps: () => {},
  setPrice: () => {},
  serviceListData: [],
  currentStep: "",
  setCurrentStep: () => {},
});
