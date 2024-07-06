import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, View, Button, FlatList, TouchableOpacity } from "react-native";
import styles from './styles';

export default function App() {
  const [titleOfTask, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (titleOfTask.trim() !== "") {
      setTasks([...tasks, { title: titleOfTask, status: false }]);
      setTaskTitle("");
    }
  };
  
  const changeTaskStatus = (index) => {
    const newTasks = tasks.slice();
    newTasks[index].status = !newTasks[index].status;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.slice(0, index).concat(tasks.slice(index + 1));
    setTasks(newTasks);
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Enter Tasks here"
        value={titleOfTask}
        onChangeText={setTaskTitle}
      />
      <Button title="Add Task" onPress={addTask} disabled={titleOfTask.trim() === ""} color="#6200ea" />
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={item.status ? styles.completed : styles.open}>{item.title}</Text>
            <View style={styles.actionsOfTask}>
              <TouchableOpacity onPress={() => changeTaskStatus(index)}>
                <Text style={styles.statusBtn}>{item.status ? "Done" : "Due"}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(index)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}