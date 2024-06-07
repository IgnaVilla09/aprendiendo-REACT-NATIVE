import { StyleSheet, View } from "react-native";
import { colors } from "../../globals/colors.js";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    shadowColor: "#000",
    width: 170,
    borderRadius: 20,
    height: 100,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.65,
    elevation: 4,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
