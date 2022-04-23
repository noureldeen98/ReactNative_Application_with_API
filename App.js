import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styleSheet'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base'
import PostsProvider from './Context/context'
import HomeScreen from './src/screens/homeScreen'
// import Post from './src/screens/postScreen'
import PostsScreen from './src/screens/postsScreen';

import Details from './src/screens/DetailsScreen';
import LandingPageScreen from './src/screens/landingPageScree';


const Stack = createNativeStackNavigator(); // this will carry all the screens 

export default function App() {
  return (
    <PostsProvider>
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen
        name="LandingPageScreen"
        component={LandingPageScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Main page' }}
      />

<Stack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{ title: 'Posts' }}
      />

<Stack.Screen
        name="details"
        component={Details}
        options={{ title: 'Details' }}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
  </NativeBaseProvider>
  </PostsProvider>
  );
}


