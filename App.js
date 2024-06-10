import { View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/globals/colors.js";
import * as SplashScreen from "expo-splash-screen";
import Header from "./src/components/layout/Header.jsx";
import { useState, useCallback } from "react";
import CustomModal from "./src/components/others/CustomModal.jsx";
import CustomFlatList from "./src/components/others/CustomFlatList.jsx";
import CustomInput from "./src/components/others/CustomInput.jsx";
import Home from "./src/components/screens/Home.jsx";
import ItemListCategory from "./src/components/screens/ItemListCategory.jsx";

export default function App() {
  const [textItem, setTextItem] = useState(""); //Definimos estados inicial y el set
  const [list, setList] = useState([]); // Definimos estado inicial del array y su set
  const [modalView, setModalView] = useState(false); // Definimos estado inicial de modal y su set
  const [itemSelected, setItemSelected] = useState([]); // Definimos estado inicial de un array y su set

  const [fontsLoaded, fontError] = useFonts({
    Mukta: require("./assets/Mukta-Regular.ttf"),
    BebasNeue: require("./assets/BebasNeue-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // const addItem = () => {
  //   // setList(list.push(textItem)); //PUSHEAMOS EN LA LISTA EL TEXTO DEL INPUT

  //   setList((currentValue) => [
  //     ...currentValue,
  //     { id: Math.random().toString(), value: textItem },
  //   ]);

  //   setTextItem("");
  // };

  // const openModal = (item) => {
  //   setItemSelected(item);
  //   setModalView(true);
  // };

  // const handleCancel = () => {
  //   setModalView(false);
  //   setItemSelected({});
  // };
  // const handleDelete = () => {
  //   const filter = list.filter((Usuarios) => Usuarios !== itemSelected);
  //   setList(filter);
  //   setModalView(false);
  // };

  // const handleTextChange = (text) => setTextItem(text); //Cambiamos el estado con el parámetro recibido

  const [categorySelected, setCategorySelected] = useState("");

  return (
    <View style={styles.body}>
      <Header fontFamily="BebasNeue" />
      {/* <Text style={styles.textMukta}>Prueba de texto con Mukta</Text>
      <CustomInput
        textItemRef={textItem}
        handleTextChangeRef={handleTextChange}
        addItemRef={addItem}
      />

      <CustomFlatList listRef={list} openModalRef={openModal} />

      <CustomModal
        handleCancelModal={handleCancel}
        handleDeleteModal={handleDelete}
        modalViewModal={modalView}
      /> */}

      {!categorySelected ? (
        <Home
          setCategorySelected={setCategorySelected}
          fontFamily="BebasNeue"
        />
      ) : (
        <ItemListCategory
          setCategorySelected={setCategorySelected}
          categorySelected={categorySelected}
          fontFamily="BebasNeue"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 40,
    flex: 1,
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
