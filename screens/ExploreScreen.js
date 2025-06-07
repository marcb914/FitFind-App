import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const mockProducts = [
  {
    id: '1',
    name: 'Techwear Hoodie',
    brand: 'UrbanX',
    price: '$65',
    image: 'https://via.placeholder.com/150',
    styleTags: ['techwear', 'hoodie', 'relaxed'],
    measurements: { chest: 44, length: 27 },
  },
  {
    id: '2',
    name: 'Vintage Denim Jacket',
    brand: 'Retro Fit',
    price: '$88',
    image: 'https://via.placeholder.com/150',
    styleTags: ['vintage', 'outerwear', 'boxy'],
    measurements: { chest: 42, length: 25 },
  },
  {
    id: '3',
    name: 'Oversized Sweatshirt',
    brand: 'Cozy Club',
    price: '$50',
    image: 'https://via.placeholder.com/150',
    styleTags: ['oversized', 'casual', 'minimal'],
    measurements: { chest: 46, length: 28 },
  },
];

export default function ExploreScreen() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      const data = await AsyncStorage.getItem('fitReferences');
      if (data) setUserData(JSON.parse(data));
    };
    loadUserData();
  }, []);

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.brand}>{item.brand}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.tags}>{item.styleTags.join(', ')}</Text>
      <Text style={styles.size}>Chest: {item.measurements.chest}, Length: {item.measurements.length}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={mockProducts}
      keyExtractor={(item) => item.id}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  tags: {
    fontSize: 13,
    marginTop: 4,
    color: '#777',
  },
  size: {
    fontSize: 13,
    color: '#444',
    marginTop: 4,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
