import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { IconButton, Colors,Avatar } from 'react-native-paper';

const myLine = <IconButton
icon="android-messages"
color={Colors.blueGrey100}
size={150}
style = {{position: 'relative', left: 80}}
onPress={() => console.log('Pressed')}
/>;
const myFB = <IconButton
icon="facebook"
color={Colors.blue300}
size={150}
style = {{position: 'relative', left: 250}}
onPress={() => console.log('Pressed')}
/>;
const myYt = <IconButton
icon="youtube"
color={Colors.red400}
size={150}
style = {{position: 'relative', left: 400}}
onPress={() => console.log('Pressed')}
/>;

export default class link extends Component {
  static navigationOptions = {
    title: 'Welcome2',
  };
  render() {
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <View>
            <Text style = {{paddingLeft: 155,color:'yellow',fontSize:40,top: -50}}> 社群連結 </Text>
          </View>
          <View style={{flexDirection: 'row' }}>
            <View>
              {myLine}
            </View>
            <View>
              {myFB}
            </View> 
            <View>
              {myYt}
            </View> 
          </View>
          <View style={{  flexDirection: 'row' }}>
            <View>
              <Text style = {{paddingLeft: 155,color:'yellow',fontSize:30,top: -50}}> Line </Text>
            </View>
            <View>
              <Text style = {{paddingLeft: 350,color:'yellow',fontSize:30,top: -50}}> FB </Text>
            </View>
            <View>
              <Text style = {{paddingLeft: 300,color:'yellow',fontSize:30,top: -50}}> YouTube </Text>
            </View>
          </View>
          <View>
            <Text style = {{paddingLeft: 100,color:'white',fontSize:20,top: -10}}>簡介</Text>
            <Text style = {{paddingLeft: 100,paddingRight: 80,color:'white',fontSize:16,top: 0}}>在雲嘉南地區，平均每1萬人中才有2張病床，醫師1.7人，醫療資源甚為貧瘠。為回應民眾對醫療的需求，慈院首座分院嘉義大林慈濟醫院，佔地19公頃，於2000年8月13日，正式啟業。  大林慈濟醫院，位於嘉義縣境北方，鄰近雲林縣，屬大林鎮平林地段，相關地理位置在大林火車站南邊，縱貫鐵路東側。像家一樣的溫馨是大家到醫院的第一感受，軟體中的軟體-醫療志工隨時提供大家最親切的協助。而期許做好照顧身、心、靈的全方位醫療照護，院內隨處可見用心與關心，大廳開放式的掛號窗口、低櫃台設計，讓病人從容自在。病房全面採用電動病床讓病人可以自行調整姿勢，不避勞煩家人。  醫院擁有完整的醫療團隊，提供民眾在專業上高品質、態度上親切溫馨的醫療服務，擁有總計一千兩百床醫學中心級的規劃，空間寬敞，舒適明亮的環境，加上尖端先進的設備、溫馨舒適的氣氛，讓醫院不再讓人感到冰冷，可以在治療區內，映入眼簾的是靜思庭園；在病房內，可享受夜裡有蟲鳴蛙叫為伴的鄉野人間。  而為深入社區、落實預防保健，達到健康促進醫院的目標，整合院內外資源，積極推動不同社區族群規劃外展服務專案、承擔在地社區健康營造中心之重任，藉由培養社區健康志工，傳遞健康概念。 在醫療服務上，在偏遠的大埔及瑞里設有醫療站，並安排醫師至偏遠社區、老人安養機構定期巡診、公衛護士的居家護理，還有復健科到校服務特教生，上山下海送愛送到家。對於特殊個案，更結合慈濟人醫會資源進行居家往診服務等，都是希望延伸醫療的觸角。  大林慈濟醫院，提供大家便捷、舒適、持續與整體性的醫療服務是我們的願望！  上午門診時間：08:30-12:00（掛號截止時間：11:30） 上午門診現場號開放時間：上午06:00 下午門診時間：14:00-17:30（掛號截止時間：17:00） 下午門診現場號開放時間：中午11:30 夜間門診時間：19:00-21:00(掛號截止時間：20:30) 夜間門診現場號開放時間：下午05:00</Text>
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

//AppRegistry.registerComponent('link', () => link);