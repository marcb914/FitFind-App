import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const clothingItems = ['T-Shirt', 'Hoodie', 'Button-Up', 'Jeans', 'Shorts', 'Trousers'];

export default function ClothingItemSelect({ navigation }) {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (item) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Which items do you want help fitting?</Text>

      {clothingItems.map((item) => (
        <TouchableOpacity
          key={item}
          style={[styles.itemButton, selected.includes(item) && styles.itemSelected]}
          onPress={() => toggleSelect(item)}>
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.subtitle}>We will ask for the measurements of a well-fitting version of each selected item next (e.g. hoodie length, jean waist).</Text>

      <View style={styles.buttonGroup}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button
          title="Next"
          onPress={() => navigation.navigate('FitReferenceInput', { selectedItems: selected })}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 16, marginTop: 20, color: '#555' },
  itemButton: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 6,
    padding: 12,
    marginVertical: 6,
  },
  itemSelected: {
    backgroundColor: '#007AFF',
  },
  itemText: {
    textAlign: 'center',
    color: '#333',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
});
