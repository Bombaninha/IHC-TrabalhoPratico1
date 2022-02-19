import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './src/pages/Home'
import { FirstActivity } from './src/pages/FirstActivity'
import { SecondActivity } from './src/pages/SecondActivity'
import { ResultSecondActivity } from './src/pages/ResultSecondActivity'
import { ThirdActivity } from './src/pages/ThirdActivity'
import { FourthActivity } from './src/pages/FourthActivity'
import { ResultThirdActivity } from './src/pages/ResultThirdActivity'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerStyle: {
              backgroundColor: '#1F1E25',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="First Activity" 
          component={FirstActivity} 
          options={{
            headerStyle: {
              backgroundColor: '#1F1E25',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Second Activity" 
          component={SecondActivity} 
          options={{
            headerStyle: {
              backgroundColor: '#1F1E25',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Result Second Activity" 
          component={ResultSecondActivity} 
          options={{
            headerStyle: {
              backgroundColor: '#1F1E25',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Third Activity" 
          component={ThirdActivity} 
          options={{
            headerStyle: {
              backgroundColor: '#1F1E25',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Fourth Activity" 
          component={FourthActivity} 
          options={{
            headerStyle: {
              backgroundColor: '#1F1E25',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
                <Stack.Screen 
          name="Result Third Activity" 
          component={ResultThirdActivity} 
          options={{
            headerStyle: {
              backgroundColor: '#1F1E25',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}