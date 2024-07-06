import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    inputText: {
      height: 40,
      borderColor: "#6200ea",
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 10,
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: 5,
    },
    taskContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 15,
      marginVertical: 5,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 5,
      width: "100%",
    },
    open: {
      textDecorationLine: "none",
      fontSize: 16,
      color: "#000",
    },
    completed: {
      textDecorationLine: "line-through",
      fontSize: 16,
      color: "#aaa",
    },
    actionsOfTask: {
      flexDirection: "row",
    },
    statusBtn: {
      marginRight: 10,
      color: "#6200ea",
      fontWeight: "bold",
    },
    deleteButton: {
      color: "#d32f2f",
      fontWeight: "bold",
    },
  });
  