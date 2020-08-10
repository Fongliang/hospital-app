import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import { List} from 'react-native-paper';

export default class mycar extends Component {
  static navigationOptions = {
    title: 'Welcome2',
  };
  render() {
    return (
        <ScrollView>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} >
            <List.Section title="搭自用車   " titleStyle = {{fontSize:30,color:'yellow' }}>
                <List.Accordion
                title="國道一號"
                left={props => <List.Icon {...props} icon="highway" />}
                titleStyle = {{fontSize:20}}>
                    <List.Item title="若經國道一號來院，建議在大林交流道下公路，下交道後便是162號公路。請往大林方向，但162號公路並非全為直線，請在第一個紅綠燈路口，" titleStyle = {{fontSize:16}} />
                    <List.Item title="即阿羅哈及統聯客運大林站前路口右轉，此後一路直行過榮林路橋後即可準備進入院區。" titleStyle = {{fontSize:16}}/>
                </List.Accordion>
                <List.Accordion
                title="國道三號"
                left={props => <List.Icon {...props} icon="highway" />}
                titleStyle = {{fontSize:20}}>
                    <List.Item title="若經國道三號來院，在梅山交流道下公路，下交道後便是162號公路。往大林方向行直行約6公里，過佛光山南華館後，第一個紅綠燈號口左轉，榮林路橋前即進入院區。" titleStyle = {{fontSize:16}} />
                    <List.Item title="利用國道三號竹崎交流道來院，請沿中正大學指標往民雄正大路，接近中正大學後請依國道大林交流道的指標直行大民南路、北路到底左轉，榮林路橋前即進入院區。" titleStyle = {{fontSize:16}}/>
                </List.Accordion>
                <List.Accordion
                title="台一線"
                left={props => <List.Icon {...props} icon="road" />}
                titleStyle = {{fontSize:20}}>
                    <List.Item title=" 若經台一線省道來院，請留意中油加油站前路口即是162路公路交匯處，請轉往市區方向，直行過榮林路橋後即可準備進入院區。" titleStyle = {{fontSize:16}}/>
                    <List.Item title="台一線省道南下的大德也可在過大林電信局，北上的大德在過三疊溪橋後，利用中正路到榮林陸橋路口上陸橋準備進入院區。" titleStyle = {{fontSize:16}}/>
                </List.Accordion>
                <List.Accordion
                title="台三線"
                left={props => <List.Icon {...props} icon="road" />}
                titleStyle = {{fontSize:20}}>
                    <List.Item title="若經台三線省道來院，過梅山市區後沿中山路直行即可接162號公路。沿162號公路經梅山交流道往大林方向行直行約6公里，過佛光山南華館後，" titleStyle = {{fontSize:16}}/>
                    <List.Item title="第一個紅綠燈號口請左轉，榮林路橋前即可準備進入院區。" titleStyle = {{fontSize:16}}/>
                </List.Accordion>
            </List.Section>
            <View style={{paddingLeft: '10%',top:'2%'}}>
            <Image 
                source={require('../img/carmap.png')}
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
