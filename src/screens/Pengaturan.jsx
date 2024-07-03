import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Pengaturan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pengaturan</Text>
      </View>

      <ScrollView style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text>Andika</Text>
          
        </View>
        <View style={styles.listItem}>
          <Text>Notifikasi</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>akun ini di desain dengan sebaik mungkin</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#075E54',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    width: '100%',
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    padding: 15,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
  },
  footerText: {
    color: '#757575',
  },
});

export default Pengaturan;
