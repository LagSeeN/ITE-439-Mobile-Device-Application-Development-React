// import React, {Component} from 'react';
// import {Alert, Button, Text, StyleSheet, View} from 'react-native';

// export default class App extends Component {
//   showAlert1() {
//     Alert.alert('Alert Title', 'My Alert Msg', [
//       {
//         text: 'Cancal',
//         onPress: () => alert('Cancel Processed'),
//         style: 'cancel',
//       },
//       {
//         text: 'Ok',
//         onPress: () => alert('Ok Processed'),
//       },
//     ]);
//   }
//   showAlert2() {
//     Alert.alert('Alert Title', 'My Alert Msg', [
//       {
//         text: 'Ask me Later',
//         onPress: () => alert('Ask me Later Processed'),
//       },
//       {
//         text: 'Cancal',
//         onPress: () => alert('Cancel Processed'),
//         style: 'cancel',
//       },
//       {
//         text: 'Ok',
//         onPress: () => alert('Ok Processed'),
//       },
//     ]);
//   }
//   render() {
//     return (
//       <View style={styles.contaner}>
//         <View style={styles.buttonContainer}>
//           <Button title="Button1" onPress={this.showAlert1} />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button title="Button2" onPress={this.showAlert2} color="#009933" />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   contaner: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20,
//   },
// });

///////////////////////////////

// import React, {useState} from 'react';
// import {Text, StyleSheet, View, Switch, SafeAreaView} from 'react-native';

// const App = () => {
//   const [switchValue, setSwitchValue] = useState(false);

//   const toggleSwitch = (value) => {
//     setSwitchValue(value);
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.contaner}>
//         <Text>{switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
//         <Switch
//           style={{marginTop: 30}}
//           onValueChange={toggleSwitch}
//           value={switchValue}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   contaner: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20,
//   },
// });

////////////////////////////////////

import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Modal,
  Button,
} from 'react-native';

const App = () => {
  const [showModal, setShowModal] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.contaner}>
        <Modal animationType={'slide'} transparent={false} visible={showModal}>
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is open!</Text>
            <Button
              title="Click To Close Modal"
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
          </View>
        </Modal>
        <Button
          title="Click To Show Modal"
          onPress={() => {
            setShowModal(!showModal);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 100,
  },
  text: {
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    padding: 10,
  },
});
