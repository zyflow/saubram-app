import { StyleSheet } from 'react-native';

export const modalStyles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    alignSelf: "stretch",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  closeButton: {
    // margin: 40,
  },
  groupButtons: {
    flexDirection: 'row',
    justifyContent: "space-around",
    padding: 5,
    margin: 5,
    // flex: 1,
    alignItems: "flex-start"
  }
});
