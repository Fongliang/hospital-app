import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

export default class Introduction extends Component {
  static navigationOptions = {
    title: 'Welcome2',
  };
  render() {
    return (
        <ScrollView>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} >
               {/* <View style={{paddingLeft: '30%'},{ flexDirection: 'row' }}>
               
                <Image 
                style={{flexDirection: 'row'}, { width: 400 ,height:300 }}
                source={require('../img/Tzuchi.png')}
                />
                <Text style = {{paddingLeft: '7%',paddingRight: '7%',color:'black',fontSize:45,top:'10%'}}>◎ 關於我們</Text>
              </View> */}
            <Text style = {{paddingLeft: '7%',color:'yellow',fontSize:30,top:'1%'}}>◎ 創始人介紹</Text>
            <View style={{paddingLeft: '30%'}}>
              <Image 
                style={ { width: 400 ,height:600 }}
                source={require('../img/creater.jpg')}
              />
            </View >
            <Text style = {{paddingRight:'5%', paddingLeft: '7%',color:'black',fontSize:30,top:'2%'}}>佛門因緣</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>上人天性純孝慈柔，十五歲時，母親罹患急性胃穿孔，需要開刀。在那個年代，開刀風險很大，心急的她為母親祝禱、虔念「觀世音菩薩」名號，並發願「願從此茹素、減少自己十二年的壽命，為母親增壽祈福」。許是孝行動天，母親的病不必開刀，服藥而痊癒，她也因此開始茹素還願。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>1960年6月，正值壯年的父親突然因病去世，從發病到往生僅僅不到二十四小時，這帶給上人莫大的衝擊；究竟生從哪裡來，死往何處去？也開啟她探索生命的契機，常到慈雲寺向修道法師探究佛法。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>1962年秋，二十五歲，沒有剃度師父，自行落髮，靜靜踏上僧侶修行的生涯。1963年2月，台北市臨濟寺開壇傳戒，臨入戒場前，上人於慧日講堂禮上印下順導師為師，導師叮囑：「你我因緣殊勝，既然出家了，你要時時刻刻為佛教、為眾生！」並取了法名「證嚴」，字「慧璋」。行了簡單的皈依禮，即儘速趕到臨濟寺，順利地受了三壇大戒。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>回到花蓮後，上人住進普明寺後只有四坪大的小木屋，開始禮拜《法華經》，研究法華教義。因為不受供養，生活很艱苦。1963年10月，移單至花蓮慈善寺講《地藏經》，前後約八個月時間，法緣興盛，目前靜思精舍多位資深的僧眾弟子即是當年的結緣眾。後來，上人帶著這幾位弟子回到普明寺借住，在殿後結伴修行。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'black',fontSize:30,top:'2%'}}>慈濟功德會的發源</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>1966年，一灘血事件為起因，上人萌生成立慈善組織，為貧苦世人服務之志。因緣巧合，花蓮海星中學三位修女來向上人傳教，他們談彼此的教主、教旨、教義。修女臨離去前說：「今天終於了解佛陀的慈悲是普及蠢動含靈一切的生命，確實很偉大。不過，雖然天主的博愛只是為全人類，但是我們在社會上建教堂、蓋醫院、辦養老院，那麼佛教對社會可有什麼具體貢獻？」上人心情頓時沉重起來，佛教徒經常為善不欲人知，但大都各做各的，只以隱名氏的名義默默行善。可惜這分豐厚的愛心，零散缺乏組織；上人於是決定將這股力量組織起來，先從救人做起。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>1966年5月14日（閏農曆3月24日），「佛教克難慈濟功德會」正式成立。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'black',fontSize:30,top:'2%'}}>一針一線縫出慈濟的雛型</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>慈濟的慈善濟貧工作，由六位同修每人每天增產一雙嬰兒鞋開始。上人又利用屋後的竹子，鋸成三十個存錢筒，發給在家信徒一人一個，要她們每天存進五毛錢。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>信徒們覺得奇怪：為什麼不乾脆每個月繳十五元呢？上人說：「希望你們每天提起菜籃即投入五毛錢，臨出門前就有一顆救人的心，節省五毛錢，即是培養節儉的心與愛人、救人的心。」</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>於是這三十個人，每天提起菜籃到菜市場，逢人便歡喜地宣揚，「我們每天要存五毛錢！我們有一個救濟會，我們要救人！」「五毛錢也可以救人」的消息不脛而走，參與的人越來越多，千手千眼救助苦難的功能很快就發揮了；功德會成立的第二個月，即幫助一位大陸來台、孤苦無依的老太太，每天有人送飯給她，為她清理環境，直到她往生後安葬為止。一樁艱辛、偉大的濟世工程就此開展。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>此時，有許多信眾要求皈依，上人為了讓功德會招募更多有心的會員，提出兩項基本條件：一、要皈依的人必須做「慈濟功德會」的會員；二、皈依的會員，要實際負起「慈濟功德會」的社會救濟工作。慈濟功德會創辦初期，上人與弟子們侷促在二十坪不到的普明寺裡，一方面從事加工品製造以維持生計，另一方面還要處理功德會會務，場地實在不敷使用。後來在上人俗家母親協助下，於1969年遷入靜思精舍現址，依舊堅持自力更生的原則。清淨莊嚴、樸實無華的「靜思精舍」，是慈濟永遠的後循，也是全球慈濟人心靈的故鄉。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}></Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'black',fontSize:30,top:'2%'}}>一眼觀時千眼觀 一手動時千手動</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>慈濟的理想是以「慈、悲、喜、捨」之心，起救苦救難之行，予樂拔苦；慈濟的精神是「誠、正、信、實」，並希望以事理圓融之智慧，力邀天下善士，同耕一方福田；勤植萬蕊心蓮，同造愛的社會。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>「我相信佛陀說的人性本善。眾生都一樣，佛有多大的愛心、慈悲心，眾生就有多大的愛心與慈悲心；佛有多大的智慧功能，眾生就有多大的智慧功能，只要予以啟發，就是一種最善良的心境，最真實的快樂。一般人總以為有錢就是幸福，因為窮人難免貧病孤苦。殊不知富有的人更需要讓他了解布施比接受更有福。身病不可怕，最怕的是心病，人身如一棵芭蕉樹，一層一層的剝，到頭來都是空的，只有真實恆持的慈悲喜捨，才能獲致世間最美的境界。」上人又說：「佛教是理，慈濟是事，藉事顯理，以事啟發，回歸於理。」</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>因此，慈濟的志業由慈善、醫療、教育、人文志業，擴及到國際賑災、骨髓捐贈、社區志工、環保，成為「一步八腳印」。慈濟人以智慧相結合，以愛心相扶持，聞聲救苦，即時解難，發揮「一眼觀時千眼觀，一手動時千手動」的功能，使慈濟所及，家家得安康，處處有溫暖。</Text>
            <Text style = {{paddingRight:'5%',paddingLeft: '7%',color:'white',fontSize:20,top:'2%'}}>*註：自2010年12月25日起，因縣市改制，原臺中縣清水鎮改為臺中市清水區、原臺中縣豐原市改為臺中市豐原區。資料來源：慈濟全球資訊網 ( 認識證嚴上人 )</Text>
            <View style={{paddingLeft: '7%',top:'3%'}}>
              <Text style = {{color:'yellow',fontSize:30}}>◎ 宗旨願景目標</Text>
              <Image 
                style={ { width: 600 ,height:400 }}
                source={require('../img/target.png')}
              />
            </View>
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
