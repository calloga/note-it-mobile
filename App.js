import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [name, setName] = useState("calloga");
  const [notes, setNotes] = useState([
    {
      key: "1",
      title: "Note1",
      content:
        "Do laborum magna nostrud deserunt cillum mollit. Sunt eiusmod nostrud adipisicing nulla adipisicing veniam dolore aute consectetur aliquip commodo est enim aliqua. Reprehenderit aliqua id consequat proident Lorem Lorem dolor proident anim sit ullamco sit. Sint veniam dolore reprehenderit ipsum amet eiusmod minim et laborum aute adipisicing. Aliqua mollit velit ut ipsum enim et aute sunt laboris. Ex minim pariatur labore fugiat magna cillum. Sit amet occaecat laboris nisi eu consequat.",
    },
    {
      key: "2",
      title: "Note2",
      content:
        "Do laborum magna nostrud deserunt cillum mollit. Sunt eiusmod nostrud adipisicing nulla adipisicing veniam dolore aute consectetur aliquip commodo est enim aliqua. Reprehenderit aliqua id consequat proident Lorem Lorem dolor proident anim sit ullamco sit. Sint veniam dolore reprehenderit ipsum amet eiusmod minim et laborum aute adipisicing. Aliqua mollit velit ut ipsum enim et aute sunt laboris. Ex minim pariatur labore fugiat magna cillum. Sit amet occaecat laboris nisi eu consequat.",
    },
    {
      key: "3",
      title: "Note3",
      content:
        "Do laborum magna nostrud deserunt cillum mollit. Sunt eiusmod nostrud adipisicing nulla adipisicing veniam dolore aute consectetur aliquip commodo est enim aliqua. Reprehenderit aliqua id consequat proident Lorem Lorem dolor proident anim sit ullamco sit. Sint veniam dolore reprehenderit ipsum amet eiusmod minim et laborum aute adipisicing. Aliqua mollit velit ut ipsum enim et aute sunt laboris. Ex minim pariatur labore fugiat magna cillum. Sit amet occaecat laboris nisi eu consequat.",
    },
    {
      key: "4",
      title: "Note4",
      content:
        "Do laborum magna nostrud deserunt cillum mollit. Sunt eiusmod nostrud adipisicing nulla adipisicing veniam dolore aute consectetur aliquip commodo est enim aliqua. Reprehenderit aliqua id consequat proident Lorem Lorem dolor proident anim sit ullamco sit. Sint veniam dolore reprehenderit ipsum amet eiusmod minim et laborum aute adipisicing. Aliqua mollit velit ut ipsum enim et aute sunt laboris. Ex minim pariatur labore fugiat magna cillum. Sit amet occaecat laboris nisi eu consequat.",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello {name}</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <View style={styles.note}>
              <Text>{item.title}</Text>
            </View>
          )}
        />
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
  note: {
    borderColor: "pink",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    width: 360,
    height: 100,
    padding: 10,
  },
});
