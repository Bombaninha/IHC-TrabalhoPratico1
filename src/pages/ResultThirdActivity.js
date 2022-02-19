import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  Platform
} from 'react-native';

import { Button } from '../components/Button';

export function ResultThirdActivity({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Você me balançou demais!</Text>
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