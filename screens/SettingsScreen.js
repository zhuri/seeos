import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Text,
  View,
  ListView,
} from 'react-native';

import LogoTitle from './LogoTitle'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let rowSpace = ""
    let row1 = "Distinguished Speakers, Colleagues, friends and guests,"
    let row2 = "We warmly welcome you to Prishtina - Kosovo, and thank you for joining us at the 16th Congress of the South-East European Ophthalmological Society and 3rd Congress of the Kosovo Association of Ophthalmologists. "
    let row3 = "We would like to present our compliments to our eminent speakers, the delegates, and all participants who have come from all over Europe to participate in this Joint Congress. We are greatly honoured and pleased to welcome you in Prishtina, on behalf of the South-East European Ophthalmological Society and Kosovo Association of Ophthalmologists. We have participants from 14 countries gathered here today, making our congress a true European initiative. This Congress will be an excellent opportunity to exchange academic and clinical developments, and to build a lifelong network."
    let row4 = "The South-East European Ophthalmological Society (SEEOS) was founded in 2004, as an international regional association of the ophthalmologist from South East European countries. Every year, one of the member states organizes the Congress of SEEOS. The first congress took place in Sarajevo – Bosnia and Herzegovina, in 2004 and last one in Szeged - Hungary in 2018. This year, it will take place in Prishtina - Kosovo, hoping to be successful as previous congresses."
    let row5 = "We would like also to thank all the sponsors for their support that enabled the realization of the Congress."
    let row6 = "On behalf of the South-East European Ophthalmological Society and Kosovo Association of Ophthalmologists, we wish you success and a pleasant stay in Prishtina."
    let row7 = "Prof. Gazmend Kacaniku"
    let row8 = "President of SEEOS"
    let row9 = "Prof. Naser Salihu"
    let row10 = "President of KAO"
    this.state = {
      dataSource: ds.cloneWithRows([row1, rowSpace, row2, rowSpace, row3, 
        rowSpace, row4, rowSpace, row5, rowSpace, row6, rowSpace, rowSpace, row7, row8, 
        rowSpace, rowSpace, row9, row10, rowSpace, rowSpace, rowSpace, rowSpace, rowSpace, rowSpace]),
    };
  }

  render() {
    return (
      <View style={{borderBottomColor: 'red'}}>
        <View><Text style={{fontSize: 22, 
          fontWeight: "bold", 
          paddingLeft: 10, 
          paddingTop: 10,
          backgroundColor: "#b61f48",
          color: "#fff"
          }}>Words of President</Text></View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={{fontSize: 18, paddingLeft: 10}}>{rowData}</Text>}
        />
      </View>
      
    )
  }
}
