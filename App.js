// import React, {useState} from 'react';

// import {SafeAreaView, StyleSheet, View, ActivityIndicator} from 'react-native';

// import {WebView} from 'react-native-webview';

// const ActivityIndicatorElement = () => {
//   return (
//     <View style={styles.activityIndicatorStyle}>
//       <ActivityIndicator color="#009688" size="large" />
//     </View>
//   );
// };

// const App = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <WebView
//           style={{flex: 1}}
//           source={{uri: 'https://www.google.com'}}
//           javaScriptEnabled={true}
//           domStorageEnabled={true}
//           onLoadStart={() => setVisible(true)}
//           onLoad={() => setVisible(false)}
//         />
//         {visible ? <ActivityIndicatorElement /> : null}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   activityIndicatorStyle: {
//     flex: 1,
//     position: 'absolute',
//     margin: 'auto',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     justifyContent: 'center',
//   },
// });

// export default App;

///////////////////////////////

// import React from 'react';
// import {
//   Text,
//   StyleSheet,
//   View,
//   SafeAreaView,
//   SectionList,
//   ScrollView,
// } from 'react-native';

// const DATA = [
//   {
//     title: 'Main dishes',
//     data: ['Pizza', 'Burger', 'Risotto'],
//   },
//   {
//     title: 'Sides',
//     data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//   },
//   {
//     title: 'Drinks',
//     data: ['Water', 'Coke', 'Beer'],
//   },
//   {
//     title: 'Desserts',
//     data: ['Cheese Cake', 'Ice Cream'],
//   },
// ];

// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <SectionList
//           sections={DATA}
//           keyExtractor={(item, index) => item + index}
//           renderItem={({item}) => <Item title={item} />}
//           renderSectionHeader={({section: {title}}) => (
//             <Text style={styles.header}>{title}</Text>
//           )}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginHorizontal: 20,
//   },
//   item: {
//     backgroundColor: '#F9C2FF',
//     padding: 20,
//     marginVertical: 10,
//   },
//   title: {
//     fontSize: 24,
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: '#ffff',
//   },
// });

// export default App;

//////////////////////

// import React, {Component} from 'react';
// import {Text, View, SectionList, StyleSheet, Alert} from 'react-native';

// export default class App extends Component {
//   renderSeparator = () => {
//     return <View style={{height: 1, width: '100%', backgroundColor: '#000'}} />;
//   };
//   getListViewItem = (item) => {
//     Alert.alert("Alert แฮร่", item);
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {
//               title: 'A',
//               data: ['ALTERED', 'ABBY', 'ACTION U.S.A.', 'AMUCK', 'ANGUISH'],
//             },
//             {
//               title: 'B',
//               data: [
//                 'BEST MEN',
//                 'BEYOND JUSTICE',
//                 'BLACK GUNN',
//                 'BLOOD RANCH',
//                 'BEASTIES',
//               ],
//             },
//             {
//               title: 'C',
//               data: [
//                 'CARTEL',
//                 'CASTLE OF EVIL',
//                 'CHANCE',
//                 'COP GAME',
//                 'CROSS FIRE',
//               ],
//             },
//           ]}
//           renderItem={({item}) => (
//             <Text
//               style={styles.item}
//               onPress={this.getListViewItem.bind(this, item)}>
//               {item}
//             </Text>
//           )}
//           renderSectionHeader={({section}) => (
//             <Text style={styles.sectionHeader}>{section.title}</Text>
//           )}
//           keyExtractor={(item, index) => index}
//           ItemSeparatorComponent={this.renderSeparator}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#5ead97',
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#FFF',
//     backgroundColor: '#8fb1aa',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

/////////////////////////

import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        FlatListItems: [
          {id: '1', value: 'A'},
          {id: '2', value: 'B'},
          {id: '3', value: 'C'},
          {id: '4', value: 'D'},
          {id: '5', value: 'E'},
          {id: '6', value: 'F'},
          {id: '7', value: 'G'},
          {id: '8', value: 'H'},
          {id: '9', value: 'I'},
          {id: '10', value: 'J'},
          {id: '11', value: 'K'},
          {id: '12', value: 'L'},
          {id: '13', value: 'M'},
          {id: '14', value: 'N'},
          {id: '15', value: 'O'},
          {id: '16', value: 'P'},
          {id: '17', value: 'Q'},
          {id: '18', value: 'R'},
          {id: '19', value: 'S'},
          {id: '20', value: 'T'},
          {id: '21', value: 'U'},
          {id: '22', value: 'V'},
          {id: '23', value: 'W'},
          {id: '24', value: 'X'},
          {id: '25', value: 'Y'},
        ],
      });
  }
  FlatListItemSeparator = () => {
    return (
      <View
        style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}></View>
    );
  };
  GetItems(item) {
    Alert.alert('Alert แฮร่', item);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item}) => (
            <View>
              <Text
                style={styles.item}
                onPress={this.GetItems.bind(
                  this,
                  'ID: ' + item.id + '\nValue: ' + item.value,
                )}>
                {item.value}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
