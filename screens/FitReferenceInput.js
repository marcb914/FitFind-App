import { useState } from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function FitReferenceInput({ navigation, route }) {
  const { selectedItems = [] } = route.params || {};
  const [references, setReferences] = useState(
    selectedItems.reduce((acc, item) => {
      acc[item] = { measurements: {}, styleTags: [] };
      return acc;
    }, {})
  );

  const [inputs, setInputs] = useState(
    selectedItems.reduce((acc, item) => {
      acc[item] = { key: '', value: '' };
      return acc;
    }, {})
  );

  const tags = ['Oversized', 'Fitted', 'Vintage', 'Athleisure', 'Techwear', 'Formal'];

  const handleAddMeasurement = (item) => {
    const { key, value } = inputs[item];
    if (key && value) {
      // ✅ Save measurement to references
      setReferences(prev => ({
        ...prev,
        [item]: {
          ...prev[item],
          measurements: {
            ...prev[item].measurements,
            [key]: value
          }
        }
      }));

      // ✅ Clear input fields
      setInputs(prev => ({
        ...prev,
        [item]: { key: '', value: '' }
      }));
    }
  };



  const handleSave = () => {
    requestAnimationFrame(() => {
      console.log('Sending references:', references);
      navigation.navigate('Review', { references });
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ paddingTop: Platform.OS === 'ios' ? 80 : 60 }}>
        <Text style={styles.title}>Enter Fit References</Text>
        {selectedItems.map((item) => (
          <View key={item} style={styles.section}>
            <Text style={styles.sectionTitle}>{item} Measurements</Text>

            <TextInput
              placeholder={`Measurement name (e.g., Chest)`}
              style={styles.input}
              value={inputs[item].key}
              onChangeText={text => setInputs(prev => ({ ...prev, [item]: { ...prev[item], key: text } }))}
            />
            <TextInput
              placeholder="Value (inches)"
              style={styles.input}
              keyboardType="numeric"
              value={inputs[item].value}
              onChangeText={text => setInputs(prev => ({ ...prev, [item]: { ...prev[item], value: text } }))}
            />
            <Button title={`Add ${item} Measurement`} onPress={() => handleAddMeasurement(item)} />

            {Object.entries(references[item].measurements).map(([key, val]) => (
              <Text key={key}>{key}: {val} in</Text>
            ))}

            <Text style={styles.sectionTitle}>Style Tags for {item}</Text>
            <View style={styles.tagsContainer}>
              {tags.map((tag) => (
                <TouchableOpacity
                  key={tag}
                  style={[styles.tag, references[item].styleTags.includes(tag) && styles.selectedTag]}
                  ///onPress={() => toggleTag(item, tag)}
                  onPress={() => {
                    const isSelected = references[item].styleTags.includes(tag);
                    const updatedTags = isSelected
                      ? references[item].styleTags.filter(t => t !== tag)
                      : [...references[item].styleTags, tag];

                    setReferences(prev => ({
                      ...prev,
                      [item]: {
                        ...prev[item],
                        styleTags: updatedTags
                      }
                    }));
                  }}

                >
                  <Text style={styles.tagText}>{tag}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
        <Button title="Save Fit References" onPress={handleSave} />
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
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
  },
  selectedTag: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  tagText: {
    color: '#333',
  },
});

