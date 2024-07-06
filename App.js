import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Text, TextInput, View, Button, FlatList, TouchableOpacity } from "react-native";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from './firebase';
import styles from './styles';

export default function App() {
  const [titleOfTask, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      const tasksData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setTasks(tasksData);
    };
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (titleOfTask.trim() !== "") {
      const docRef = await addDoc(collection(db, "tasks"), { title: titleOfTask, status: false });
      setTasks([...tasks, { title: titleOfTask, status: false, id: docRef.id }]);
      setTaskTitle("");
    }
  };

  const changeTaskStatus = async (index) => {
    const newTasks = tasks.slice();
    newTasks[index].status = !newTasks[index].status;
    await updateDoc(doc(db, "tasks", newTasks[index].id), { status: newTasks[index].status });
    setTasks(newTasks);
  };

  const deleteTask = async (index) => {
    await deleteDoc(doc(db, "tasks", tasks[index].id));
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
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}
