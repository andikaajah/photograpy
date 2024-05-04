import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Kartu from '../components/Kartu'

const Beranda = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Kartu gambar={require('../../assets/foto1.jpg')} judul="Pose prewedding"/>
      <Kartu gambar={require('../../assets/foto2.jpg')} judul="Pose prewedding 2"/>
      <Kartu gambar={require('../../assets/foto3.jpg')} judul="Pose wedding"/>
      <Kartu gambar={require('../../assets/foto4.jpg')} judul="Pose wedding"/>
      <Kartu gambar={require('../../assets/foto5.jpg')} judul="Pose wedding"/>
      <Kartu gambar={require('../../assets/foto6.jpg')} judul="Pose wedding"/>
      <Kartu gambar={require('../../assets/foto7.jpg')} judul="Pose wedding"/>
      <Kartu gambar={require('../../assets/foto8.jpg')} judul="Pose wedding"/>
      <Kartu gambar={require('../../assets/foto9.jpg')} judul="Pose wedding"/>
    </ScrollView>
  )
}

export default Beranda

const styles = StyleSheet.create({
  container: {
    rowGap: 10
  }
})