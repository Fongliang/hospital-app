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

export default class shuttleBus extends Component {
  static navigationOptions = {
    title: 'Welcome2',
  };
  render() {
    return (
        <ScrollView>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} >
            <Text style = {{paddingLeft: '7%',color:'yellow',fontSize:30,top:'1%'}}> 搭客運、公車</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>◎大林鎮有員林客運、台西客運、嘉義客運及嘉義縣公車4家客運業者，每天合計超過80班客運經由大林來往台中嘉義、西螺嘉義、麥寮嘉義、斗六嘉義、梅山嘉義、梅山大林、梅山北港等7條路線，沿線招呼站牌多，站牌附近大德可多加利用。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>◎其中以嘉義大林慈院的車次最多，每天往返各有36班。斗南大林之間每天各有22班往返。斗六與大林每天各有11班往返。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>◎斗六嘉義、梅山嘉義、梅山大林、梅山北港等4條路線、白天班次大多停靠慈濟醫院站。民眾可以在本院大廳前上下車。</Text>
            <Text style = {{paddingRight:'5%', paddingLeft: '7%',color:'black',fontSize:30,top:'2%'}}>國道客運</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>統聯與阿羅哈在大林交流道有服務處，來院大德可利用本院接駁車來往本院及交流道</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>日統客運在大林市區有服務處，來院大德可利用本院接駁車來往本院及日統客運大林站</Text>
            <View style={{paddingLeft: '30%',top:'2%'}}>
              <Image 
                source={require('../img/timetable1.png')}
              />
            </View >
            <Text style = {{paddingRight:'5%', paddingLeft: '7%',color:'black',fontSize:30,top:'2%'}}>區域客運</Text>
            <View style={{paddingLeft: '10%',top:'2%'}}>
              <Image 
                source={require('../img/busmap.png')}
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
