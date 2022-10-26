import { ScrollView } from "react-native";
import React, { useContext } from "react";
import { styles } from "../css/styles";
import { ServiceItem } from "./ServiceItem";
import { StepInfoContext } from "../Contexts/StepInfoProvider";

export const ServiceList = ({ navigation }) => {
  const serviceListData = [
    {
      img: "https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0",
      name: "Standarta uzkopšana",
      stepList: [
        "RoomSize",
        "AddressBlock",
        "PictureBlock",
        "WhenArrive",
        "Success",
      ],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYK1PY1hFoPMZTUn9EZiQYbsQoSV-C7ffpkiRtdNk&s",
      name: "Ģenerāltīrīšana",
      stepList: [
        "RoomSize",
        "PictureBlock",
        "AddressBlock",
        "WhenArrive",
        "Success",
      ],
    },
    {
      img: "https://www.simplybusiness.co.uk/static/5f7cd5caa1ac61f237d8095bc21d715b/8b156/how-to-start-a-cleaning-business-in-the-uk.jpg",
      name: "Biroja uzkopšana",
      stepList: [
        "RoomSize",
        "PictureBlock",
        "AddressBlock",
        "WhenArrive",
        "Success",
      ],
    },
    {
      img: "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/ikbvkbww0wcm8lfu2glt",
      name: "Telpu dezinfekcija",
      stepList: [
        "RoomSize",
        "PictureBlock",
        "AddressBlock",
        "WhenArrive",
        "Success",
      ],
    },
    {
      img: "https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0",
      name: "Logu mazgāšana",
      stepList: [
        "RoomSize",
        "PictureBlock",
        "AddressBlock",
        "WhenArrive",
        "Success",
      ],
    },
  ];

  const { setCurrentStep } = useContext(StepInfoContext);
  const onClickEvent = (item) => {
    setCurrentStep(item.stepList[0]);

    navigation.navigate("RoomSizeContainer", {
      itemId: 86,
      item,
      currentStep: item.name,
      stepList: item.data,
      title: item.name,
    });
  };

  const itemList = serviceListData.map((item, key) => {
    return (
      <ServiceItem
        key={key}
        image={item.img}
        text={item.name}
        onClick={() => onClickEvent(item)}
      />
    );
  });

  return <ScrollView style={styles.body}>{itemList}</ScrollView>;
};
