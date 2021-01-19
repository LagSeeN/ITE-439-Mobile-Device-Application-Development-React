// import React, {Component} from 'react';
// import {
//   Text,
//   StyleSheet,
//   View,
//   TouchableOpacity,
//   FlatList,
//   ActivityIndicator,
// } from 'react-native';

// export default class App extends Component {
//   //กำหนดค่าเริ่มต้นใน State
//   constructor() {
//     super();
//     this.state = {
//       //Loading state used while loading data for the first time.
//       loading: true,
//       //Data Source for the Flatlist
//       serverData: [],
//       //Loading state used while loading more data.
//       fetching_from_server: false,
//     };
//     //index of the offset to load from Web API
//     this.offset = 1;
//   }

//   componentDidMount() {
//     //Sending the current offset with get request
//     fetch('https://aboutreact.herokuapp.com/getpost.php?offset=' + this.offset)
//       .then((response) => response.json())
//       //Successful response from the API Call
//       .then((responseJson) => {
//         //After the response increasing the offset for the next API call.
//         this.offset = this.offset + 1;
//         this.setState({
//           serverData: [...this.state.serverData, ...responseJson.results],
//           loading: false,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   loadMoreData = () => {
//     this.setState({fetching_from_server: true}, () => {
//       fetch(
//         'https://aboutreact.herokuapp.com/getpost.php?offset=' + this.offset,
//       )
//         .then((response) => response.json())
//         .then((responseJson) => {
//           this.offset = this.offset + 1;
//           this.setState({
//             serverData: [...this.state.serverData, ...responseJson.results],
//             fetching_from_server: false,
//           });
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     });
//   };

//   renderFooter() {
//     return (
//       <View style={styles.footer}>
//         <TouchableOpacity
//           activeOpacity={0.9}
//           onPress={this.loadMoreData}
//           style={styles.loadMoreBtn}>
//           <Text style={styles.btnText}>Load More</Text>
//           {this.state.fetching_from_server ? (
//             <ActivityIndicator color="white" style={{marginLeft: 10}} />
//           ) : null}
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {this.setState.loading ? (
//           <ActivityIndicator size="large" />
//         ) : (
//           <FlatList
//             style={{width: '100%'}}
//             keyExtractor={(item, index) => index}
//             data={this.state.serverData}
//             renderItem={({item, index}) => (
//               <View style={styles.item}>
//                 <Text style={styles.text}>
//                   {item.id}
//                   {'.'}
//                   {item.title.toUpperCase()}
//                 </Text>
//               </View>
//             )}
//             ItemSeparatorComponent={() => <View style={styles.separator} />}
//             ListFooterComponent={this.renderFooter.bind(this)}
//           />
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 30,
//   },
//   item: {
//     padding: 10,
//   },
//   separator: {
//     height: 0.5,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//   },
//   text: {
//     fontSize: 15,
//     color: 'black',
//   },
//   footer: {
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   loadMoreBtn: {
//     padding: 10,
//     backgroundColor: '#800000',
//     borderRadius: 4,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnText: {
//     color: 'white',
//     fontSize: 15,
//     textAlign: 'center',
//   },
// });

///////////////////////////////////

// import React, {Component} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';

// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       text: '',
//     };
//     this.arrayholder = [];
//   }

//   componentDidMount() {
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         this.setState(
//           {
//             isLoading: false,
//             dataSource: responseJson,
//           },
//           () => {
//             this.arrayholder = responseJson;
//           },
//         );
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   searchFilterFunction(text) {
//     const newData = this.arrayholder.filter((item) => {
//       const itemData = item.title ? item.title.toUpperCase() : '';
//       const textData = text.toUpperCase();
//       return itemData.indexOf(textData) > -1;
//     });
//     this.setState({
//       dataSource: newData,
//       text: text,
//     });
//   }

//   listViewItemSeparator = () => {
//     return <View style={styles.separator}></View>;
//   };

//   render() {
//     if (this.state.isLoading)
//       return (
//         <View style={{flex: 1, paddingTop: 20}}>
//           <ActivityIndicator />
//         </View>
//       );
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.textInputStyles}
//           onChangeText={(text) => this.searchFilterFunction(text)}
//           value={this.state.text}
//           underlineColorAndroid="transparent"
//           placeholder="Search Here"
//         />
//         <FlatList
//           data={this.state.dataSource}
//           item={this.listViewItemSeparator}
//           renderItem={({item}) => (
//             <Text style={styles.textStyles}>{item.title}</Text>
//           )}
//           style={{marginTop: 10}}
//           keyExtractor={(index, item) => index.toString() + item}
//           ItemSeparatorComponent={() => <View style={styles.separator} />}
//         />
//       </View>
//     );
//   }
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     marginTop: 40,
//     padding: 16,
//   },
//   textStyles: {
//     padding: 10,
//   },
//   textInputStyles: {
//     height: 40,
//     borderWidth: 1,
//     paddingLeft: 10,
//     borderColor: '#009688',
//     backgroundColor: '#FFFFFF',
//   },
//   separator: {
//     height: 0.3,
//     width: '90%',
//     backgroundColor: '#080808',
//   },
// });

///////////////////////////////////

import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function homeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('details')}
      />
    </View>
  );
}

function detailScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={homeScreen} />
        <Stack.Screen name="details" component={detailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
