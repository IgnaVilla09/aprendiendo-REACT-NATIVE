import { View, StyleSheet } from "react-native";
import Header from "./src/components/layout/Header.jsx";
import { useState } from "react";
import CustomModal from "./src/components/others/CustomModal.jsx";
import CustomFlatList from "./src/components/others/CustomFlatList.jsx";
import CustomInput from "./src/components/others/CustomInput.jsx";

// const Usuarios = [
//   { id: 1, value: "Ignacio" },
//   { id: 2, value: "Augusto" },
//   { id: 3, value: "Lucia" },
//   { id: 4, value: "Roxana" },
// ];

export default function App() {
  const [textItem, setTextItem] = useState(""); //Definimos estados inicial y el set
  const [list, setList] = useState([]); // Definimos estado inicial del array y su set
  const [modalView, setModalView] = useState(false); // Definimos estado inicial de modal y su set
  const [itemSelected, setItemSelected] = useState([]); // Definimos estado inicial de un array y su set

  const addItem = () => {
    // setList(list.push(textItem)); //PUSHEAMOS EN LA LISTA EL TEXTO DEL INPUT

    setList((currentValue) => [
      ...currentValue,
      { id: Math.random().toString(), value: textItem },
    ]);

    setTextItem("");
  };

  const openModal = (item) => {
    setItemSelected(item);
    setModalView(true);
  };

  const handleCancel = () => {
    setModalView(false);
    setItemSelected({});
  };
  const handleDelete = () => {
    const filter = list.filter((Usuarios) => Usuarios !== itemSelected);
    setList(filter);
    setModalView(false);
  };

  const handleTextChange = (text) => setTextItem(text); //Cambiamos el estado con el parámetro recibido

  return (
    <View style={styles.body}>
      <Header />

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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginVertical: 40,
    flex: 1,
  },
});
