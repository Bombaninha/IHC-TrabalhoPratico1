import React, { useState, useEffect } from 'react';
import { 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  Platform
} from 'react-native';

import { Button } from '../components/Button';

import { accelerometer, SensorTypes, setUpdateIntervalForType } from "react-native-sensors";

export function ThirdActivity({ navigation }) {
  const [directions, setDirections] = useState({
    x: 0,
    y: 0,
    z: 0
  });



  useEffect(() => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 400); // defaults to 100ms
  
    const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) => setDirections({ x: x, y: y, z: z}));  
  }, []);

    return (
      <SafeAreaView style={styles.container}>       
        <TextInput 
          style={styles.input}
          placeholder="X"
          placeholderTextColor="#555"
          value={(Math.round(directions.x * 100) / 100).toFixed(2).toString()}
        />
        <TextInput 
          style={styles.input}
          placeholder="Y"
          placeholderTextColor="#555"
          value={(Math.round(directions.y * 100) / 100).toFixed(2).toString()}
        />
        <TextInput 
          style={styles.input}
          placeholder="Z"
          placeholderTextColor="#555"
          value={(Math.round(directions.z * 100) / 100).toFixed(2).toString()}
        />
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