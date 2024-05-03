import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Akun = () => {
  return (
    <View style={styles.container}>
      <Text>silahkan hubungi Akun di bawah ini</Text>
      <Text>andikasanjaya01@gmail.com</Text>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  }
})