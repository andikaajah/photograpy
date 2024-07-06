import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, TextInput, View, TouchableOpacity, Text, PermissionsAndroid } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Kartu from '../components/Kartu';

const Beranda = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([
    { id: 1, gambar: require('../../assets/foto1.jpg'), judul: 'Pose prewedding', likes: 0, isFavorite: false },
    { id: 2, gambar: require('../../assets/foto2.jpg'), judul: 'Pose prewedding 2', likes: 0, isFavorite: false },
    { id: 3, gambar: require('../../assets/foto3.jpg'), judul: 'Pose wedding', likes: 0, isFavorite: false },
    { id: 4, gambar: require('../../assets/foto4.jpg'), judul: 'Pose wedding', likes: 0, isFavorite: false },
    { id: 5, gambar: require('../../assets/foto5.jpg'), judul: 'Pose wedding', likes: 0, isFavorite: false },
    { id: 6, gambar: require('../../assets/foto6.jpg'), judul: 'Pose wedding', likes: 0, isFavorite: false },
    { id: 7, gambar: require('../../assets/foto7.jpg'), judul: 'Pose wedding', likes: 0, isFavorite: false },
    { id: 8, gambar: require('../../assets/foto8.jpg'), judul: 'Pose wedding', likes: 0, isFavorite: false },
    { id: 9, gambar: require('../../assets/foto9.jpg'), judul: 'Pose wedding', likes: 0, isFavorite: false },
    { id: 10, gambar: require('../../assets/1.jpg'), judul: 'cowok cool', likes: 0, isFavorite: false },
  ]);

  const scrollViewRef = useRef(null); 

  useEffect(() => {
    requestStoragePermission(); 
  }, []);

  const handleDoubleTap = (id) => {
    const updatedCards = cards.map(card =>
      card.id === id ? { ...card, likes: card.likes + 1 } : card
    );
    setCards(updatedCards);
  };

  const handleFavorite = (id) => {
    const updatedCards = cards.map(card =>
      card.id === id ? { ...card, isFavorite: !card.isFavorite } : card
    );
    setCards(updatedCards);

    const likedCard = updatedCards.find(card => card.id === id && card.isFavorite);
    if (likedCard) {
      navigation.navigate('Disukai', { likedCard });
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleImagePick = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 1080,  
        maxHeight: 1920, 
        quality: 1,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else {
          const source = { uri: response.assets[0].uri };
          const newCard = { id: cards.length + 1, gambar: source, judul: 'New Image', likes: 0, isFavorite: false };
          setCards([...cards, newCard]);
        }
      }
    );
  };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permission to access storage',
          message: 'App needs access to your storage to save photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permission granted.');
      } else {
        console.log('Storage permission denied.');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const filteredCards = cards.filter((card) =>
    card.judul.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Cari..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <TouchableOpacity onPress={handleImagePick} style={styles.uploadButton}>
        <FontAwesome name="upload" size={24} color="blue" />
        <Text style={styles.uploadText}>Unggah Foto</Text>
      </TouchableOpacity>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.cardContainer}
      >
        {filteredCards.map((card) => (
          <View key={card.id} style={styles.card}>
            <Kartu
              gambar={card.gambar}
              judul={card.judul}
              likes={card.likes}
              isFavorite={card.isFavorite}
              onDoubleTap={() => handleDoubleTap(card.id)}
              onFavorite={() => handleFavorite(card.id)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  uploadText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  cardContainer: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 10,
  },
});

export default Beranda;
