import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Kartu = ({gambar, judul}) => {
  return (
    <View style={styles.container}>
        <View>
        <Image style={styles.image} source={gambar} />
        <Text style={styles.judul}>{judul}</Text>
        </View>
    </View>
  )
}

export default Kartu

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        paddingTop: 20
    },
    image: {
        width: 300,
        height: 200
    },
    judul: {
        marginTop: 5
    }
})