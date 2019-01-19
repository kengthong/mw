import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
  } from 'react-native';


export default class RouletteItem extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <View>
          <Image source={this.props.logo}></Image>
          <Text>{this.props.title}</Text>
        </View>
      )
    }
  }