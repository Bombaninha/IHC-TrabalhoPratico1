import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  Platform
} from 'react-native';

import { Button } from '../components/Button';

export function FirstActivity({ navigation }) {
    const [numberOne, setNumberOne] = useState('');
    const [numberTwo, setNumberTwo] = useState('');
    const [result, setResult] = useState(0);

    function handleSum() {
      setResult(parseInt(numberOne) + parseInt(numberTwo))
    }

    return (
      <SafeAreaView style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder="Enter a Number"
          placeholderTextColor="#555"
          onChangeText={setNumberOne}
        />
        <TextInput 
          style={styles.input}
          placeholder="Enter a Number"
          placeholderTextColor="#555"
          onChangeText={setNumberTwo}
        />
        <Button onPress={handleSum} title={'Sum'}/>
        <Text style={styles.title}>Result: {result}</Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#121015',
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  title: {
      color: '#FFF',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10
  },
  input: {
      backgroundColor: '#1F1E25',
      color: '#FFF',
      fontSize: 18,
      padding: Platform.OS === 'ios' ? 15 : 10,
      marginTop: 30,
      borderRadius: 7
  }
});