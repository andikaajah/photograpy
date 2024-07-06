import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, TextInput, View, TouchableOpacity, Text, PermissionsAndroid } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Kartu from '../components/Kartu';

const Beranda = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([
    { gambar: require('../../assets/foto1.jpg'), judul: 'Pose prewedding', likes: 0 },
    { gambar: require('../../assets/foto2.jpg'), judul: 'Pose prewedding 2', likes: 0 },
    { gambar: require('../../assets/foto3.jpg'), judul: 'Pose wedding', likes: 0 },
    { gambar: require('../../assets/foto4.jpg'), judul: 'Pose wedding', likes: 0 },
    { gambar: require('../../assets/foto5.jpg'), judul: 'Pose wedding', likes: 0 },
    { gambar: require('../../assets/foto6.jpg'), judul: 'Pose wedding', likes: 0 },
    { gambar: require('../../assets/foto7.jpg'), judul: 'Pose wedding', likes: 0 },
    { gambar: require('../../assets/foto8.jpg'), judul: 'Pose wedding', likes: 0 },
    { gambar: require('../../assets/foto9.jpg'), judul: 'Pose wedding', likes: 0 },
  ]);

  const scrollViewRef = useRef(null); 

  useEffect(() => {
    requestStoragePermission(); 
  }, []);

  const handleCardPress = (judul) => {
    const updatedCards = cards.map(card =>
      card.judul === judul ? { ...card, likes: card.likes + 1 } : card
    );
    setCards(updatedCards);
  };

  const handleDoubleTap = (card) => {
    const updatedCards = cards.map(c =>
      c.judul === card.judul ? { ...c, likes: c.likes + 1 } : c
    );
    setCards(updatedCards);
    navigation.navigate('Disukai', { likedCard: card });
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
          const newCard = { gambar: source, judul: 'New Image', likes: 0 };
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
        {filteredCards.map((card, index) => (
          <View key={index} style={styles.card}>
            <Kartu
              gambar={card.gambar}
              judul={card.judul}
              likes={card.likes}
              onDoubleTap={() => handleDoubleTap(card)}
            />
            <TouchableOpacity onPress={() => handleCardPress(card.judul)} style={styles.loveButton}>
              <FontAwesome name="heart" size={24} color="red" />
              <Text style={styles.loveText}>{`Love (${card.likes})`}</Text>
            </TouchableOpacity>
          </View>
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
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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
  loveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  loveText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Beranda;
