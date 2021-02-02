import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import LandingPage from './pages/LandingPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructor = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={require('./asset/drawerWhite.png')}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({navigation, route}) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        initialParams={route.params}
        options={{
          title: 'FirstPage',
          headerLeft: () => (
            <NavigationDrawerStructor navigationProps={navigation} />
          ),
          headerStyle: {backgroundColor: '#A5B59C'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="SecondPage">
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'SecondPage',
          headerLeft: () => (
            <NavigationDrawerStructor navigationProps={navigation} />
          ),
          headerStyle: {backgroundColor: '#A5B59C'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
}

function thirdScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="ThirdPage">
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'ThirdPage',
          headerLeft: () => (
            <NavigationDrawerStructor navigationProps={navigation} />
          ),
          headerStyle: {backgroundColor: '#A5B59C'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
}

const drawerStack = ({route}) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{activeTintColor: '#e91e63'}}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {route.params.userType === 'user' ? (
              <DrawerItem
                label={({color}) => (
                  <Text style={{color}}>Change Access to Guest</Text>
                )}
                onPress={() =>
                  props.navigation.navigate('drawerStack', {userType: 'guest'})
                }
              />
            ) : null}
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen
        name="FirstPage"
        component={firstScreenStack}
        options={{drawerLabel: 'First page  Option'}}
        initialParams={{userType: route.params.userType}}
      />
      {route.params.userType === 'user' ? (
        <>
          <Drawer.Screen
            name="SecondPage"
            component={secondScreenStack}
            options={{drawerLabel: 'Second page  Option'}}
          />
          <Drawer.Screen
            name="ThirdPage"
            component={thirdScreenStack}
            options={{drawerLabel: 'Third page  Option'}}
          />
        </>
      ) : null}
      {/* {route.params.userType === 'guest' ? (
        <>
          <Drawer.Screen
            name="FirstPage"
            component={firstScreenStack}
            options={{drawerLabel: 'First page  Option'}}
            initialParams={{userType: route.params.userType}}
          />
        </>
      ) : null} */}
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="drawerStack" component={drawerStack} />
      </Stack.Navigator>
      {/* <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="FirstPage"
          component={firstScreenStack}
          options={{drawerLabel: 'First page  Option'}}
        />
        <Drawer.Screen
          name="SecondPage"
          component={secondScreenStack}
          options={{drawerLabel: 'Second page  Option'}}
        />
        <Drawer.Screen
          name="ThirdPage"
          component={thirdScreenStack}
          options={{drawerLabel: 'Third page  Option'}}
        />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
