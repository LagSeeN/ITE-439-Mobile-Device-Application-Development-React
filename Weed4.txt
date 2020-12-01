import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const MyCustomeTextWith = (props) => {
  return (
    <Text>
      Your Frst Name is {props.firstname}
      and Last name is {props.secondname}
    </Text>
  );
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MyCustomeTextWith firstname="Malee" secondname="Mairu" />
        <MyCustomeTextWith firstname="Yossapon" secondname="Jantraote" />
      </View>
    </SafeAreaView>
  );
};

export default App;


//////////////////////////

import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isOldStyle: true,
    };
  }

  changeNewStyle = () => {
    this.setState({
      isOldStyle: false,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={
            this.state.isOldStyle === true ? styles.stylesOld : styles.stylesNew
          }>
          TNI
        </Text>
        <Button
          title="Change CSS Style"
          onPress={this.changeNewStyle}
          color="#606070"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  stylesOld: {
    fontSize: 30,
    color: 'red',
  },
  stylesNew: {
    fontSize: 60,
    color: 'blue',
  },
});

/////////////////////

import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>View1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>View2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>View3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'skyblue',
  },
  view1: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  view2: {
    flex: 2,
    backgroundColor: 'orange',
  },
  view3: {
    flex: 3,
    backgroundColor: 'skyblue',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

//////////////////////////////////

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
  const [userName, setUserName] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Insert an Text</Text>
        <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={'UserName'}
          style={styles.input}
        />
        <Text style={{color: 'blue'}}>Username : {userName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
  },
});
