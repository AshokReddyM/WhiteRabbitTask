import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import 'react-native-reanimated';
import Dashboard from './src/Screens/Dashboard'
import Profile from './src/Screens/Profile';

import Realm from 'realm';
let realm;


enableScreens();
const Stack = createNativeStackNavigator();


export default function App() {

    
realm = new Realm({
  path: 'EmployeeDatabase.realm',
  schema: [
    {
      name: 'employee_details',
      properties: {
        name: 'string',
        phone: 'int',
        username: 'string',
        profile_image: 'string',
        website: 'string'
  
      },
    },
  ],
});

  return (
    <Navigations/ >
  );
}

const Navigations = () =>{
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Home" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
