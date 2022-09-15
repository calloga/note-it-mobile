import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("calloga");
  const [newName, setNewName] = useState("");

  const pressHandler = () => {
    setName(newName);
    setNewName("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello {name}</Text>
      </View>
      <View style={styles.body}>
        <Text>Enter Name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g John Doe"
          value={newName}
          onChangeText={(value) => setNewName(value)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Change Name" onPress={pressHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "whitesmoke",
    width: 200,
    height: 40,
    padding: 10,
    fontSize: 20,
  },
});
