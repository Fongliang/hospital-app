import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ViewPagerAndroid,
} from 'react-native';

export default class trafficBus extends Component {
  static navigationOptions = {
    title: 'Welcome2',
  };
  render() {
    return (
        <ScrollView>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} >
            <Text style = {{paddingLeft: '7%',color:'yellow',fontSize:30,top:'1%'}}> 接駁車</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>※自103.11.28起，將停駛停止「大林鎮/交流道」接駁服務（Ｂ線）</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>◎大林鎮鐵公路客運相當便利，大德日間到大林鎮後，可利用本院接駁車服務來醫院 。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>◎目前本院每週一到週六上午有二條接駁車服務路線如下說明。</Text>
            <Text style = {{paddingRight:'5%', paddingLeft: '7%',color:'black',fontSize:30,top:'2%'}}>A線 大林後火車站</Text>
            <View style={{paddingLeft: '10%',top:'2%'}}>
            <Image 
                source={require('../img/timetable2.png')}
            />
            </View >
            <Text style = {{paddingRight:'5%', paddingLeft: '7%',color:'black',fontSize:30,top:'2%'}}>D線斗六區間車</Text>
            <View style={{paddingLeft: '10%',top:'2%'}}>
              <Image 
                source={require('../img/timetable3.png')}
              />
            </View >
            <Text></Text>
            <Text></Text>
            <Text></Text>
            </LinearGradient>
        </ScrollView>
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
