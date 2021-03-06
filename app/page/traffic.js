import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE ,} from 'react-native-maps';
import { Marker } from'react-native-maps';
import { IconButton, Colors } from 'react-native-paper';

export default class traffic extends Component {
  static navigationOptions = {
    title: 'Welcome2',
  };
   // trafficBus
   mytrafficBus = <IconButton
   icon="bus-stop"
   color={Colors.white}
   size={100}
   style = {{ left: '20%'}}
   onPress={() => this.props.navigation.navigate('trafficBus')}
   />;
   // train
   mytrain = <IconButton
   icon="train-variant"
   color={Colors.white}
   size={100}
   style = {{ left: '100%'}}
   onPress={() => this.props.navigation.navigate('train')}
   />;
   //shuttleBus
   myshuttleBus = <IconButton
   icon="timetable"
   color={Colors.white}
   size={100}
   style = {{left: '170%'}}
   onPress={() => this.props.navigation.navigate('shuttleBus')}
   />;
   //mycar
   mycar = <IconButton
   icon="car"
   color={Colors.white  }
   size={100}
   style = {{left: '250%'}}
   onPress={() => this.props.navigation.navigate('mycar')}
   />;
  render() {
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{flex:1}} >
          <ScrollView style={{paddingLeft:'4%'}}>
            <Text style = {{color:'yellow',fontSize:30,top:'1%'}}>◎ 交通資訊</Text>
            <Text style = {{paddingRight:'0%',color:'pink',fontSize:23,top:'2%'}}>大林慈濟醫院位於嘉義縣北部交通要衝，交通相當便利，歡迎利用本站提供的交通資訊服務，規劃最適合您的來院方式：</Text>
            <Text style = {{paddingRight:'2%',color:'black',fontSize:18,top:'4%'}}>搭自用車：慈濟醫院園區前的162號道路，連結國道一號大林交流道及國道三號梅山交流道，162號公路還串連台一線與台三線省道，交通順暢很少塞車。</Text>
            <Text style = {{paddingRight:'2%',color:'black',fontSize:18,top:'4%'}}>搭火車：大林慈濟醫院緊臨大林火車站，全天有90餘班南來北往的列車停靠本站。</Text>
            <Text style = {{paddingRight:'2%',color:'black',fontSize:18,top:'4%'}}>搭客運：每日超過80班雲嘉義區域客運行經大林，其中白天有70%以上的區域客運停經本院大門口慈濟醫院站。3家 國道客運每天合計有超過160班客運經大林往返台北嘉義。</Text>
            <Text style = {{paddingRight:'2%',color:'black',fontSize:18,top:'4%'}}>搭交通專車：本院另提供21條專車服務彰化、南投、雲林、嘉義、台南等地區民眾。</Text>
            <Text style = {{paddingRight:'2%',color:'black',fontSize:18,top:'4%'}}>搭接駁車：若您在日間來到大林鎮，您可以在大林後火車站，利用本院交通接駁車到醫院。</Text>
            <Text style = {{paddingRight:'2%',color:'black',fontSize:18,top:'4%'}}>本院提供叫車服務：請撥打分機8119、8110，由保全為您服務。</Text>
            <View style={{ flexDirection: 'row' , top:'2%'}}>
              <View>
                {this.mytrafficBus}
                <Text style = {{left: '55%',color:'white',fontSize:25,top: '-20%'}}>客運</Text>
              </View>
              <View>
                {this.mytrain}
                <Text style = {{left: '130%', color:'white',fontSize:25,top: '-20%'}}>火車</Text>
              </View>
              <View>
                {this.myshuttleBus}
                <Text style = {{left: '195%',color:'white',fontSize:25,top: '-20%'}}>接駁車</Text>
              </View> 
              <View>
                {this.mycar}
                <Text style = {{left: '280%',color:'white',fontSize:25,top: '-20%'}}>自用車</Text>
              </View> 
          </View>
            <View style={{top:'5%'}}>
              <Image 
                // style={ { width: 400 ,height:400,paddingLeft:'50%' }}
                source={require('../img/map.png')}
              />
              <Text style={ { paddingLeft:'5%' }}></Text>
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{height:400,width:400}}
                region={{
                  latitude: 23.596000, 
                  longitude: 120.457337,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: 23.596000, 
                    longitude: 120.457337,
                  }}
                />
              </MapView>
              <Text style={ { bottom:'15%' }}></Text>
              <Text style={ { bottom:'25%' }}></Text>
              <Text style={ { bottom:'25%' }}></Text>
            </View>
          </ScrollView>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({

  map: {
    ...StyleSheet.absoluteFillObject,
  },
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
