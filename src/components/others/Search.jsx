import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../globals/colors.js";
import { useState } from "react";

import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Search = ({ onSearch = () => {}, error="", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome5 name="search" size={24} color="black" />
      </Pressable>
      <Pressable onPress={() => setKeyword("")}>
        <FontAwesome6 name="eraser" size={24} color="black" />
      </Pressable>
      <Pressable onPress={goBack}>
        <AntDesign name="back" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  input: {
    flex: 4,
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#0005",
    color: "#000",
    borderRadius: 20,
  },
});
