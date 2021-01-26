// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import FirstPage from './pages/FirstPage';
// import SecondPage from './pages/SecondPage';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="FirstPage">
//         <Stack.Screen
//           name="FirstPage"
//           component={FirstPage}
//           options={{
//             title: 'First Page',
//             headerStyle: {backgroundColor: '#009688'},
//             headerTintColor: '#fff',
//             headerTitleStyle: {fontWeight: 'bold'},
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import React from 'react';
// import {StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/Zocial';

// const App = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <Text style={styles.heading}>
//           Example to Use React Native Vetor Icon
//         </Text>
//         <View style={styles.iconContainer}>
//           <Icon name="rocket" size={30} color="#900" />
//           <Icon2 name="appstore" size={30} />
//           <Icon.Button
//             name="facebook"
//             backgroundColor="#3b5998"
//             onPress={() => alert('Login with Apple ID')}>
//             Login with Facebook
//           </Icon.Button>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: 20,
//     textAlign: 'center',
//   },
//   iconContainer: {
//     marginTop: 20,
//     marginBottom: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//   },
// });

/////////////////////////

// import React from 'react';
// import {StyleSheet, Text, View, Button} from 'react-native';

// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';

// function HomeScreen({navigation}) {
//   return (
//     <View style={styles.drawerStyle}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function Notifications({navigation}) {
//   return (
//     <View style={styles.drawerStyle}>
//       <Button onPress={() => navigation.goBack()} title="Go to HomeScreen" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={Notifications} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   drawerStyle: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

/////////////////////////////////////

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

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

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'FirstPage',
          headerLeft: () => (
            <NavigationDrawerStructor navigationProps={navigation} />
          ),
          headerStyle: {backgroundColor: '#A5B59C'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}></Stack.Screen>
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
        }}></Stack.Screen>
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
        }}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
