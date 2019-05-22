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

const education_saturday = require('./education_saturday.json')
const cornea_external_saturday = require('./cornea_external_saturday.json')
const multidisciplinary_saturday = require('./multidisciplinary_saturday.json')
const sesion_shqip = require('./sesion_shqip2.json')
const eposter_saturday = require('./eposter_saturday.json')

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
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
    const segment = this.state.selectedIndex
    let isEnglish = segment == 0 ? true : false
    let isPoster = segment == 2 ? true : false
    return (
      <View style={styles.container}>
        <SegmentedControlTab
                    values={['SEEOS', 'SHOFK', 'E-Poster']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    borderRadius={0}                    
                    tabStyle={{ 
                      backgroundColor: 'white', 
                      marginTop: 10, 
                      borderColor: '#163258', 
                      marginBottom: 10 
                    }}
                    tabTextStyle={{ color: '#163258' }}
                    activeTabStyle={{ backgroundColor: '#163258' }}
                    />
                    {
                      isEnglish ? 
                      <SectionList
                      renderItem={({item, index, section}) => (
                        <View style={{borderBottomColor:'#8fb1aa',
                                      borderBottomWidth:1                  
                                      }}>
                          <Text style={styles.text1} key={0}>{item.time}</Text>              
                          <Text style={styles.text2} key={1}>{item.description}</Text>
                          <Text style={styles.text3} key={2}>{item.speaker}</Text>
                        </View>
                      )}
                      renderSectionHeader={({section: {title}}) => (
                        <Text style={styles.sectionHeader}>{title}</Text>
                      )}
                      sections={[
                        {title: 'EDUCATION', data: education_saturday},
                        {title: 'CORNEA AND EXTERNAL EYE', data: cornea_external_saturday},
                        {title: 'COFFE BREAK', data: [{"time": "10:00 - 10:25", "description": "COFFE BREAK"}]},
                        {title: 'MULTIDISCIPLINARY', data: multidisciplinary_saturday},
                        {title: 'CLOSING OF THE CONGRESS', data: [{"time": "11:30 - 11:50", "description": ""}]}
                      ]}
                      keyExtractor={(item, index) => item + index}
                    />  
                    
                    : 
                    
                    (isPoster ? 
                      <SectionList
                      renderItem={({item, index, section}) => (
                        <View style={{borderBottomColor:'#8fb1aa',
                                      borderBottomWidth:1                  
                                      }}>
                          <Text style={styles.text1} key={0}>{item.time}</Text>              
                          <Text style={styles.text2} key={1}>{item.description}</Text>
                          <Text style={styles.text3} key={2}>{item.speaker}</Text>
                        </View>
                      )}
                      renderSectionHeader={({section: {title}}) => (
                        <Text style={styles.sectionHeader}>{title}</Text>
                      )}
                      sections={[
                        {title: 'E-Poster', data: eposter_saturday}                                           
                      ]}
                      keyExtractor={(item, index) => item + index}
                    />  
                      
                      :
                      
                      <SectionList
                      renderItem={({item, index, section}) => (
                        <View style={{borderBottomColor:'#8fb1aa',
                                      borderBottomWidth:1                  
                                      }}>
                          <Text style={styles.text1} key={0}>{item.time}</Text>              
                          <Text style={styles.text2} key={1}>{item.description}</Text>
                          <Text style={styles.text3} key={2}>{item.speaker}</Text>
                        </View>
                      )}
                      renderSectionHeader={({section: {title}}) => (
                        <Text style={styles.sectionHeader}>{title}</Text>
                      )}
                      sections={[
                        {title: 'SESIONI 2', data: sesion_shqip}                                           
                      ]}
                      keyExtractor={(item, index) => item + index}
                    />  
                      )
                    }
        
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
    fontSize: 18,
    paddingTop: 2,  
    paddingLeft: 10,  
    paddingRight: 10,  
    paddingBottom: 2
  },
  text3: {
    fontSize: 16,
    color: 'red',
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
