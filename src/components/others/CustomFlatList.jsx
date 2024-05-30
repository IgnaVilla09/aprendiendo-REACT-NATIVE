import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function CustomFlatList({ listRef, openModalRef }) {
  return (
    <View style={styles.box}>
      <FlatList
        data={listRef} // PROPIEDAD OBLIGATORIA. EN ESTE CASO LA INFORMACIÓN DE UN ARRAY O ARMAR EL ARRAY AHI
        keyExtractor={(u) => u.id} // PROPIEDAD OBLIGATORIA. ES UN MAP INTERNO QUE RECORRE EL ARRAY MEDIANTE, POR EJ, EL ID
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => openModalRef(item)}
          >
            <Text>{item.value}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
