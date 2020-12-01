// import React, {Component} from 'react';
// import {Text, StyleSheet, View} from 'react-native';

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <View>
// //         <Text> textInComponent </Text>
// //       </View>
// //     )
// //   }
// // }

// const getFullName = (fname, sname, tname) => {
//   return fname + ' ' + sname + ' ' + tname;
// };

// const Cat = () => {
//   return <Text>Hello, I am {getFullName('Run', 'Tum', 'Tugger')}!</Text>;
// };

// export default Cat;

// import React from 'react';
// import {Text, TextInput, View} from 'react-native';

// const Cat = () => {
//   return (
//     <View>
//       <Text>Hello, I am....</Text>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//         }}
//       />
//     </View>
//   );
// };

// const getCat = () => {
//   return "I am also a cat!\nI am also a cat!\nI am also a cat!";
// };

// const Cat = () => {
//   return (
//     <View>
//       <Text>{getCat()}</Text>
//     </View>
//   );
// };

// export default Cat;

// const styles = StyleSheet.create({});

// import React, {Component} from 'react';
// import {Text, SafeAreaView, View} from 'react-native';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <View>
//         <Text>All the very best</Text>
//         <Text>This is your fist app.</Text>
//         <Text>Enjoy react native coding.</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// import React, {Component} from 'react';
// import {Text, SafeAreaView, View, StyleSheet} from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>React Native</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: '#00AA00',
//   },
//   title: {
//     backgroundColor: 'cyan',
//     fontSize: 24,
//     textAlign: 'center',
//     borderRadius: 5,
//     borderWidth: 3,
//     fontWeight: 'bold'
//   },
// });

// export default App;

import React, {useState} from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

const App = () => {
  const [clicks, setClick] = useState(0);

  return (
    <View>
      <Text>You Click: {clicks}</Text>
      <Button
        onPress={() => setClick(clicks + 1)}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default App;

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      year: 2020,
      name: 'Malee',
      color: ['blue'],
    };
  }

  render() {
    return (
      <View>
        <Text> My name is : {this.state.name} </Text>
        <Text> Year is : {this.state.year} </Text>
        <Text> Color are : {this.state.color[0]} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      year: 1900,
    };
  }

  updateYear() {
    this.setState({
      year: 1901,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text 
          onPress={() => {
            this.updateYear();
          }}>
          The year is : {this.state.year}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    fontSize: 75, 
  },
});

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      year: 1900,
      leapYear: true,
      topics: ['React Web', 'React Native', 'JavScript'],
      info: {
        paperback: true,
        length: '335 pages',
        type: 'programming',
      },
    };
  }

  updateYear() {
    this.setState({
      year: 2016,
    });
  }

  render() {
    let leapYear = <Text>This is not a leapyear !</Text>;
    // if (this.state.leapYear == true) leapYear = <Text>This is a leapyear !</Text>;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Year : {this.state.year} {'\n'}
          Lenght : {this.state.info.length} {'\n'}
          Type : {this.state.info.type} {'\n'}
          {this.state.leapYear ? 'This is a leapyear !' : leapYear}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BookDisplay book="React Native 2030" />
      </View>
    );
  }
}

class BookDisplay extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.props.book} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class App extends Component {
  render() {
    let book = 'React Native 2030';
    return (
      <View style={styles.container}>
        <BookDisplay book={book} />
      </View>
    );
  }
}

class BookDisplay extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.props.book} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      book: 'React Native 2030',
    };
  }
  updatebook() {
    this.setState({
      book: 'Express 2040',
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <BookDisplay
          updatebook={() => this.updatebook()}
          book={this.state.book}
        />
      </View>
    );
  }
}

class BookDisplay extends Component {
  render() {
    return (
      <View>
        <Text onPress={this.props.updatebook} style={styles.text}>
          {this.props.book}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});


import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      leapYear: true,
      info: {
        type: 'programing',
      },
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <BookDisplay
          leapYear={this.state.leapYear}
          info={this.state.info}
          topics={['React Web', 'React Native', 'JavaScript']}
        />
      </View>
    );
  }
}

const BookDisplay = (props) => {
  let leapYear;
  let {topics} = props;
  let {info} = props;
  topics = topics.map((topics) => {
    return <Text>{topics}</Text>;
  });
  if (props.leapYear) {
    leapYear = <Text>This is a Leapyear</Text>;
  }
  return (
    <View>
      {leapYear}
      <Text>Book type:{info.type}</Text>
      {topics}
    </View>
  );
};

// class BookDisplay extends Component {
//   render() {
//     return (
//       <View>
//         <Text onPress={this.props.updatebook} style={styles.text}>
//           {this.props.book}
//         </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});


import React, {useState, Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      click: 0,
    };
  }

  clickUp() {
    this.setState({
      click: this.state.click + 1,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.clickUp()}
          title="Click me"
          color="#841584"
        />
        <Text>You clicked {this.state.click} times</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
