import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView,
  SectionList,
    H1
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
// import console = require('console');

const key_lecture_friday = require('./key_lecture_friday.json')
const cataract_friday = require('./cataract_friday.json')
const glaucoma_friday = require('./glaucoma_friday.json')
const retina_friday = require('./retina_friday.json')
const seearvo_friday = require('./seearvo_friday.json')
const oculoplastics_friday = require('./oculoplastics_friday.json')

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Friday',
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2  });

    this.state = {
      // dataSource: ds.cloneWithRows(data)
    };
  }

  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: "100%", backgroundColor: "#000" }} />
    );
  };

  GetListViewItem = (rowData) => {
    // Alert.alert(rowData);
  }

  RenderHeader = () => {
    return (
      <View style={{marginTop: "2%"}}>
        <Text>Header header header</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={({item, index, section}) => (
            <View>
              <View style={styles.wrapper1}>
                <View style={{flex:2}}>
                  <Text style={styles.time} key={index}>{item.time}</Text>
                </View>
                <View style={{flex:5}}>
                  <Text style={styles.description} key={index}>{item.description}</Text>
                </View>
              </View>
              <View style={styles.wrapper2}>
                <Text style={styles.speaker} key={index}>{item.speaker}</Text>
              </View>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          sections={[
            {title: 'KEY LECTURE', data: key_lecture_friday},
            {title: 'CATARACT AND REFRACTIVE SURGERY', data: cataract_friday},
            {title: 'GLAUCOMA', data: glaucoma_friday},
            {title: 'LUNCH BREAK', data: [{"time": "13:35 - 14:25", "description": "LUNCH BREAK"}]},
            {title: 'RETINA', data: retina_friday},
            {title: 'COFFE BREAK', data: [{"time": "16:40 - 16:55", "description": "COFFE BREAK"}]},
            {title: 'SEE - ARVO', data: seearvo_friday},
            {title: 'OCULOPLASTICS', data: oculoplastics_friday},
            {title: 'GALA DINNER', data: [{"time": "20:30", "description": "GALA DINNER"}]},
          ]}
          keyExtractor={(item, index) => item + index}
        />
        {/* <SectionList
          renderItem={({item}) => <ListItem title={item.description} />}
          renderSectionHeader={({section}) => <H1 title={section.key} />}
          sections={[ // homogeneous rendering between sections
            {data: key_lecture_friday, key: "Key lecture"},
            {data: cataract_friday, key: "Cataract"},
            {data: glaucoma_friday, key: "Glaucoma"},
          ]}
        /> */}
        {/* <ListView
          dataSource={this.state.dataSource}
          renderSeparator={this.ListViewItemSeparator}
          renderHeader={this.RenderHeader}
          renderRow={ (rowData, sectionID, rowID) => ( 
            <View style={{
              height: 60,
              flexWrap: 'wrap',
              // flexDirection: 'row',
              // justifyContent: 'space-between',
              // alignItems: 'center',
              backgroundColor: 'white',
            }}>
              <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  backgroundColor: 'green'
                }}>
                <Text style={styles.rowViewContainer} onPress={this.GetListViewItem.bind(this, rowData)} >{rowData.time} </Text> 
              </View>
              <Text style={styles.rowViewContainer} onPress={this.GetListViewItem.bind(this, rowData)} >{rowData.description} </Text> 
              <View>
                <Text style={styles.rowViewContainer} onPress={this.GetListViewItem.bind(this, rowData)} >{rowData.speaker} </Text> 
              </View>
            </View>
          )}
        /> */}
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,  
    backgroundColor: "#5ead97"  
  },  
  sectionHeader: {  
      paddingTop: 2,  
      paddingLeft: 10,  
      paddingRight: 10,  
      paddingBottom: 2,  
      fontSize: 22,  
      fontWeight: 'bold',  
      color: "#fff",  
      backgroundColor: '#8fb1aa',  
  },  
  description: {  
      padding: 10,  
      fontSize: 18,
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
  },
  time: {
    justifyContent: 'flex-start',
    paddingTop: 10
  },
  speaker: {
    color: 'red',
    paddingTop: 10 
  },
  wrapper1: {
    flexWrap: 'wrap',              
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopColor:'#8fb1aa',
    borderTopWidth:1
  },
  wrapper2: {
    flexWrap: 'wrap',              
    backgroundColor: 'white',
    flexDirection: 'row'
  }
});
