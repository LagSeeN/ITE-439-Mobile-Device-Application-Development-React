import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet} from 'react-native';

const SecondPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Setting
          </Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            (You are on SecondPage)
          </Text>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('FirstPage')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;
