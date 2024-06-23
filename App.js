import { View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Header from "./src/components/layout/Header.jsx";
import { useState, useEffect } from "react";
import Detail from "./src/components/screens/Detail.jsx";
import Home from "./src/components/screens/Home.jsx";
import ItemListCategory from "./src/components/screens/ItemListCategory.jsx";
import Banner from "./src/components/layout/Banner.jsx";
import Footer from "./src/components/layout/Footer.jsx";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Mukta: require("./assets/Mukta-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null
  }

  const [categorySelected, setCategorySelected] = useState("");
  const [itemIdSelected, setItemIdSelected] = useState("");	  


  return (
    <View style={styles.body}>
      <Header/>
      {!categorySelected && <Banner/>}
      

      {!categorySelected ? (
        <Home setCategorySelected={setCategorySelected} />
      ) : !itemIdSelected ? (
        <ItemListCategory
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
          setItemIdSelected={setItemIdSelected}
        />
      ) : (
        <Detail
          idSelected={itemIdSelected}
          setProductSelected={setItemIdSelected}
        />
      )}

      <Footer />

    </View>


  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 40,
    flex: 1,
    fontFamily: "Mukta"
  },
  textMukta: {
    marginHorizontal: 15,
    color: "#fff",
    textShadowColor: "#000",
    textShadowRadius: 20,
    fontSize: 30,
    fontFamily: "Mukta",
  },
});
