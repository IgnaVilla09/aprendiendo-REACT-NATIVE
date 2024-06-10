import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Header = ({ fontFamily }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.headerText, { fontFamily }]}>Mukta</Text>
      <Entypo name="menu" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0006",
    alignItems: "center",
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 20,
  },
});

export default Header;
