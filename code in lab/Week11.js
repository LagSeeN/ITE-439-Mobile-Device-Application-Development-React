// import * as React from 'react';
// import {Text, View, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// function homeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Detail"
//         onPress={() => {
//           // with params
//           navigation.navigate('details', {
//             itemID: 86,
//             otherParam: 'TNI',
//           });
//         }}
//       />
//     </View>
//   );
// }
// function detailsScreen({route, navigation}) {
//   const {itemID} = route.params;
//   const {otherParam} = route.params;
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Text>ItemID : {JSON.stringify(itemID)}</Text>
//       <Text>Other Param : {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => {
//           navigation.push('details', {
//             itemID: Math.floor(Math.random() * 100),
//             otherParam: 'TNI',
//           });
//         }}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="home">
//         <Stack.Screen name="home" component={homeScreen} />
//         <Stack.Screen name="details" component={detailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

////////////////

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
//         <Stack.Screen
//           name="SecondPage"
//           component={SecondPage}
//           options={{
//             title: 'Second Page',
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

///////////////////////////////////////

import * as React from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation, route}) {
  React.useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Create Post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
    </View>
  );
}
function CreatePostScreen({navigation, route}) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="Input text here"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate('Home', {post: postText});
        }}
      />
    </>
  );
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
