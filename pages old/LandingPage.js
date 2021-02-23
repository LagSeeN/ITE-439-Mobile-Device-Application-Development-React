import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet} from 'react-native';

const LandingPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 20}}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>
            Dynamically Set Drawer/Sidebar Options {'\n'}
            inReact Navigation Drawer {'\n\n'}
            Landing Page
          </Text>
          <Button
            title="Go to Home as Registerd User"
            onPress={() =>
              navigation.navigate('drawerStack', {userType: 'user'})
            }
          />
          <Text style={{textAlign: 'center', marginVertical: 20}}>
            ---------------OR---------------
          </Text>
          <Button
            title="Go to Home as Guest"
            onPress={() =>
              navigation.navigate('drawerStack', {userType: 'guest'})
            }
          />
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

export default LandingPage;
