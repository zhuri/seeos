import React from 'react';
import {
  Image
} from 'react-native';

export default class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('./spiro.png')}
          style={{ flexDirection: 'row', height: 60}}
        />
      );
    }
  }