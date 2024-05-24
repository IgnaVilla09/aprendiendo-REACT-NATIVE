import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>HEADER-MENU</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0006",
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 20,
  },
});

export default Header;
