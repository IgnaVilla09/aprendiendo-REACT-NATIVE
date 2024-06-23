import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.headerText ]}>ECOMMERCE</Text>
      <Entypo name="menu" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#07b",
    alignItems: "center",
    paddingVertical: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Header;
