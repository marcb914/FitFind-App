import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function BodyMeasurements({ navigation }) {
  const [form, setForm] = useState({ chest: '', waist: '', inseam: '', sleeve: '' });

  const update = (key, val) => setForm({ ...form, [key]: val });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Body Measurements</Text>
      {['chest', 'waist', 'inseam', 'sleeve'].map((field) => (
        <View key={field} style={styles.inputGroup}>
          <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)} (inches)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={form[field]}
            onChangeText={(val) => update(field, val)}
          />
        </View>
      ))}
      <Button title="Next" onPress={() => navigation.navigate('FitReferenceInput', { measurements: form })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  inputGroup: { marginBottom: 15 },
  label: { fontSize: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});
