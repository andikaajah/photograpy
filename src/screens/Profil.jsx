import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Profil = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Profil</Text>
        </View>

        {/* Foto Profil */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/foto8.jpg')} 
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraIconContainer}>
            <Icon name="camera" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Info Profil */}
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Icon name="person-outline" size={24} color="grey" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.label}>Nama</Text>
              <Text style={styles.value}>Nama Pengguna</Text>
              <Text style={styles.description}>Ini bukan nama pengguna atau PIN Anda. Nama ini akan terlihat oleh kontak WhatsApp Anda.</Text>
            </View>
            <Icon name="pencil" size={24} color="green" />
          </View>

          <View style={styles.infoRow}>
            <Icon name="information-circle-outline" size={24} color="grey" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.label}>Info</Text>
              <Text style={styles.value}>Penjahat <Icon name="skull" size={18} color="red" /></Text>
            </View>
            <Icon name="pencil" size={24} color="green" />
          </View>

          <View style={styles.infoRow}>
            <Icon name="call-outline" size={24} color="grey" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.label}>Telepon</Text>
              <Text style={styles.value}>+62 877-4044-0427</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Akun ini didesain dengan sebaik mungkin</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    backgroundColor: '#075E54',
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 100,
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 5,
  },
  infoContainer: {
    width: '90%',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 15,
  },
  infoTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  label: {
    fontSize: 16,
    color: 'grey',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: 'grey',
    marginTop: 5,
    fontSize: 12,
  },
  footer: {
    alignItems: 'center',
    padding: 10,
  },
  footerText: {
    color: '#757575',
  },
});

export default Profil;
