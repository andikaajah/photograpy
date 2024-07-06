import React from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const Kartu = ({ gambar, judul, onDoubleTap }) => {
  let lastTap = null;

  const handleDoubleTap = () => {
    const now = Date.now();
    if (lastTap && (now - lastTap) < 300) {
      onDoubleTap();
    } else {
      lastTap = now;
    }
  };

  return (
    <TouchableOpacity onPress={handleDoubleTap} activeOpacity={1}>
      <View style={styles.card}>
        <Image source={gambar} style={styles.image} />
        <Text style={styles.title}>{judul}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 328,
    height: 500,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Kartu;
