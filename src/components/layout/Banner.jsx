import { StyleSheet, Image, View } from 'react-native'

const Banner = () => {
  return (
    <View>
        {/*  obtener imagen de assets */}
        <Image
          source={require('../../../assets/BANNER.jpg')}
          style={{ width: '100%', height: 200 }}
        />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({})