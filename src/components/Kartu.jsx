import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Kartu = ({ gambar, judul }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={gambar} />
      <Text style={styles.judul}>{judul}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 12,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 320,
    height: 450,
    borderRadius: 10,
    marginBottom: 10,
  },
  judul: {
    fontSize: 15, 
    fontWeight: 'bold', 
    textAlign: 'center',
    marginTop: -8, 
  },
});

export default Kartu;
