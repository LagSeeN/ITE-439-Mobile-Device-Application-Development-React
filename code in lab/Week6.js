// import React from 'react';
// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
// } from 'react-native';

// const Separator = () => <View style={styles.separator} />;

// const App = () => (
//   <SafeAreaView style={styles.container}>
//     <View>
//       <Text style={styles.text}>
//         The title and onPress handler are required. It is recommended to set
//         accessibilityLabel to help make your app usable by everyone.
//       </Text>
//       <Button
//         title="Press Me"
//         onPress={() => Alert.alert('Alert', 'Simple Buton pressed')}
//       />
//     </View>
//     <Separator />
//     <View>
//       <Text style={styles.text}>
//         Adjust the color in a way that looks standard on each platform. On iOS,
//         the color prop controls the color of the text. On Android, the color
//         adjusts the background color of the button.
//       </Text>
//       <Button
//         title="Press Me"
//         color="#f194ff"
//         onPress={() =>
//           Alert.alert('Alert', 'Button with adjusted color pressed')
//         }
//       />
//     </View>
//     <Separator />
//     <View>
//       <Text style={styles.text}>
//         All interaction for the component are disable.
//       </Text>
//       <Button title="Press Me" disabled />
//     </View>
//     <Separator />
//     <View>
//       <Text style={styles.text}>
//         This layout strategy lets the title define the width of the button.
//       </Text>
//       <View style={styles.fixToText}>
//         <Button
//           title="LEFT BUTTON"
//           onPress={() => Alert.alert('Alert', 'Left button pressed')}
//         />
//         <Button
//           title="RIGHT BUTTON"
//           onPress={() => Alert.alert('Alert', 'Right button pressed')}
//         />
//       </View>
//     </View>
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     marginHorizontal: 16,
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: '#737373',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
//   text: {
//     textAlign: 'center',
//     marginVertical: 8,
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });
// export default App;

//////////////////////////////////////

// import React, {Component} from 'react';
// import {
//   Text,
//   StyleSheet,
//   View,
//   TouchableHighlight,
//   TouchableNativeFeedback,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
// } from 'react-native';

// export default class App extends Component {
//   onPress() {}

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableNativeFeedback
//           onPress={this.onPress}
//           background={TouchableNativeFeedback.SelectableBackground()}>
//           <View style={styles.button}>
//             <Text> TouchableNativeFeedback (Only Android) </Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableHighlight style={styles.button} onPress={this.onPress}>
//           <Text>TouchableHighlight</Text>
//         </TouchableHighlight>
//         <TouchableOpacity style={styles.button} onPress={this.onPress}>
//           <Text>TouchableOpacity</Text>
//         </TouchableOpacity>
//         <TouchableWithoutFeedback onPress={this.onPress}>
//           <View style={styles.button}>
//             <Text> TouchableWithoutFeedback </Text>
//           </View>
//         </TouchableWithoutFeedback>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     width: 300,
//     margin: 16,
//   },
// });

//////////////////////////////////////

// import React from 'react';
// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
//   Image,
//   TouchableOpacity,
// } from 'react-native';

// const Separator = () => <View style={styles.SeparatorLine} />;

// const App = () => (
//   <SafeAreaView style={styles.MainContainer}>
//     <View>
//       <TouchableOpacity style={styles.FacebookStyle}>
//         <Image
//           source={{
//             uri:
//               'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
//           }}
//           style={styles.ImageIconStyle}
//         />
//         <Separator />
//         <Text style={styles.TextStyle}>Login Using Facebook</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.GooglePlusStyle}>
//         <Image
//           source={{
//             uri:
//               'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
//           }}
//           style={styles.ImageIconStyle}
//         />
//         <Separator />
//         <Text style={styles.TextStyle}>Login Using Google Plus</Text>
//       </TouchableOpacity>
//     </View>
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10,
//   },
//   GooglePlusStyle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#dc4e41',
//     borderWidth: 0.5,
//     borderColor: '#fff',
//     height: 40,
//     width: 220,
//     borderRadius: 5,
//     margin: 5,
//   },
//   FacebookStyle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#485a96',
//     borderWidth: 0.5,
//     borderColor: '#fff',
//     height: 40,
//     width: 220,
//     borderRadius: 5,
//     margin: 5,
//   },
//   ImageIconStyle: {
//     padding: 10,
//     margin: 5,
//     height: 25,
//     width: 25,
//     resizeMode: 'stretch',
//   },
//   TextStyle: {
//     color: '#fff',
//     marginBottom: 4,
//     marginRight: 20,
//   },
//   SeparatorLine: {
//     backgroundColor: '#fff',
//     width: 1,
//     height: 40,
//   },
// });
// export default App;

///////////////////////////////////////

// import React, {useState} from 'react';
// import {SafeAreaView, StyleSheet, View, Button, Image} from 'react-native';

// const App = () => {
//   const [shouldShow, setshouldShow] = useState(true);
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         {/*Here we will retrun the view when state is true
//         and will return false if state is false*/}
//         {shouldShow ? (
//           <Image
//             source={{
//               uri:
//                 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
//             }}
//             style={{width: 150, height: 150}}
//           />
//         ) : null}
//         <Button
//           title="Hide/Show Compoment"
//           onPress={() => setshouldShow(!shouldShow)}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10,
//   },
// });

// export default App;

import React, {Component, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  TextInput,
} from 'react-native';

const App = () => {
  const [TextInputUsername, setTextInputUsername] = useState('');
  const [TextInputPassword, setTextInputPassword] = useState('');

  const showinput = () => {
    alert('email : ' + TextInputUsername + '\npassword : ' + TextInputPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        underlineColorAndroid="transparent"
        style={styles.TextInput}
        onChangeText={(TextInputUsername) =>
          setTextInputUsername(TextInputUsername)
        }
      />
      <TextInput
        placeholder="Password"
        underlineColorAndroid="transparent"
        style={styles.TextInput}
        onChangeText={(TextInputPassword) =>
          setTextInputPassword(TextInputPassword)
        }
      />
      <View style={{marginTop: 15}}>
        <Button
          disabled={
            TextInputUsername == '' || TextInputPassword == '' ? true : false
          }
          title="Submit"
          color="#0080ff"
          onPress={showinput}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 35,
  },
  TextInput: {
    paddingLeft: 5,
    margin: 5,
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#0080ff',
  },
});
