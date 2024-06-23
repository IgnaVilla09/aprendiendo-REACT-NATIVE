import { StyleSheet, View } from "react-native";
import { colors } from "../../globals/colors.js";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style, backgroundColor: "#fff9" }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 170,
    borderRadius: 20,
    height: 100,
    borderWidth: 5,
    borderColor: "#07b",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
