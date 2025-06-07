import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GenderSelectScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Gender</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClothingItemSelect', { gender: 'Male' })}>
          <Text style={styles.text}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClothingItemSelect', { gender: 'Female' })}>
          <Text style={styles.text}>Female</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  buttons: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  text: { color: '#fff', fontSize: 16 },
});