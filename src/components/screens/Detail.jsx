import { Button, StyleSheet, Text, View,Image } from "react-native";
import {useState, useEffect} from "react";

import products from "../../data/products.json";

const Detail = ({idSelected, setProductSelected = () => {}}) => {

  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    const productSelected = products.find(
      (product) => product.id === idSelected
    );

    setProduct(productSelected);
  }, [idSelected]);


  return (
    <View style={styles.bodyItem}>
      <Button onPress={()=>{setProductSelected("")}} title="Back"/>

      {product ? (  <View style={styles.container}>
          <Image style={styles.image} source={{ uri: product.images[0] }} />
            <View>
              <Text style={styles.text}>{product.title}</Text>
              <Text style={styles.price}>${product.price}</Text>
              <Text style={styles.description}>{product.description}</Text> 
              <Button title="Add Cart"></Button>
            </View>
          </View>) : null}      
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 40,
    borderRadius: 30
  },
  image: {
    margin: 10,
    borderRadius: 30,
    objectFit: "cover",
    width: 250,
    height: 300,
  },
  text: {
    padding: 10,
    color: "#fff",
    fontSize: 25,
  },
  price: {
    padding: 10,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    padding: 10,
    color: "#fff",
    fontSize: 15,
  },
  bodyItem: {
  }
});
