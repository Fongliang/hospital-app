import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { IconButton, Colors,Avatar } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import com.robotemi.sdk.map

export default class main extends Component {
  constructor(props) {
    super(props);
  }
  // mysymbol
  mySymbol = <IconButton
  icon="hospital-building"
  color={Colors.blueGrey100}
  size={150}
  style = {{position: 'relative', left: '30%'}}
  onPress={() => this.props.navigation.navigate('Introduction')}
  />;
  // traffic
  myBus = <IconButton
  icon="bus"
  color={Colors.green300}
  size={150}
  style = {{position: 'relative', left: '100%'}}
  onPress={() => this.props.navigation.navigate('traffic')}
  />;
  //stethoscope
  myStethoscope = <IconButton
  icon="stethoscope"
  color={Colors.purple200}
  size={150}
  style = {{position: 'relative', left: '170%'}}
  onPress={() => this.props.navigation.navigate('stethoscope')}
  />;
  //building guide information
  myMap = <IconButton
  icon="google-maps"
  color={Colors.indigo100}
  size={150}
  style = {{position: 'relative', left: '30%'}}
  onPress={() => this.props.navigation.navigate('guide')}
  />;
  //Q&A
  myQ = <IconButton
  icon="help"
  color={Colors.red100}
  size={150}
  style = {{position: 'relative', left: '100%'}}
  onPress={() => this.props.navigation.navigate('QA')}
  />;
  //Social link
  myWeb = <IconButton
  icon="link"
  color={Colors.white}
  size={150}
  style = {{position: 'relative', left: '170%'}}
  onPress={() => this.props.navigation.navigate('Link')}
  />;
  // 
  render() {
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          {/* <Avatar.Image size={100} source={require('../img/symbol.jpg')} /> */}
          <View style={{flex:1}}>
            <View style={{flex:3.5}} >
              <Swiper style={styles.wrapper} style={{ top: 10}}  horizontal autoplay showsButtons>
                <View style={styles.slide1}>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('QA')}>
                      <Image
                          resizeMode="cover" 
                          source={require('../img/QA.jpg')}
                      />
                      <Text style={styles.text}>ttt</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
              </Swiper>
            </View>
            <View style={{ flexDirection: 'row',flex:2,top:-30}}>
              <View>
                {this.mySymbol}
              </View>
              <View>
                {this.myBus}
              </View> 
              <View>
                {this.myStethoscope}
              </View> 
            </View>
            <View style={{ flexDirection: 'row',flex:0.5}}>
              <View>
                <Text style = {{left: '90%',color:'yellow',fontSize:30}}> 關於我們 </Text>
              </View>
              <View>
                <Text style = {{left: '300%',color:'yellow',fontSize:30}}> 交通資訊 </Text>
              </View>
              <View>
                <Text style = {{left: '500%',color:'yellow',fontSize:30}}> 掛號說明 </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row',flex:2 ,top:-35}}>
              <View>
                {this.myMap}
              </View>
              <View>
                {this.myQ}
              </View> 
              <View>
                {this.myWeb}
              </View> 
            </View>
            <View style={{ flexDirection: 'row',flex:0.5,top:-10 }}>
              <View>
                <Text style = {{left: '90%',color:'yellow',fontSize:30}}> 樓層引導 </Text>
              </View>
              <View>
                <Text style = {{left: '300%',color:'yellow',fontSize:30}}> 常見問答 </Text>
              </View>
              <View>
                <Text style = {{left: '500%',color:'yellow',fontSize:30}}> 社群連結 </Text>
              </View>
            </View>
          </View> 
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  p1: {
    position: 'relative',
    left: 100,
    top: 100,
  },  
  textCenter: {
    color: '#fff',
    backgroundColor: 'rgba(50,50,50,0.3)',
    fontSize: 40,
  },
  slide1: {
    flex: 1 ,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
  },
  slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
  },
  text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
  }
});
