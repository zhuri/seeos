import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { WebBrowser } from 'expo';
import LogoTitle from './LogoTitle'

const currency = require('./currency.json')
const cme_credits = require('./cme_credits.json')
const registration_opening = require('./registration_opening.json')
const venue = require('./venue.json')

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
    
  }

  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: "100%", backgroundColor: "#000" }} />
    );
  };

  render() {
    const segment = this.state.selectedIndex    
    return (
      <View style={styles.container}>
        <View style={{marginTop: 10}}></View>
        <SegmentedControlTab
                    values={[]}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    borderRadius={0}
                    
                    tabStyle={{ 
                      backgroundColor: 'white', 
                      marginTop: 10, 
                      borderColor: '#b61f48', 
                      marginBottom: 1
                    }}
                    tabTextStyle={{ color: '#b61f48' }}
                    activeTabStyle={{ backgroundColor: '#b61f48' }}
                    />                    
                      <SectionList
                        renderItem={({item, index, section}) => (
                          <View>                   
                            <Text style={styles.text2} key={1}>{item.description}</Text>                        
                          </View>
                        )}
                        renderSectionHeader={({section: {title}}) => (
                          <Text style={styles.sectionHeader}>{title}</Text>
                        )}
          sections={[
            {title: 'Venue', data: venue},
            {title: 'Currency', data: currency},
            {title: 'Registration & Opening', data: registration_opening},
            {title: 'CME Credits', data: cme_credits}            
          ]}
          keyExtractor={(item, index) => item + index}
        /> 
        
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
    backgroundColor: "white"  
  },  
  text1: {
    fontSize: 14,
    paddingTop: 2,  
    paddingLeft: 10,  
    paddingRight: 10,  
    paddingBottom: 2
  },
  text2: {
    fontSize: 16,
    paddingTop: 2,  
    paddingLeft: 10,  
    paddingRight: 10,  
    paddingBottom: 2
  },
  text3: {
    fontSize: 16,
    color: '#b61f48',
    paddingTop: 2,  
    paddingLeft: 10,  
    paddingRight: 10,  
    paddingBottom: 2
  },
  sectionHeader: {  
      paddingTop: 2,  
      paddingLeft: 10,  
      paddingRight: 10,  
      paddingBottom: 2,  
      fontSize: 22,  
      fontWeight: 'bold',  
      color: "#fff",  
      backgroundColor: '#b61f48',  
  },  // 8fb1aa
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
    color: '#b61f48',
    paddingTop: 10,
    paddingLeft: 120,
    fontSize: 18
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
