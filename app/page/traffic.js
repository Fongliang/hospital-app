import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

export default class traffic extends Component {
  static navigationOptions = {
    title: 'Welcome2',
  };
  render() {
    return (
        <ScrollView>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} >
            <Text style = {{paddingLeft: '5%',color:'yellow',fontSize:30,top:'1%'}}>◎ 交通資訊</Text>
            <Text style = {{paddingRight:'2%', paddingLeft: '2%',color:'pink',fontSize:23,top:'2%'}}>大林慈濟醫院位於嘉義縣北部交通要衝，交通相當便利，歡迎利用本站提供的交通資訊服務，規劃最適合您的來院方式：</Text>
            <Text style = {{paddingRight:'2%', paddingLeft: '2%',color:'black',fontSize:18,top:'4%'}}>搭自用車：慈濟醫院園區前的162號道路，連結國道一號大林交流道及國道三號梅山交流道，162號公路還串連台一線與台三線省道，交通順暢很少塞車。</Text>
            <Text style = {{paddingRight:'2%', paddingLeft: '2%',color:'black',fontSize:18,top:'4%'}}>搭火車：大林慈濟醫院緊臨大林火車站，全天有90餘班南來北往的列車停靠本站。</Text>
            <Text style = {{paddingRight:'2%', paddingLeft: '2%',color:'black',fontSize:18,top:'4%'}}>搭客運：每日超過80班雲嘉義區域客運行經大林，其中白天有70%以上的區域客運停經本院大門口慈濟醫院站。3家 國道客運每天合計有超過160班客運經大林往返台北嘉義。</Text>
            <Text style = {{paddingRight:'2%', paddingLeft: '2%',color:'black',fontSize:18,top:'4%'}}>搭交通專車：本院另提供21條專車服務彰化、南投、雲林、嘉義、台南等地區民眾。</Text>
            <Text style = {{paddingRight:'2%', paddingLeft: '2%',color:'black',fontSize:18,top:'4%'}}>搭接駁車：若您在日間來到大林鎮，您可以在大林後火車站，利用本院交通接駁車到醫院。</Text>
            <Text style = {{paddingRight:'2%', paddingLeft: '2%',color:'black',fontSize:18,top:'4%'}}>本院提供叫車服務：請撥打分機8119、8110，由保全為您服務。</Text>
            <View style={{paddingLeft: '7%',top:'3%'}}>
              <Text style = {{color:'yellow',fontSize:30}}>◎ 聯絡我們</Text>
              <Text style = {{color:'black',fontSize:25}}>人工電話掛號：05-2648111</Text>
              <Text style = {{color:'black',fontSize:25}}>語音電話掛號：05-2648222</Text>
              <Text style = {{color:'black',fontSize:25}}>服務台：05-2648000轉5920、5921</Text>
              <Text style = {{color:'black',fontSize:25}}>意見反映：05-2648000轉5035、5036</Text>
              <Text style = {{color:'black',fontSize:25}}>意見反映信箱：dweb@tzuchi.com.tw</Text>
              <Text style = {{color:'black',fontSize:25}}>健康諮詢：05-2648333</Text>
              <Text style = {{color:'black',fontSize:25}}>交通車諮詢服務：05-2648000轉5922</Text>
              <Text style = {{color:'black',fontSize:25}}>轉檢及轉診服務：05-2648666</Text>
              <Text style = {{color:'black',fontSize:25}}>急診醫務：(05)2648000轉5836</Text>
              <Text style = {{color:'black',fontSize:25}}>藥物諮詢專線：(05)2648000轉5384</Text>
              <Text style = {{paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}></Text>
              <Text style = {{paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}></Text>
              <Text style = {{paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}></Text>
            </View>
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
