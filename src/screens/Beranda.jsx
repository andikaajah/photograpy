import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Kartu from '../components/Kartu';

const Beranda = () => {
  const handleCardPress = (judul) => {
    console.log(`Card '${judul}' clicked!`); 
  
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Kartu
        gambar={require('../../assets/foto1.jpg')}
        judul="Pose prewedding"
        onPress={() => handleCardPress("Pose prewedding")}
      />
      <Kartu
        gambar={require('../../assets/foto2.jpg')}
        judul="Pose prewedding 2"
        onPress={() => handleCardPress("Pose prewedding 2")}
      />
      <Kartu
        gambar={require('../../assets/foto3.jpg')}
        judul="Pose wedding"
        onPress={() => handleCardPress("Pose wedding")}
      />
      <Kartu
        gambar={require('../../assets/foto4.jpg')}
        judul="Pose wedding"
        onPress={() => handleCardPress("Pose wedding")}
      />
      <Kartu
        gambar={require('../../assets/foto5.jpg')}
        judul="Pose wedding"
        onPress={() => handleCardPress("Pose wedding")}
      />
      <Kartu
        gambar={require('../../assets/foto6.jpg')}
        judul="Pose wedding"
        onPress={() => handleCardPress("Pose wedding")}
      />
      <Kartu
        gambar={require('../../assets/foto7.jpg')}
        judul="Pose wedding"
        onPress={() => handleCardPress("Pose wedding")}
      />
      <Kartu
        gambar={require('../../assets/foto8.jpg')}
        judul="Pose wedding"
        onPress={() => handleCardPress("Pose wedding")}
      />
      <Kartu
        gambar={require('../../assets/foto9.jpg')}
        judul="Pose wedding"
        onPress={() => handleCardPress("Pose wedding")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Beranda;
