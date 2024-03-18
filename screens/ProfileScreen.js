import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profilePic}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.bio}>Lover of coffee, music, and coding.</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Contact Information</Text>
        <Text style={styles.infoContent}>Email: johndoe@example.com</Text>
        <Text style={styles.infoContent}>Phone: (123) 456-7890</Text>
      </View>

      <View style={styles.settingsSection}>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
  },
  infoSection: {
    padding: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContent: {
    fontSize: 16,
    marginBottom: 5,
  },
  settingsSection: {
    padding: 20,
  },
  settingsButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  settingsText: {
    fontSize: 16,
  },
});

export default ProfileScreen;
