import { Text, TextInput, ToastAndroid, View } from "react-native";
import { styles } from "../css/styles";
import React, { useEffect, useState } from "react";
import { Weekly } from "./Weekly";
import { Daily } from "./AllIcons";
import { Ultimate } from "./Ultimate";
import { Header } from "./Header";
import { ActivityIndicator } from "react-native-web";

export const Todos = ({ itemList }) => {
  const [currentScreen, setCurrentScreen] = useState("weekly");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getList = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://the-very-mine-todo-app.herokuapp.com/list"
      );
      const json = await response.json();
      // console.log('ze json', json)
      setList(json);
      // setLoading(false)
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  let content = <Weekly />;

  switch (currentScreen) {
    case "weekly":
      content = <Weekly list={list} />;
      break;
    case "daily":
      content = <Daily />;
      break;
    case "ultimate":
      content = <Ultimate />;
      break;
  }

  return (
    <View style={styles.body}>
      {loading === true ? (
        <ActivityIndicator />
      ) : (
        <>
          <Header
            setCurrentScreen={setCurrentScreen}
            currentScreen={currentScreen}
          />
          {content}
        </>
      )}
    </View>
  );
};
