import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';

const Profil = () => {
  const [nama, setNama] = useState('nama pengguna');
  const [info, setInfo] = useState('info anda');
  const [telepon, setTelepon] = useState('Andika1056@gmail.com');
  const [editNama, setEditNama] = useState(false);
  const [editInfo, setEditInfo] = useState(false);
  const [profileImage, setProfileImage] = useState(require('../../assets/foto profile.jpg'));
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const toggleEditNama = () => {
    setEditNama(!editNama);
  };

  const toggleEditInfo = () => {
    setEditInfo(!editInfo);
  };

  const saveNama = () => {
    setEditNama(false);
  };

  const saveInfo = () => {
    setEditInfo(false);
  };

  const changeProfileImage = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 200,
      maxHeight: 200,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.assets && response.assets.length > 0) {
        setProfileImage({ uri: response.assets[0].uri });
      }
    });
  };

  const openImageModal = (imageUri) => {
    setModalImage(imageUri);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {}
        <TouchableOpacity style={styles.profileContainer} onPress={() => openImageModal(profileImage.uri)}>
          <Image
            source={profileImage}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraIconContainer} onPress={changeProfileImage}>
            <Icon name="camera" size={24} color="#FFF" />
          </TouchableOpacity>
        </TouchableOpacity>

        {}
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Icon name="person-outline" size={24} color="grey" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.label}>Nama</Text>
              {editNama ? (
                <TextInput
                  style={styles.editInput}
                  value={nama}
                  onChangeText={text => setNama(text)}
                  onBlur={saveNama}
                  autoFocus
                />
              ) : (
                <Text style={styles.value}>{nama}</Text>
              )}
            </View>
            <TouchableOpacity onPress={toggleEditNama}>
              <Icon name={editNama ? "checkmark" : "pencil"} size={24} color={editNama ? "green" : "grey"} />
            </TouchableOpacity>
          </View>

          <View style={styles.infoRow}>
            <Icon name="information-circle-outline" size={24} color="grey" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.label}>Info</Text>
              {editInfo ? (
                <TextInput
                  style={styles.editInput}
                  value={info}
                  onChangeText={text => setInfo(text)}
                  onBlur={saveInfo}
                  autoFocus
                />
              ) : (
                <Text style={styles.value}>{info}</Text>
              )}
            </View>
            <TouchableOpacity onPress={toggleEditInfo}>
              <Icon name={editInfo ? "checkmark" : "pencil"} size={24} color={editInfo ? "green" : "grey"} />
            </TouchableOpacity>
          </View>

          <View style={styles.infoRow}>
            <Icon name="call-outline" size={24} color="grey" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.label}>Gmail</Text>
              <Text style={styles.value}>{telepon}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Icon name="close" size={24} color="#FFF" />
          </TouchableOpacity>
          <Image
            source={{ uri: modalImage }}
            style={styles.modalImage}
            resizeMode="contain"
          />
        </View>
      </Modal>

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
    right: 0,
    backgroundColor: 'black',
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
    color: 'black',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: 'black',
    marginTop: 5,
    fontSize: 12,
  },
  editInput: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 0,
  },
  footer: {
    alignItems: 'center',
    padding: 10,
  },
  footerText: {
    color: '#757575',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '90%',
    height: '90%',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
});

export default Profil;
