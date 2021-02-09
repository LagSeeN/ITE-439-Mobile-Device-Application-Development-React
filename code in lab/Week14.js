import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {backgroundColor: '#633689'},
        labelStyle: {textAlign: 'center'},
        indicatorContainerStyle: {
          borderBottomColor: '#1E1E1E',
          borderBottomWidth: 5,
        },
      }}>
      <Tab.Screen
        name="FirstPage"
        component={FirstPage}
        options={{tabBarLabel: 'Home'}}></Tab.Screen>
      <Tab.Screen
        name="SecondPage"
        component={SecondPage}
        options={{tabBarLabel: 'Setting'}}></Tab.Screen>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#633689'},
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{title: 'Tab Stack'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

////////////////////////////////

import * as React from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Setting!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: (focused) => {
            if (route.name === 'Home') {
              return (
                <Image
                  source={
                    focused
                      ? require('./asset/logo1.png')
                      : require('./asset/logo2.png')
                  }
                  style={{width: 20, height: 20, borderRadius: 40 / 2}}
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <Image
                  source={
                    focused
                      ? require('./asset/logo3.png')
                      : require('./asset/logo2.png')
                  }
                  style={{width: 20, height: 20, borderRadius: 40 / 2}}
                />
              );
            }
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
