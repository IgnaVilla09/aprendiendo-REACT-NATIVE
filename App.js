import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import Header from "./src/components/layout/Header.jsx";
import { useState } from "react";

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

      <Text style={styles.heading}>Esto es parte del body</Text>

      <View style={styles.box}>
        <TextInput
          style={styles.input}
          value={textItem}
          onChangeText={handleTextChange}
        />
        <Button title="Ingrese usuario" color="#a1f" onPress={addItem} />
      </View>

      <View style={styles.box}>
        <FlatList
          data={list} // PROPIEDAD OBLIGATORIA. EN ESTE CASO LA INFORMACIÓN DE UN ARRAY O ARMAR EL ARRAY AHI
          keyExtractor={(u) => u.id} // PROPIEDAD OBLIGATORIA. ES UN MAP INTERNO QUE RECORRE EL ARRAY MEDIANTE, POR EJ, EL ID
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => openModal(item)}
            >
              <Text>{item.value}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <Modal visible={modalView} transparent={true} animationType="slide">
        <View style={styles.modalStyles}>
          <View style={styles.modalContainer}>
            <View style={styles.box}>
              <Text>Esta seguro que quieres borrar? </Text>
            </View>
            <View style={styles.textContainer}>
              <Button
                style={styles.btnContainer}
                onPress={handleDelete}
                title="Borrar"
              />
              <Button
                style={styles.btnContainer}
                onPress={handleCancel}
                title="Cancelar"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginVertical: 40,
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  input: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    width: 200,
    paddingHorizontal: 20,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    color: "#fff",
    backgroundColor: "#a1f4",
    padding: 8,
    marginHorizontal: 5,
    marginVertical: 9,
    borderRadius: 10,
  },
  modalStyles: {
    backgroundColor: "#cccc66",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    padding: 10,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 20,
  },
  textModal: {
    fontWeight: "bold",
  },
  textContainer: {
    gap: 20,
  },
});
