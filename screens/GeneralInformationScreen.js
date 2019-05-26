import React from 'react';
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
    let row11 = "Swiss Diamond Hotel"
    let row12 = "Main Hall Dyar Hall - SEEOS"
    let row13 = "Ulpiana & Marec Hall - Expo"
    let row14 = "Artana - SHOFK"
    let row2 = "The official currency of the congress is the Euro."
    let row3 = "30.05.2019 - 15:00-19:00     Thursday"
    let row31 = "31.05.2019 - 08:00-18:00     Friday"
    let row32 = "31.05.2019 - 09:00-10:00     Opening ceremony "
    let row33 = "31.05.2019 - 10:00-10:30     Welcome Cocktail"
    let row41 = "08:00-18:00    Registration"
    let row42 = "09:00-10:00    Opening Ceremony"
    let row43 = "10:00-10:30    Welcome Cocktail"
    
    let row53  = "This congress had been accredited by the Kosovo Doctors Chamber for Continuing Medical Education (CME) with 20 CME credits for active participants, and 12 CME credits for passive participants."
    let row54 = "Certificates will be issued on Saturday 1st of June."
   
    this.state = {
      dataSource1: ds.cloneWithRows([row11, row12, row14, row13]),
      dataSource2: ds.cloneWithRows([row2]),
      dataSource3: ds.cloneWithRows([row3, row31, row32, row33]),
      dataSource4: ds.cloneWithRows([row41, row42, row43]),
      dataSource5: ds.cloneWithRows([row53, row54]),
    };
  }

  render() {
    return (
      <View style={{borderBottomColor: 'red'}}>
        <View><Text style={{fontSize: 20, 
          fontWeight: "bold", 
          paddingLeft: 10, 
          paddingTop: 10,
          backgroundColor: "#b61f48",
          color: "#fff"
          }}>Venue</Text></View>
        <ListView
          dataSource={this.state.dataSource1}
          renderRow={(rowData) => <Text style={{fontSize: 16, paddingLeft: 10}}>{rowData}</Text>}
        />
        <View><Text style={{fontSize: 20, 
          fontWeight: "bold", 
          paddingLeft: 10, 
          paddingTop: 10,
          backgroundColor: "#b61f48",
          color: "#fff"
          }}>Currency</Text></View>
          <ListView
          dataSource={this.state.dataSource2}
          renderRow={(rowData) => <Text style={{fontSize: 16, paddingLeft: 10}}>{rowData}</Text>}
          />

          <View><Text style={{fontSize: 20, 
            fontWeight: "bold", 
            paddingLeft: 10, 
            paddingTop: 10,
            backgroundColor: "#b61f48",
            color: "#fff"
            }}>Registration & Opening</Text></View>
            <ListView
              dataSource={this.state.dataSource3}
              renderRow={(rowData) => <Text style={{fontSize: 16, paddingLeft: 10}}>{rowData}</Text>}
              />


<View><Text style={{fontSize: 20, 
              fontWeight: "bold", 
              paddingLeft: 10, 
              paddingTop: 10,
              backgroundColor: "#b61f48",
              color: "#fff"
              }}>CME Credits</Text></View>
            <ListView
              dataSource={this.state.dataSource5}
              renderRow={(rowData) => <Text style={{fontSize: 16, paddingLeft: 10}}>{rowData}</Text>}
              />
      </View>
      
    )
  }
}
