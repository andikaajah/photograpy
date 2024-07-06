import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Kartu = ({ gambar, judul, likes, onDoubleTap, onFavorite, isFavorite }) => {
  return (
    <TouchableOpacity onDoubleTap={onDoubleTap}>
      <View style={styles.card}>
        <Image source={gambar} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{judul}</Text>
          <Text>{`Likes: ${likes}`}</Text>
        </View>
        <TouchableOpacity onPress={onFavorite} style={styles.favoriteButton}>
          <FontAwesome name={isFavorite ? 'heart' : 'heart-o'} size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3, // For shadow effect on Android
  },
  image: {
    width: '100%',
    height: 300, // Increased height for a larger image
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default Kartu;
