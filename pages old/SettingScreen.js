import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.container}>
          <Text style={styles.header}>Setting Screen</Text>
          <View style={{padding: 16}}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('Home')}>
              <Text>Go to Home Tab</Text>
            </TouchableOpacity>
          </View>
          <View style={{padding: 16}}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('News')}>
              <Text>Open News Screen</Text>
            </TouchableOpacity>
          </View>
          <View style={{padding: 16}}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('Profile')}>
              <Text>Open Profile Screen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.footerHeading}>www.tni.ac.th</Text>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16,
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
