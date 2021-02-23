import * as React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import SettingScreen from './pages/SettingScreen';
import ProfileScreen from './pages/ProfileScreen';
import NewsScreen from './pages/NewsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home Page'}}
      />
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{title: 'News Page'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{title: 'Setting Page'}}
      />
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{title: 'News Page'}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={
                    focused
                      ? require('./asset/logo1.png')
                      : require('./asset/logo3.png')
                  }
                  style={{width: 20, height: 20, borderRadius: 40 / 2}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Stack',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={
                    focused
                      ? require('./asset/logo2.png')
                      : require('./asset/logo3.png')
                  }
                  style={{width: 20, height: 20, borderRadius: 40 / 2}}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
