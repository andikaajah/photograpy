import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Kartu from '../components/Kartu';

const Favorit = ({ route }) => {
  const { favoriteCards } = route.params || { favoriteCards: [] }; // Add a fallback to avoid errors

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {favoriteCards.length > 0 ? (
          favoriteCards.map((card, index) => (
            <Kartu
              key={index}
              gambar={card.gambar}
              judul={card.judul}
              likes={card.likes}
              onDoubleTap={() => {}}
              onFavorite={() => {}}
              isFavorite={true}
            />
          ))
        ) : (
          <Text style={styles.noFavoritesText}>No favorite photos yet.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  cardContainer: {
    paddingBottom: 20,
  },
  noFavoritesText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Favorit;
