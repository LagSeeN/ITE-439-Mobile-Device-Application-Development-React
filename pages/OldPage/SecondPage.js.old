import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const SecondPage = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}> Thai-Nichi Institute of Technology</Text>
        <Text style={styles.textStyles}>
          Values passed from First Page : {route.params.paramKey}
        </Text>
      </View>
      <Text style={{textAlign: 'center', color: 'grey'}}>www.tni.ac.th</Text>
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyles: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
});
