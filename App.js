import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [intensity, setIntensity] = useState(1.3);
  const [gender, setGender] = useState('male');
  const [calories, setCalories] = useState(0);

  const intensities=Array();
  intensities.push({label: 'light', value: 1.3});
  intensities.push({label: 'usual', value: 1.5});
  intensities.push({label: 'moderate', value: 1.7});
  intensities.push({label: 'hard', value: 2});
  intensities.push({label: 'very hard', value: 2.2});

  const genders = [
    {label: 'male', value: 'male'},
    {label: 'female', value: 'female'}
  ];


  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text> Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setWeight(text)}
          placeholder='in kilograms'
          keyboardType='numeric'
        />
      </View>
      <View style={styles.field}>
        <Text> Intensity</Text>
        <Picker 
        style={styles.intensity}
        onValueChange={(itemValue) => setIntensity(intemValue)}
        selectedValue={intensity}>
          {intensities.map((intensity, index) => {
            <Picker.Item key={item} label={intensity.label} value={intensity.value}/>
          })
          }
        </Picker>
      </View>
      <View style={styles.field}>
        <Text>Gender</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
