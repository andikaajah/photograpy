import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

const Kartu = ({ gambar, judul }) => {
  const [unduh, setUnduh] = useState(false);

  const handleDownload = () => {
    setUnduh(true);

    setTimeout(() => {
      setUnduh(false);
    }, 2000);
  };

  return (
    <View style={styles.card}>
      <Image source={gambar} style={styles.image} />
      <Text style={styles.title}>{judul}</Text>
      {unduh ? (
        <Text style={styles.downloadText}>Unduh berhasil!</Text>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleDownload}>
          <Text style={styles.buttonText}>Unduh</Text>
        </TouchableOpacity>
      )}
    </View>
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
    width:328,
    height: 500,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  downloadText: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Kartu;
