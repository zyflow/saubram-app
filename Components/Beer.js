import {
  Button,
  FlatList,
  Text,
  TextInput,
  ToastAndroid,
  View,
  Modal,
  Platform,
} from "react-native";
import { styles } from "../css/styles";
import { modalStyles } from "../css/modal";
import React, { useEffect, useState } from "react";
import { ItemBlockWithImage } from "./ItemBlockWithImage";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export const Beer = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");

  const [beerList, setBeerList] = useState([
    {
      name: "Mezpils",
      image: "https://mezpilsalus.lv/wp-content/uploads/2021/06/Gaisais.png",
      rating: 7,
    },
    {
      name: "Staburags",
      image:
        "https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_1365284_PCE_LV",
      rating: 6,
    },
    {
      name: "Iļguciema medalus",
      image:
        "https://ilgezeem.lv/wp-content/uploads/2020/10/medalus_kirsu-kanepju-033l-194x300.png",
      rating: 7,
    },
    {
      name: "Guiness",
      image: "https://www.spiritsandwine.lv/img/items/12/1278.jpeg",
      rating: 10,
    },
  ]);

  const renderItem = ({ item }) => (
    <ItemBlockWithImage
      title={item.name}
      image={item.image}
      rating={item.rating}
      edit={false}
    />
  );

  const save = async () => {
    console.log("do SAVE");
    let headers = {
      Authorization: `Bearer: 123`,
      "Content-Type": "application/json",
    };

    const data = {
      name: "Upload1.jpeg",
      image: " testing 123",
    };

    await axios
      .post("http://localhost:3000/save-image", data, headers)
      .then((resp) => {})
      .catch((e) => {
        console.log("what is err", e);
      });
    // const respo = await UploadImageToS3WithReactS3(image);
    beerList.push({
      name: name,
      rating: rating,
      image: image
        ? image
        : "https://www.spiritsandwine.lv/img/items/12/1278.jpeg",
    });
    setBeerList(beerList);

    if (Platform.OS === "android") {
      ToastAndroid.show("Item saved", ToastAndroid.SHORT);
    }
    setModalVisible(false);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("pick image result ", result);

    if (!result.cancelled) {
      if (Platform.OS === "android") {
        const contents = fs.readFileSync(result.uri, { encoding: "base64" });
        console.log("setting", contents);
        setImage(contents);
      } else {
        console.log("setting", result.uri);
        setImage(result.uri);
      }
    }
  };

  return (
    <>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={modalStyles.centeredView}>
            <Text
              style={modalStyles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              X
            </Text>
            <View style={modalStyles.modalView}>
              <Text style={modalStyles.modalText}>Add new beer</Text>
              <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                  <Text>Name:</Text>
                  <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={(e) => setName(e)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text>Rating: {rating}</Text>
                  <TextInput
                    style={styles.input}
                    value={rating}
                    onChangeText={(e) => setRating(e)}
                  />
                </View>
              </View>

              <Button title="Take image" onPress={pickImage} />
              <View style={modalStyles.groupButtons}>
                <Button
                  style={styles.mainButton}
                  onPress={() => setModalVisible(false)}
                  title="Cancel"
                  accessibilityLabel="Cancel"
                />

                <Button
                  style={styles.mainButton}
                  onPress={save}
                  title="Submit"
                  accessibilityLabel="Submit"
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.headerBlock}>
            <Text style={styles.headerText}>Beer page ({beerList.length})</Text>
            <Button
              style={styles.mainButton}
              onPress={() => setModalVisible(!modalVisible)}
              title="Add new"
              accessibilityLabel="Add new button"
            />
          </View>

          <FlatList
            data={beerList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </>
  );
};
