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
    let row1 = "Dear Friends, Dear Colleagues,"
    let row2 = "On behalf of the South-East European Ophthalmological Society, as the current president and as a representative of Kosovo Association of the Ophthalmologists, I am most pleased to invite you in the 16th SEEOS Congress which will be held in Prishtina, Republic of Kosovo, between “ May 31st until June 2nd 2019 “. This will be the Joint Congress with Kosovo Association of Ophthalmologists. Kosovo Association of Ophthalmologists was established in 2002 in Prishtina and is member of SEEOS, SOE and ICO. Currently, we have105 members, where among them are 80 ophthalmologists and 25 residents."
    let row3 = "We are inviting the SEEOS members and ophthalmologists from all over the world to hold lectures, present posters or videos. Our intention is to provide an outstanding program, presented by world-renowned speakers. It will be a great opportunity to share experiences, talk about modern trends in the development of ophthalmologic care. We hope that you will also enjoy debates on controversial topics and discussions specifically aimed at the younger ophthalmologists, all of which will add interest and, at times, fun to the packed scientific program."
    let row4 = "No SEEOS Congress would be complete without a great social program, which traditionally reflects the flavor of the host city, Prishtina is a unique modern city with the youngest population in Europe, has so much to offer, catering to every taste with its musical, artistic, and culinary traditions."
    let row5 = "Let me again invite you to Prishtina next year on behalf of the organizing committee of the Joint Congress. Let's look forward to an interesting congress, a manifold collegial exchange, to meeting with old friends and making new friends."
    let row6 = "Yours sincerely, "
    let row7 = "Prof. Gazmend Kacaniku"
    let row8 = "President of SEEOS"
    this.state = {
      dataSource: ds.cloneWithRows([row1, rowSpace, row2, rowSpace, row3, 
        rowSpace, row4, rowSpace, row5, rowSpace, row6, row7, row8, 
        rowSpace, rowSpace, rowSpace, rowSpace, rowSpace, rowSpace]),
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
