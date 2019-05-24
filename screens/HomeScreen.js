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

const key_lecture_friday = require('./key_lecture_friday.json')
const cataract_friday = require('./cataract_friday.json')
const glaucoma_friday = require('./glaucoma_friday.json')
const retina_friday = require('./retina_friday.json')
const seearvo_friday = require('./seearvo_friday.json')
const oculoplastics_friday = require('./oculoplastics_friday.json')
const sesion_shqip = require('./sesion_shqip.json')
const eposter_friday = require('./eposter_friday.json')

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

  // GetListViewItem = () => {
  //   // Alert.alert("clicked");
  //   FileViewer.open('./file.txt')
  //   .then(() => {
  //     // success
  //     console.log("success file open")
  //   })
  //   .catch(error => {
  //     // error
  //     console.log("error file open", error)
  //   });
  // }

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
                      borderColor: '#2f95dc', 
                      marginBottom: 1
                    }}
                    tabTextStyle={{ color: '#2f95dc' }}
                    activeTabStyle={{ backgroundColor: '#2f95dc' }}
                    />
                    {
                      isEnglish ? 
                      <SectionList
          renderItem={({item, index, section}) => (
            <View style={{borderBottomColor:'#2f95dc',
                          borderBottomWidth:1                  
                          }}                          
                          >
              <Text style={styles.text1} key={0}>{item.time}</Text>              
              <Text style={styles.text2} key={1}>{item.description}</Text>
              <Text style={styles.text3} key={2}>{item.speaker}</Text>
              {/* <Button
                onPress={this.GetListViewItem}
                title="Press Me"
                color="#841584"
              />                         */}
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
        :
          (isPoster ? 
            <SectionList
                      renderItem={({item, index, section}) => (
                        <View style={{borderBottomColor:'#2f95dc',
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
                        {title: 'E-Poster', data: eposter_friday}                                   
                      ]}
                      keyExtractor={(item, index) => item + index}
                    />
            : 
            <SectionList
                      renderItem={({item, index, section}) => (
                        <View style={{borderBottomColor:'#2f95dc',
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
                        {title: 'SESIONI 1', data: sesion_shqip},                      
                        {title: 'DREKA', data: [{"time": "13:25-14:25", "description": ""}]}                      
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
      backgroundColor: '#2f95dc',  
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
