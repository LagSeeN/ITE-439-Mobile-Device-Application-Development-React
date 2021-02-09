import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet} from 'react-native';

const FirstPage = ({navigation}) => {
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
            Home
          </Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            (You are on FirstPage)
          </Text>
          <Button
            title="Go to Setting"
            onPress={() => navigation.navigate('SecondPage')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
