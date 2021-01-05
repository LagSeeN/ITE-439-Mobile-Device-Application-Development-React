// import React, {useState} from 'react';
// import {Text, StyleSheet, View, Button, StatusBar} from 'react-native';

// const App = () => {
//   const styleTypes = ['default', 'dark-content', 'light-content'];
//   const [visibleStatusBar, setvisibleStatusBar] = useState(false);
//   const [stylesStatusBar, setstylesStatusBar] = useState(styleTypes[0]);

//   const changeVisibilityStatusBar = () => {
//     setvisibleStatusBar(!visibleStatusBar);
//   };

//   const changeStylesStatusBar = () => {
//     const styled = styleTypes.indexOf(stylesStatusBar) + 1;
//     if (styled === styleTypes.length) return setstylesStatusBar(styleTypes[0]);
//     return setstylesStatusBar(styleTypes[styled]);
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.textStyle}>
//           StatusBar Style : {stylesStatusBar}
//         </Text>
//         <Text style={styles.textStyle}>
//           StatusBar Visibility : {!visibleStatusBar ? 'Visible' : 'Hidden'}
//         </Text>
//       </View>
//       <StatusBar
//         backgroundColor="blue"
//         barStyle={stylesStatusBar}
//         hidden={visibleStatusBar}
//       />
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Toggle StatusBar"
//           onPress={() => changeVisibilityStatusBar()}
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Change Styles StatusBar"
//           onPress={() => changeStylesStatusBar()}
//         />
//       </View>
//     </View>
//   );
// };

//////////////////////////////

// import React, {useState} from 'react';
// import {Text, StyleSheet, View, Button, SafeAreaView} from 'react-native';
// import Icon from 'react-native-ionicons';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>
//           Example to Use Ionicons in React native using react-native-ionicons
//         </Text>
//         <Text style={styles.textStyle}>
//           Icon(camera, infomation-circle-outline) for all platforms
//         </Text>
//         <Text style={styles.instructions}>
//           <Icon name="camera" size={40} color="red" />
//         </Text>
//         <Text style={styles.instructions}>
//           <Icon name="information-circle-outline" size={40} color="blue" />
//         </Text>
//         <Text style={styles.instructions}>
//           <Text style={styles.textStyle}>Platform specific Icon</Text>
//         </Text>
//         <Text style={styles.instructions}>
//           <Icon ios="ios-add" android="md-albums" size={40} color="orange" />
//         </Text>
//         <Text style={styles.instructions}>
//           <Icon ios="md-albums" android="ios-add" size={40} color="green" />
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     padding: 8,
//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingVertical: 20,
//   },
//   textStyle: {
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   instructions: {
//     textAlign: 'center',
//     margin: 10,
//   },
// });

///////////////////////////////

import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import WebView from 'react-native-webview';

const activityIndicatorElement = () => {
  return (
    <ActivityIndicator
      color="#009688"
      size="large"
      style={styles.activityIndicatorStyle}
    />
  );
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <WebView
          source={{uri: 'https://www.google.co.jp/'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          incognito={true}
          renderLoading={activityIndicatorElement}
          startInLoadingState={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});
