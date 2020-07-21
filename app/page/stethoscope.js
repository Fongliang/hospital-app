import * as React from 'react';
import { List } from 'react-native-paper';
import {
    Linking,
  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
const open=()=>{
    let url = 'https://app.tzuchi.com.tw/tchw/OpdReg/SecList_DL.aspx';
    Linking.openURL(url) 
}
const open2=()=>{
    let url = 'https://app.tzuchi.com.tw/tchw/OpdReg/SecList_TL.aspx';
    Linking.openURL(url) 
}
  return (
    <ScrollView>
        <List.Section title="掛號說明" titleStyle = {{fontSize:30}}>
            <List.Accordion
            title="人工掛號專線"
            left={props => <List.Icon {...props} icon="account-tie" />}
            titleStyle = {{fontSize:20}}>
                <List.Item title="大林(05)2648111:週一至週五 08:00～12:00 ， 13:30~17:30，週六08:00～12:00 " />
                <List.Item title="斗六門診(05)5370501:週一至週五 08:30～12:00 ， 13:30~18:00，週六08:30～12:00" />
                <List.Item title="操作說明：電話接通後，請告訴服務人員您的身份證字號與要掛號的日期、科別、醫師即可" />
            </List.Accordion>
            <List.Accordion
            title="語音掛號專線(24小時開放)"
            left={props => <List.Icon {...props} icon="microphone" />}
            titleStyle = {{fontSize:20}}>
                <List.Item title="大林（05）2648222" />
                <List.Item title="斗六門診 （05）5370502" />
            </List.Accordion>
            <List.Accordion
            title="網路掛號(24小時開放)"
            left={props => <List.Icon {...props} icon="microsoft-internet-explorer" />}
            titleStyle = {{fontSize:20}}>
                <List.Item title=" 大林：https://app.tzuchi.com.tw/tchw/OpdReg/SecList_DL.aspx" onPress={open}/>
                <List.Item title="斗六：https://app.tzuchi.com.tw/tchw/OpdReg/SecList_TL.aspx" onPress={open2}/>
            </List.Accordion>
            <List.Accordion
            title="自動掛號機"
            left={props => <List.Icon {...props} icon="ticket-account" />}
            titleStyle = {{fontSize:20}}>
                <List.Item title="現場取號時間：上午診：07：00 ~ 11：30 下午診：11：30 ~ 17：00 夜診：17：00 ~ 20：30" />
            </List.Accordion>
            <List.Accordion
            title="櫃檯掛號時間"
            left={props => <List.Icon {...props} icon="counter" />}
            titleStyle = {{fontSize:20}}>
                <List.Item title="週一~週三：08:00~20:30 ；週四~週五：08:00~18:30 ；週六：08:00~13:30" />
            </List.Accordion>
            <List.Accordion
            title="附註"
            left={props => <List.Icon {...props} icon="calendar-text" />}
            titleStyle = {{fontSize:20}}>
                <List.Item title="1.初/複診民眾皆可預約掛號，初診民眾請攜帶身份證件至服務台辦理基本資料登錄手續。" />
                <List.Item title="2.為避免影響其他掛號者權益，若三個月內累計３次掛號未就診，將限制只能到院掛號，無法使用人工電話、網路預約掛號" />
                <List.Item title="3.如預約掛號後未能來院看診時，請於就診前一日取消預約掛號，以免影響後續您的掛號功能使用" />
            </List.Accordion>
        </List.Section>
    </ScrollView>
    
  );
};

export default MyComponent;