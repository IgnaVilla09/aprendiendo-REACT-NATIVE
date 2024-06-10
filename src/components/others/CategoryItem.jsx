import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import Card from "./Card.jsx";

// recibir la categoría seleccionada
const CategoryItem = ({ category, selectCategory = () => {}, fontFamily }) => {
  return (
    <Card style={styles.cardContainer}>
      <Pressable onPress={() => selectCategory(category)}>
        <Text style={[styles.text, { fontFamily: fontFamily }]}>
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
    color: "#fff",
    fontSize: 20,
  },
});
