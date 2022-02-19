import React from 'react';
import { 
    StyleSheet, 
    SafeAreaView, 
    Platform,
} from 'react-native';

import { Button } from '../components/Button';

export function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Button onPress={() => navigation.navigate('First Activity')} title={'Go to Activity 1'}/>
            <Button onPress={() => navigation.navigate('Second Activity')} title={'Go to Activity 2'}/>
            <Button onPress={() => navigation.navigate('Third Activity')} title={'Go to Activity 3'}/>
            <Button onPress={() => navigation.navigate('Fourth Activity')} title={'Go to Activity 4'}/>
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
        fontWeight: 'bold'
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