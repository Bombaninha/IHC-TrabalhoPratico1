import React, { useState, useEffect } from 'react';
import { 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  Platform,
  PermissionsAndroid,
  ScrollView
} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import { Button } from '../components/Button';

import { barometer, gyroscope, SensorTypes, setUpdateIntervalForType } from "react-native-sensors";

export function FourthActivity({ navigation }) {
    const [directions, setDirections] = useState({
        x: 0,
        y: 0,
        z: 0
    });
    
    const [pressure, setPressure] = useState('');

    const [currentLatitude, setCurrentLatitude] = useState('');
    const [currentLongitude, setCurrentLongitude] = useState('');
    const [watchID, setWatchID] = useState(0);

    useEffect(() => {
        setUpdateIntervalForType(SensorTypes.gyroscope, 400); // defaults to 100ms
        setUpdateIntervalForType(SensorTypes.barometer, 400); // defaults to 100ms

        const subscription1 = gyroscope.subscribe(({ x, y, z }) => setDirections({ x: x, y: y, z: z}));
        const subscription2 = barometer.subscribe(({ pressure }) => setPressure(pressure));
    }, []);
    
    const callLocation = () => {
        if(Platform.OS === 'ios') {
          getLocation();
        } else {
            const requestLocationPermission = async () => {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                    title: "Permissão de Acesso à Localização",
                    message: "Este aplicativo precisa acessar sua localização.",
                    buttonNeutral: "Pergunte-me depois",
                    buttonNegative: "Cancelar",
                    buttonPositive: "OK"
                }
            );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                getLocation();
                } else {
                alert('Permissão de Localização negada');
                }
            };
            requestLocationPermission();
        }
    }
    
    const getLocation = () => {
        Geolocation.getCurrentPosition(
        (position) => {
            const currentLatitude = JSON.stringify(position.coords.latitude);
            const currentLongitude = JSON.stringify(position.coords.longitude);
            setCurrentLatitude(currentLatitude);
            setCurrentLongitude(currentLongitude);
        },
          (error) => alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        
        const watchID = Geolocation.watchPosition((position) => {
            const currentLatitude = JSON.stringify(position.coords.latitude);
            const currentLongitude = JSON.stringify(position.coords.longitude);
            setCurrentLatitude(currentLatitude);
            setCurrentLongitude(currentLongitude);
        });
        setWatchID(watchID);
    }
    
    const clearLocation = () => {
        Geolocation.clearWatch(watchID);
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Giroscópico</Text>
            <TextInput 
            style={styles.input}
            placeholder="X"
            placeholderTextColor="#555"
            value={directions.x.toString()}
            />
            <TextInput 
            style={styles.input}
            placeholder="Y"
            placeholderTextColor="#555"
            value={directions.y.toString()}
            />
            <TextInput 
            style={styles.input}
            placeholder="Z"
            placeholderTextColor="#555"
            value={directions.z.toString()}
            />

            <Text style={styles.title}>Barômetro</Text>
            <TextInput 
            style={styles.input}
            placeholder="Pressão"
            placeholderTextColor="#555"
            value={pressure.toString()}
            />
            <Button title="Obter Pressão"/>

            <Text style={styles.title}>Geolocalização:</Text> 
            <TextInput 
            style={styles.input}
            placeholder="Latitude"
            placeholderTextColor="#555"
            value={currentLatitude}
            />
            <TextInput 
            style={styles.input}
            placeholder="Longitude"
            placeholderTextColor="#555"
            value={currentLongitude}
            />
            <Button title="Obter Localização" onPress={callLocation}/>
            <Button title="Cancelar Monitoração" onPress={clearLocation}/>
        </ScrollView>
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