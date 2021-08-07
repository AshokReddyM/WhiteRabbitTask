import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import 'react-native-reanimated';
import Dashboard from './src/Screens/Dashboard'
import Profile from './src/Screens/Profile';


enableScreens();
const Stack = createNativeStackNavigator();

const Home = (props) => {
  return(
    <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center'}}>
      <Text style={{textAlign:'center',fontWeight:'bold'}}>Home</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Notifications')}
       style={{height:40,backgroundColor:'#efefef',justifyContent:'center',margin:10}}>
        <Text style={{textAlign:'center'}}>Notifications</Text>
      </TouchableOpacity>
    </View>
  )
}

const Notifications = (props) => {
  return(
    <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center'}}>
      <Text style={{textAlign:'center',fontWeight:'bold'}}>Notifications</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Home')}
       style={{height:40,backgroundColor:'#efefef',justifyContent:'center',margin:10}}>
        <Text style={{textAlign:'center'}}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const Navigations = () =>{
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Home" component={Dashboard} />
      {/* <Stack.Screen name="Home" component={Dashboard} /> */}
      <Stack.Screen name="Profile" component={Profile} />

      {/* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SocialLogin" component={SocialLogin} />
      <Stack.Screen name="OurProduct" component={OurProduct} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Splash1" component={Splash1} />
      <Stack.Screen name="Splash1" component={Splash1} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="SubsciptionPlan" component={SubsciptionPlan} />
      <Stack.Screen name="ProfileWelcome" component={ProfileWelcome} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="SplashSlider" component={SplashSlider} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="PasswordChange" component={PasswordChange} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />  */}
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default function App() {
  return (
    <Navigations/ >
  );
}