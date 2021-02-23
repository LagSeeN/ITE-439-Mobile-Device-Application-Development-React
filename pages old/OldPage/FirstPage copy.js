import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet} from 'react-native';

const FirstPage = ({navigation, route}) => {
  const [visible, setVisible] = useState(route.params.userType === 'user');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 20}}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>
            Dynamically Set Drawer/Sidebar Options {'\n'}
            inReact Navigation Drawer {'\n\n'}
            First Page
          </Text>
          <Button
            title="Go to Initial Page"
            onPress={() => navigation.navigate('LandingPage')}
          />
          {visible ? (
            <Button
              title="Change Access to Guest"
              onPress={() => {
                navigation.navigate('drawerStack', {userType: 'guest'});
                setVisible(false);
              }}
            />
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default FirstPage;
