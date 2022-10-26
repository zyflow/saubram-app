import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 60,
    backgroundColor: "#ffffff",
  },
  body: {
    flex: 4,
    height: 50,
    backgroundColor: "#ffffff",
    flexDirection: "column",
  },
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    padding: 20,
  },

  layoutFooter: {
    justifyContent: "center",

  },
  footerBlock: {
    // width: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 5,
    padding: 3,
    margin: 10,
    backgroundColor: "#fefefe",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },

  item: {
    borderWidth: 1,
    height: 60,
    borderColor: 'black',
    margin: 10,
    borderRadius: 5,

  },
  headerText: {
    fontSize: 30,
    fontWeight: "700",
  },
  headerBlock: {
    flexDirection: "row",
    justifyContent: "space-between"

  },
  formContainer: {
    flexDirection: "row",

  },
  inputContainer: {
    color: "black",
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
  },
  listHeight: {
    flex: 1,
    flexDirection: "column",
    // height: 90,
    borderWidth: 1,
    // backgroundColor: "red"
  },
  footerItem: {
    paddingLeft: 15,
    // marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#616164"
  },
  activeFooterItem: {
    paddingLeft: 15,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#757579"
  },

})
