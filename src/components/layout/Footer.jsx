import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {
  return (
    <View style={styles.Footer}>
      <Text style={styles.text}>Ignacio Villafañe ©️</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    Footer:{
        backgroundColor: "#06a",
        height: 50,
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        color: "#fff"
    }
})