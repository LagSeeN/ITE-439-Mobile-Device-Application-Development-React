import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const FirstPage = ({navigation}) => {
  const [userName, setUserName] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}> Thai-Nichi Institute of Technology</Text>
        <Text style={styles.textStyles}>
          Please insert your name to pass it secode screen
        </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'Enter your name'}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
        />
        <Button
          title="Go Next"
          onPress={() =>
            navigation.navigate('SecondPage', {
              paramKey: userName,
            })
          }
        />
      </View>
      <Text style={{textAlign: 'center', color: 'grey'}}>www.tni.ac.th</Text>
    </SafeAreaView>
  );
};

export default FirstPage;

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
