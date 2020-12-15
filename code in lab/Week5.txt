// import React, {Component} from 'react';
// import {Text, StyleSheet, View, TextInput, Image} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <Image
//             source={{
//               uri:
//                 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
//             }}
//             style={styles.ImageStlye}
//           />
//           <TextInput
//             styles={{flex: 1}}
//             placeholder="Enter your Name Here"
//             underlineColorAndroid="tranparent"
//           />
//         </View>
//         <View style={styles.container}>
//           <Image
//             source={{
//               uri:
//                 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_phone.png',
//             }}
//             style={styles.ImageStlye}
//           />
//           <TextInput
//             styles={{flex: 1}}
//             placeholder="Enter your Mobile Here"
//             underlineColorAndroid="tranparent"
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10,
//   },
//   SectionStyle: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignContent: 'center',
//     backgroundColor: '#FFF',
//     borderWidth: 0.5,
//     borderColor: '#000',
//     height: 40,
//     borderRadius: 5,
//     margin: 10,
//   },
//   ImageStlye: {
//     padding: 10,
//     margin: 5,
//     height: 25,
//     width: 25,
//     resizeMode: 'stretch',
//     alignItems: 'center',
//   },
// });

//////////////////////////////////////////////

// import React, {Component} from 'react';
// import {Text, StyleSheet, View, TextInput, Alert, Button} from 'react-native';

// export default class App extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       TextInputName: '',
//       TextInputEmail: '',
//     };
//   }

//   CheckTextInput = () => {
//     if (this.state.TextInputName != '') {
//       if (this.state.TextInputEmail != '') {
//         alert('Success');
//       } else {
//         alert('Please Input Email');
//       }
//     } else {
//       alert('Please Input Name');
//     }
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           placeholder="Enter Name"
//           underlineColorAndroid="transparent"
//           style={styles.TextInput}
//           onChangeText={(TextInputName) => this.setState({TextInputName})}
//         />
//         <TextInput
//           placeholder="Enter Email"
//           underlineColorAndroid="transparent"
//           style={styles.TextInput}
//           onChangeText={(TextInputEmail) => this.setState({TextInputEmail})}
//         />
//         <View style={{marginTop: 15}}>
//           <Button
//             title="Submit"
//             color="#606070"
//             onPress={this.CheckTextInput}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     margin: 35,
//   },
//   TextInput: {
//     paddingLeft: 5,
//     margin: 5,
//     height: 40,
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#606070',
//   },
// });

////////////////////////////

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
  const [TextInputName, setTextInputName] = useState('');
  const [TextInputEmail, setTextInputEmail] = useState('');

  const CheckTextInput = () => {
    if (TextInputName != '') {
      if (TextInputEmail != '') {
        alert('Success');
      } else {
        alert('Please Input Email');
      }
    } else {
      alert('Please Input Name');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Name"
        underlineColorAndroid="transparent"
        style={styles.TextInput}
        onChangeText={(TextInputName) => setTextInputName(TextInputName)}
      />
      <TextInput
        placeholder="Enter Email"
        underlineColorAndroid="transparent"
        style={styles.TextInput}
        onChangeText={(TextInputEmail) => setTextInputEmail(TextInputEmail)}
      />
      <View style={{marginTop: 15}}>
        <Button title="Submit" color="#AA6070" onPress={CheckTextInput} />
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
    borderColor: '#606070',
  },
});

