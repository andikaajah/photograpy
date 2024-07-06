import React from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 

const Kartu = ({ gambar, judul, onDoubleTap, onFavorite, isFavorite, likes }) => {
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
        <View style={styles.content}>
          <Text style={styles.title}>{judul}</Text>
          <View style={styles.actions}>
            <TouchableOpacity onPress={onDoubleTap} style={styles.actionButton}>
              <FontAwesome name="heart" size={24} color="red" />
              <Text style={styles.actionText}>{likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onFavorite} style={styles.actionButton}>
              <FontAwesome name={isFavorite ? 'star' : 'star-o'} size={24} color={isFavorite ? 'gold' : 'black'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 450,
    borderRadius: 8,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  actions: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 10,
    right: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
  },
});

export default Kartu;
