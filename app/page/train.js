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

export default class train extends Component {
  static navigationOptions = {
    title: 'Welcome2',
  };
  render() {
    return (
        <ScrollView>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} >
            <Text style = {{paddingLeft: '7%',color:'yellow',fontSize:30,top:'1%'}}> 搭火車</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>大林慈濟醫院緊臨大林火車站，每天有區間車及莒光號列車合計90餘班停靠，交通相當便利。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>◎台鐵自強號旅客可在斗六站或嘉義站換乘區間車到大林站。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>◎高鐵旅客可在嘉義站搭計乘車到本院，或換搭高鐵巴士捷運系統(BRT1/BRT2)到台鐵嘉義站，再換車到大林站。。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>◎北部高鐵列車旅客也選擇可在台中站下車，步行到台鐵新烏日站換乘台鐵列車到大林車站。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>◎到大林站後可步行或搭乘約15分鐘一班的接駁車到院。</Text>
            <View style={{paddingLeft: '10%',top:'2%'}}>
            <Image 
                source={require('../img/trainmap.png')}
            />
            </View >
            <View style={{paddingLeft: '10%',top:'3%'}}>
              <Image 
                source={require('../img/timetable4.png')}
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
