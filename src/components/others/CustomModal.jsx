import { StyleSheet, Text, View, Modal, Button } from "react-native";
import React from "react";

export default function CustomModal({
  modalViewModal,
  handleCancelModal,
  handleDeleteModal,
}) {
  return (
    <Modal visible={modalViewModal} transparent={true} animationType="slide">
      <View style={styles.modalStyles}>
        <View style={styles.modalContainer}>
          <View style={styles.box}>
            <Text>Esta seguro que quieres borrar? </Text>
          </View>
          <View style={styles.textContainer}>
            <Button
              style={styles.btnContainer}
              onPress={handleDeleteModal}
              title="Borrar"
            />
            <Button
              style={styles.btnContainer}
              onPress={handleCancelModal}
              title="Cancelar"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalStyles: {
    backgroundColor: "#cccc99",
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
