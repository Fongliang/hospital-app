import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { IconButton, Colors,Avatar } from 'react-native-paper';

export default class main extends Component {
  constructor(props) {
    super(props);
  }
  // mysymbol
  mySymbol = <IconButton
  icon="hospital-building"
  color={Colors.blueGrey100}
  size={150}
  style = {{position: 'relative', left: 80}}
  onPress={() => this.props.navigation.navigate('Introduction')}
  />;
  // traffic
  myBus = <IconButton
  icon="bus"
  color={Colors.green300}
  size={150}
  style = {{position: 'relative', left: 250}}
  onPress={() => this.props.navigation.navigate('traffic')}
  />;
  //stethoscope
  myStethoscope = <IconButton
  icon="stethoscope"
  color={Colors.purple200}
  size={150}
  style = {{position: 'relative', left: 400}}
  onPress={() => this.props.navigation.navigate('stethoscope')}
  />;
  //building guide information
  myMap = <IconButton
  icon="google-maps"
  color={Colors.indigo100}
  size={150}
  style = {{position: 'relative', left: 80}}
  onPress={() => this.props.navigation.navigate('guide')}
  />;
  //Q&A
  myQ = <IconButton
  icon="help"
  color={Colors.red100}
  size={150}
  style = {{position: 'relative', left: 250}}
  onPress={() => this.props.navigation.navigate('QA')}
  />;
  //Social link
  myWeb = <IconButton
  icon="link"
  color={Colors.white}
  size={150}
  style = {{position: 'relative', left: 400}}
  onPress={() => this.props.navigation.navigate('Link')}
  />;
  // 
  render() {
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <Avatar.Image size={100} source={require('../img/symbol.jpg')} />
          <View style={{ flexDirection: 'row' }}>
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
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style = {{paddingLeft: 125,color:'yellow',fontSize:30,top: -50}}> 關於我們 </Text>
            </View>
            <View>
              <Text style = {{paddingLeft: 280,color:'yellow',fontSize:30,top: -50}}> 交通資訊 </Text>
            </View>
            <View>
              <Text style = {{paddingLeft: 250,color:'yellow',fontSize:30,top: -50}}> 掛號說明 </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
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
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style = {{paddingLeft: 125,color:'yellow',fontSize:30,top: -50}}> 樓層引導 </Text>
            </View>
            <View>
              <Text style = {{paddingLeft: 280,color:'yellow',fontSize:30,top: -50}}> 常見問答 </Text>
            </View>
            <View>
              <Text style = {{paddingLeft: 250,color:'yellow',fontSize:30,top: -50}}> 社群連結 </Text>
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
  }
});
