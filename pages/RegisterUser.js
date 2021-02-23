import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Alert,
  SafeAreaView,
} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';

var db = openDatabase({name: 'dbExample.db'});

export default RegisterUser = ({navigation}) => {
  let [userName, setUsername] = useState('');
  let [userContact, setuserContact] = useState('');
  let [userAddress, setuserAddress] = useState('');

  let register_user = () => {
    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!userContact) {
      alert('Please fill Contact Number');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }

    // db.transaction(function (tx) {
    //   tx.executeSql(
    //     'INSERT INTO table_user(user_name,user_contact,user_address) VALUE(?,?,?)',
    //     [userName, userContact, userAddress],
    //     (tx, results) => {
    //       if (results.rowsAffected > 0) {
    // Alert.alert(
    //   'Success',
    //   'You are Registered Successfully',
    //   [
    //     {
    //       text: 'OK',
    //       onPress: () => navigation.navigate('HomeScreen'),
    //     },
    //   ],
    //           {cancelable: false},
    //         );
    //       } else alert('Reistration Failed');
    //     },
    //   );
    // });
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
        [userName, userContact, userAddress],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              {cancelable: false},
            );
          } else alert('Registration Failed');
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
          <KeyboardAvoidingView
            style={{flex: 1, justifyContent: 'space-between'}}>
            <Mytextinput
              placeholder="Enter Name"
              onChangeText={(userName) => setUsername(userName)}
              style={{padding: 10}}
            />
            <Mytextinput
              placeholder="Enter Contact No."
              onChangeText={(userContact) => setuserContact(userContact)}
              style={{padding: 10}}
              keyboardType="numeric"
            />
            <Mytextinput
              placeholder="Enter Address"
              onChangeText={(userAddress) => setuserAddress(userAddress)}
              style={{padding: 10, textAlignVertical: 'top'}}
              maxLength={255}
              multiline={true}
              numberOfLines={5}
            />
            <Mybutton title="Submit" customClick={register_user} />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
