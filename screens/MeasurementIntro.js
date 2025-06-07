import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function MeasurementIntro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📏 Why We Ask for Measurements</Text>
      <Text style={styles.body}>
        Finding clothes that fit well is about more than just size tags. Everyones build is unique, and thats why we ask for your key measurements.
        We will guide you through entering a few simple values that help us understand your fit and match you with better-fitting clothing.
      </Text>
      <Text style={styles.body}>
        Start by selecting your gender. Then, you will input your body measurements and examples of your favorite-fitting clothing items.
      </Text>
      <Button
        title="Continue"
        onPress={() => navigation.navigate('GenderSelectScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  body: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});