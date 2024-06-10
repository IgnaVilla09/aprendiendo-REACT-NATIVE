import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../../globals/colors.js";

const ProductItem = ({ product, fontFamily }) => {
  return (
    <Card style={styles.additionalStylesCard}>
      <Text style={[styles.textTitle, { fontFamily: fontFamily }]}>
        {product.title}
      </Text>
      <Text style={[styles.textTitle, { fontFamily: fontFamily }]}>
        $-{product.price}{" "}
      </Text>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{ uri: product.images[0] }}
      />
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
    height: 120,
    width: 350,
    justifyContent: "space-between",
    margin: 10,
  },
  textTitle: {
    flex: 3,
    marginHorizontal: 10,
    fontSize: 15,
  },
});
