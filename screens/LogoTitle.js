import React from 'react';
import {
  Image,
  Dimensions
} from 'react-native';

export default class LogoTitle extends React.Component {
    render() {
      return (
        <Image
        source={require('./fff.png')}
        width={Dimensions.get('window').width}
        style={{    
          height: 70
          }}      
          />
      );
    }
  }