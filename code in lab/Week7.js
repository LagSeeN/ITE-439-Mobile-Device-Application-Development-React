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

// import React, {useState} from 'react';
// import {
//   Text,
//   StyleSheet,
//   View,
//   SafeAreaView,
//   Modal,
//   Button,
// } from 'react-native';

// const App = () => {
//   const [showModal, setShowModal] = useState();

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.contaner}>
//         <Modal animationType={'slide'} transparent={false} visible={showModal}>
//           <View style={styles.modal}>
//             <Text style={styles.text}>Modal is open!</Text>
//             <Button
//               title="Click To Close Modal"
//               onPress={() => {
//                 setShowModal(!showModal);
//               }}
//             />
//           </View>
//         </Modal>
//         <Button
//           title="Click To Show Modal"
//           onPress={() => {
//             setShowModal(!showModal);
//           }}
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
//     backgroundColor: '#ecf0f1',
//     marginTop: 30,
//   },
//   modal: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: 'blue',
//     padding: 100,
//   },
//   text: {
//     color: 'white',
//     marginTop: 10,
//     fontSize: 20,
//     padding: 10,
//   },
// });

/////////////////////////////////////////

import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Modal,
  Button,
  TouchableNativeFeedback,
} from 'react-native';

const App = () => {
  const [showModal, setShowModal] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.centeredView}>
        <Modal animationType={'slide'} transparent={true} visible={showModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                สวัสดีครับ/ค่ะ ไฟในห้องปิดอยู่ครับ
              </Text>
              <TouchableNativeFeedback
                onPress={() => {
                  setShowModal(!showModal);
                }}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.closeButton}>
                  <Text style={styles.textStyle}> กรุณากดปุ่มเปิดไฟ </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </Modal>
        <Text style={styles.modalText}>คุณลืมปิดไฟในห้อง</Text>
        <TouchableNativeFeedback
          onPress={() => {
            setShowModal(!showModal);
          }}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.openButton}>
            <Text style={styles.textStyle}> กรุณากดปุ่มปิดไฟ </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  closeButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
