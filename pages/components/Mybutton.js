import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Mybutton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#008B00',
    color: '#fff',
    padding: 10,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
  },
  text: {
    color: '#fff',
  },
});

export default Mybutton;
