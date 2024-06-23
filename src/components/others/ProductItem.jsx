import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../../globals/colors.js";

const ProductItem = ({ product,  setItemIdSelected = () => {}}) => {
  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable onPress={() => setItemIdSelected(product.id)}>
        <View style={styles.pressable}>
          <Text style={[styles.textTitle]}>
            {product.title}
          </Text>
          <Text style={[styles.textTitle]}>
            ${product.price}{" "}
          </Text>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: product.images[0] }}
          />
        </View>
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 100,
    objectFit: "cover",
    borderRadius: 20,
  },
  additionalStylesCard: {
    paddingLeft: 10,
    flexDirection: "row",
    height: 150,
    width: 400,
    justifyContent: "center",
    margin: 10,
  },
  textTitle: {
    alignSelf: "center",
    width: 100,
    fontSize: 15,
    color: "#000"
  },
  pressable: {
    width: "100%",
    flexDirection: "row",
  }
});
