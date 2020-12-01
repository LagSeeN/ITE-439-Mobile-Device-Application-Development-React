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

import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, Alert, Button} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

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
