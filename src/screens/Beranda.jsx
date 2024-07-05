import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import Kartu from '../components/Kartu';

const Beranda = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([
    { gambar: require('../../assets/foto1.jpg'), judul: 'Pose prewedding' },
    { gambar: require('../../assets/foto2.jpg'), judul: 'Pose prewedding 2' },
    { gambar: require('../../assets/foto3.jpg'), judul: 'Pose wedding' },
    { gambar: require('../../assets/foto4.jpg'), judul: 'Pose wedding' },
    { gambar: require('../../assets/foto5.jpg'), judul: 'Pose wedding' },
    { gambar: require('../../assets/foto6.jpg'), judul: 'Pose wedding' },
    { gambar: require('../../assets/foto7.jpg'), judul: 'Pose wedding' },
    { gambar: require('../../assets/foto8.jpg'), judul: 'Pose wedding' },
    { gambar: require('../../assets/foto9.jpg'), judul: 'Pose wedding' },
  ]);

  const handleCardPress = (judul) => {
    console.log(`Card '${judul}' clicked!`);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredCards = cards.filter((card) =>
    card.judul.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Cari..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {filteredCards.map((card, index) => (
          <Kartu
            key={index}
            gambar={card.gambar}
            judul={card.judul}
            onPress={() => handleCardPress(card.judul)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  cardContainer: {
    paddingBottom: 20,
  },
});

export default Beranda;
