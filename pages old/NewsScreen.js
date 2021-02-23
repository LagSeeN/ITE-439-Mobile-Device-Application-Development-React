import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import axios from 'axios';

export default class NewsScreen extends Component {
  static navigationOptions = {
    title: 'ข่าวสาร',
    headerStyle: {
      backgroundColoror: '#00802b',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    news: {},
    articles: [],
    totalResults: 0,
    loading: true,
  };

  async getData() {
    const response = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=th&apiKey=ab0d4aca4cea481e8157d31c68eb2b23',
    );
    this.setState({
      news: response.data,
      articles: response.data.articles,
      totalResults: response.data.totalResults,
      loading: false,
    });
  }

  componentDidMount() {
    this.getData();
  }

  _renderItem = ({item}) => {
    let urlToImage =
      item.urlToImage !== null
        ? item.urlToImage
        : 'http://via.placeholder.com/150*100';
    return (
      <View>
        <TouchableHighlight
          underlayColor="white"
          onPress={() => {
            this.props.navigation.navigate('Web', {url: item.url});
          }}>
          <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
            <Image
              resizeMode="cover"
              source={{uri: urlToImage}}
              style={{flex: 1, width: '100%', height: '100%'}}
            />
            <View style={{width: 200, alignSelf: 'center'}}>
              <Text style={{fontSize: 14, marginBottom: 5}}>{item.title}</Text>
              <Text style={{fontSize: 10}}>{item.source.name}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  _onRefresed = () => {
    this.setState({loading: true});
    this.getData();
  };

  render() {
    return (
      <View>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={this.state.articles}
            keyExtractor={(item) => item.title}
            renderItem={this._renderItem}
            refreshing={this.state.loading}
            onRefresh={this._onRefresed}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
