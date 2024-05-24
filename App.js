// import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import Header from "./src/components/layout/Header.jsx";

export default function App() {
  return (
    <View style={styles.body}>
      <Header />
      <Text style={styles.heading}>Esto es parte del body</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginVertical: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});
