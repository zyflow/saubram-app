import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback, Image,
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { StepInfoContext } from "../../Contexts/StepInfoProvider";

export function PictureBlock({ navigation, setPictureUrl }) {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [test, setTest] = useState("teszt");
  const [image, setImage] = useState("");
  // const [pickedImagePath, setPickedImagePath] = useState("");
  const { setSteps, steps, currentStep } = useContext(StepInfoContext);

  const makePicture = () => {
    setTest("make picture");

    navigation.navigate("Camera");
  };

  const addPicture = () => {
    setTest("add picture");
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  const urlToBlob = (url) => {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.onerror = reject;
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          resolve(xhr.response);
        }
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob'; // convert type
      xhr.send();
    })
  }

  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImage(result.uri)

    if (!result.cancelled) {
      setPictureUrl(result.uri);
    }
  };

  const openCamera = async (e) => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    if (!result.cancelled) {
      setPictureUrl(result.uri);
    }
  };

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <ScrollView>
      <Text style={styles.title}>Pievieno bildes pas??t??jumam</Text>

      <View style={styles.buttonBlock}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

        <TouchableWithoutFeedback onPress={() => showImagePicker()}>
          <View style={styles.block}>
            <AntDesign name="upload" size={24} color="black" />
            <Text style={styles.blockTitle}>Pievienot bildi</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => openCamera()}>
          <View style={styles.block}>
            <MaterialIcons name="photo-camera" size={24} color="black" />
            <Text style={styles.blockTitle}>Uz??emt bildi</Text>
          </View>
        </TouchableWithoutFeedback>
        <TextInput
          multiline
          style={styles.textArea}
          placeholder={"Vai ir v??l kaut kas, kas mums b??tu j??zina?"}
          numberOfLines={4}
        />

      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  textArea: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 20,
    borderWidth: 0.3,
    borderColor: "#ccc",
    width: "90%",
    height: 70,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  buttonBlock: {
    justifyContent: "center",
    alignItems: "center",
  },
  block: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    borderWidth: 0.3,
    borderColor: "#ccc",
    height: 100,
  },
  blockTitle: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
