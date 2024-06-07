import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { colors } from "../../globals/colors.js";

import products from "../../data/products.json";
import Search from "../others/Search.jsx";
import ProductItem from "../others/ProductItem.jsx";

const ItemListCategory = ({
  categorySelected = "",
  setCategorySelected = () => {},
}) => {
  const [keyWord, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const regex = /\d/;
    const Digits = regex.test(keyWord);

    if (Digits) {
      setError("Don't use digits");
      return;
    }

    const productsPreFiltered = products.filter(
      (product) => product.category === categorySelected
    );
    const productsFiter = productsPreFiltered.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
    );
    setProductsFiltered(productsFiter);
  }, [keyWord, categorySelected]);

  return (
    <View style={styles.flatListContainer}>
      {/* BARRA DE BÚSQUEDA */}
      <Search onSearch={setKeyword} goBack={() => setCategorySelected("")} />
      {/* FlatList --> ProductItem */}
      <Text>{error}</Text>
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(producto) => producto.id}
      />
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.lightseagreen,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
