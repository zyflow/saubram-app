import {
  Button,
  FlatList,
  Text,
  TextInput,
  ToastAndroid,
  View,
  ActivityIndicator,
} from "react-native";
import { styles } from "../css/styles";
import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import axios from "axios";

export const Weekly = ({ list }) => {
  const [itemList, setList] = useState([]);
  const [number, onChangeNumber] = React.useState("Init");

  useEffect(() => {
    setList(list);
  }, [list]);

  const updateText = (e) => {
    onChangeNumber(e);
  };

  const appendToList = async () => {
    // console.log('what number', number)
    setList([{ message: number, block: "weekly" }, ...itemList]);
    showToast();

    try {
      var data = JSON.stringify({
        block: "weekly",
        text: number,
      });

      var config = {
        method: "post",
        url: "https://the-very-mine-todo-app.herokuapp.com/todo",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log("ir ok ", JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (e) {
      console.log("err", e);
    }
  };

  const showToast = () => {
    ToastAndroid.show("Item saved", ToastAndroid.SHORT);
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text>REMOVE OLD BLOCKS</Text>
        <Text style={styles.headerText}> Weekly TODO:</Text>

        {/*{loading ?*/}
        {/*    <ActivityIndicator size="large" color="#0000ff"/> :*/}
        <ItemList itemList={itemList} />
        {/*}*/}
        <Text> Add new item </Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={updateText}
        />
      </View>
      <View style={styles.layoutFooter}>
        <Button
          style={styles.mainButton}
          onPress={appendToList}
          title="Submit"
          accessibilityLabel="Submit button"
        />
      </View>
    </View>
  );
};
