import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function IntroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👕 Welcome to FitFind</Text>
      <Text style={styles.subtitle}>
        Find better-fitting clothes by matching your actual measurements to items that work for your body and style.
      </Text>
      <Button title="Get Started" onPress={() => navigation.navigate('MeasurementIntro')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
});