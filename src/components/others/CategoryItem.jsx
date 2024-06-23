import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import Card from "./Card.jsx";

// recibir la categoría seleccionada
const CategoryItem = ({ category, selectCategory = () => {} }) => {
  return (
    <Card style={styles.cardContainer}>
      <Pressable onPress={() => selectCategory(category)}>
        <Text style={[styles.text]}>
          {category}
        </Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 7,
    marginVertical: 7,
  },
  text: {
    textTransform: "uppercase",
    color: "#07b",
    fontSize: 14,
  },
});
