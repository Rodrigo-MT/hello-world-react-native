import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onPressHandler = () => {
    const n = name && name.trim();
    if (n) {
      setMessage(`Hello world, ${n}!`);
    }
  };

  const onChangeTextHandler = (text) => {
    console.log(text);
    setName(text);
    setMessage("");
  };

  const onClearHandler = () => {
    setMessage("");
    setName("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <TextInput
        style={styles.helloWorldInput}
        placeholder="Digite o seu nome"
        onChangeText={onChangeTextHandler}
        value={name}
      />
      <View style={styles.box}>
        <Button
        style={styles.button}
        onPress={onPressHandler}
        color="green"
        title="Clique aqui para dizer oi"
      />
      <Button
        style={styles.button}
        onPress={onClearHandler}
        color="blue"
        title="Limpar"
      />
      </View>
        
      {message && <Text style={styles.title}>{message}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "monospace",
    fontSize: 36,
    color: "green",
  },
  helloWorldInput: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 16,
    padding: 32,
    margin: 16,
    width: "80%",
    backgroundColor: "green",
    fontFamily: "monospace",
  },
  button: {
    padding: 20,
    color: "green",
  },

  box: {
    flexDirection: 'row',
    gap: 16,
  }
});
