import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ReviewScreen({ navigation }) {
  const [references, setReferences] = useState({});

  useEffect(() => {
    const fetchReferences = async () => {
      try {
        const stored = await AsyncStorage.getItem('@fit_references');
        if (stored) {
          setReferences(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Failed to load references:', error);
      }
    };
    fetchReferences();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ paddingTop: Platform.OS === 'ios' ? 80 : 60 }}>
        <Text style={styles.title}>Review Your Fit References</Text>
        <Text style={styles.subtitle}>Here is a summary of the measurements and style tags for each item.</Text>

        {references && Object.keys(references).map((item) => (
          <View key={item} style={styles.section}>
            <Text style={styles.itemTitle}>{item}</Text>

            {references[item].measurements &&
              Object.entries(references[item].measurements).map(([key, value]) => (
                <Text key={key} style={styles.measurement}>{key}: {value} in</Text>
              ))}

            <Text style={styles.tagLabel}>Style Tags:</Text>
            <View style={styles.tagContainer}>
              {references[item].styleTags.map((tag) => (
                <Text key={tag} style={styles.tag}>{tag}</Text>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.buttonGroup}>
          <Button title="Back" onPress={() => navigation.goBack()} />
          <Button title="Finish" onPress={() => navigation.navigate('Explore')} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  measurement: {
    fontSize: 16,
    marginLeft: 10,
  },
  tagLabel: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  tag: {
    backgroundColor: '#eee',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
