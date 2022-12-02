import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import moment from "moment";

export const TimePicker = ({ isToday, setTime }) => {
  const date = moment();
  let dates = [];
  const [selected, setSelected] = useState(8);

  const toggle = (e, i) => {
    setSelected(i);
    setTime(i);
  };

  const isBlockedTime = (incomingTime) => {
    const timeZone = 2;
    const currentHour = 1;
    const currentTime = new Date().getUTCHours() + timeZone + currentHour
    return isToday && incomingTime < currentTime ? true : false;
  }

  for (let i = 8; i < 18; i++) {
    dates.push(
      <View key={i} style={isBlockedTime(i) ?  styles.disabledBlock : styles.dateBlock }>
        <TouchableWithoutFeedback
          onPress={(e) => isBlockedTime(i) ? console.log('skip') : toggle(e, i)}
          style={styles.center}
        >
          <View
            style={[
              styles.date,
              styles.center,
              i === selected ? styles.selected : "",
            ]}
          >
            <Text>{isBlockedTime(i) ? 'T' : 'F'} {i}:00</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  return (
    <View style={styles.block}>
      <Text>Today1: {isToday? 'T' : 'F'}</Text>
      <ScrollView
        style={styles.dateContainer}
        contentContainerStyle={styles.wrapper}
      >
        {dates}
      </ScrollView>
      <Text>Selected: {selected}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  block: {
    fontSize: 20,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },

  dateContainer: {
    display: "flex",
    width: "100%",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },

  selected: {
    backgroundColor: "#9fd5f6",
    color: "#074a75",
  },
  dateBlock: {
    width: "90%",
    margin: 5,
  },
  disabledBlock: {
    width: "90%",
    margin: 5,
    backgroundColor: "#d9d7d7",
    opacity: 0.3
  },
  date: {
    padding: 7,
    height: 60,
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#4d2dd4",
    borderRadius: 5,
  },
  largeNumber: {
    fontSize: 20,
  },
});
