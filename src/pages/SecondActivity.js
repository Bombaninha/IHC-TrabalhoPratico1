import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  Platform
} from 'react-native';

import { Button } from '../components/Button';

export function SecondActivity({ navigation }) {
    const [message, setMessage] = useState('');

    function handleSendMessage() {
        navigation.navigate('Result Second Activity', {
            message: message
        });
    }

    return (
      <SafeAreaView style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder="Enter a Message"
          placeholderTextColor="#555"
          onChangeText={setMessage}
          
        />
        <Button onPress={handleSendMessage} title={'Send'}/>
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