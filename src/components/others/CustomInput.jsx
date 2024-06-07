import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function CustomInput({
  textItemRef,
  handleTextChangeRef,
  addItemRef,
}) {
  return (
    <View>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          value={textItemRef}
          onChangeText={handleTextChangeRef}
        />
        <Button title="Ingrese usuario" color="#a1f" onPress={addItemRef} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  input: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    width: 200,
    paddingHorizontal: 20,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});
