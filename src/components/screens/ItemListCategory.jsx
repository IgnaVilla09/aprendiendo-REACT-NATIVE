import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { colors } from "../../globals/colors.js";

import products from "../../data/products.json";
import Search from "../others/Search.jsx";
import ProductItem from "../others/ProductItem.jsx";

const ItemListCategory = ({
  categorySelected = "",
  setCategorySelected = () => {},
  setItemIdSelected = ()=> {},
}) => {
  const [keyWord, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const regexDigits = /\d/;
    const hasDigits = regexDigits.test(keyWord);
  
    if (hasDigits) {
      setError("Don't use digits");
      return;
    }

  const regexThreeOrMoreCharacter = /[a-zA-z]{3,}/;
  const hasThreeOrMoreCharacter = regexThreeOrMoreCharacter.test(keyWord);

    if(!hasThreeOrMoreCharacter && keyWord.length){
      setError("Use at least 3 characters");
      return
    }

    const productsPreFiltered = products.filter(
      (product) => product.category === categorySelected
    );
    const productsFiter = productsPreFiltered.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
    );
    setProductsFiltered(productsFiter);
    setError("");
  }, [keyWord, categorySelected]);

  return (
    <View style={styles.flatListContainer}>
      <Search onSearch={setKeyword} goBack={() => setCategorySelected("")} />
      <Text style={{ color: "red", fontSize: 18, marginTop: 10 }}>{error}</Text>
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => (
          <ProductItem product={item} setItemIdSelected={setItemIdSelected} />
        )}
        keyExtractor={(producto) => producto.id}
      />
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: "#0002",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
