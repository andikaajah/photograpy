import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Disukai = ({ route }) => {
  const [likedCards, setLikedCards] = useState([]);

  useEffect(() => {
    if (route.params?.likedCard) {
      setLikedCards((prev) => [...prev, route.params.likedCard]);
    }
  }, [route.params?.likedCard]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {likedCards.length > 0 ? (
        likedCards.map((card, index) => (
          <View key={index} style={styles.card}>
            <Image source={card.gambar} style={styles.image} />
            <Text>{card.judul}</Text>
          </View>
        ))
      ) : (
        <Text>No liked photos yet.</Text>
      )}
    </ScrollView>
  );
};

export default Disukai;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 328,
    height: 500,
    borderRadius: 8,
    marginBottom: 10,
  },
});
