import React from 'react';
import {
  Image,
  Dimensions
} from 'react-native';

export default class LogoTitle extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     selectedIndex: props.selectedIndex
  //   }
  // }
    render() {
      // let isEnglish = this.state.selectedIndex == 0 ? true : false
      // let isShqip = this.state.selectedIndex == 1 ? true : false
      // let isEposter = this.state.selectedIndex == 2 ? true : false
      return (
        <Image
          source={require('./main.png')}
          style={{flex:1, height: 70, width: Dimensions.get('window').width}}
          resizeMode="contain"  
          />

      );
    }
  }