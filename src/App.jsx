import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Akun from './screens/Disukai';
import Beranda from './screens/Beranda';
import Pengaturan from './screens/Profil';
import Profil from './screens/Profil';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={Beranda} options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Disukai" component={Akun}  options={{
          tabBarLabel: 'Disukai',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Profil" component={Profil}  options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Photo Poses" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App

const styles = StyleSheet.create({})