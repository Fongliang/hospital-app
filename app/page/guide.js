import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'firebase';
import { List} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const config = {
    apiKey: "AIzaSyBTPMA-CFF6twu_kELwUvwXgbLyEaQeFBI",
    authDomain: "tzuchi-885b2.firebaseapp.com",
    databaseURL: "https://tzuchi-885b2.firebaseio.com",
    projectId: "tzuchi-885b2",
    storageBucket: "tzuchi-885b2.appspot.com",
    messagingSenderId: "904176922016",
    appId: "1:904176922016:web:74eff5889a75463b0bc8c5",
    measurementId: "G-4MCE7BJXY8"
};

var q1,q2,q3
var a1,a2,a3
export default class guide extends Component {
    constructor() {
        super();
        if (!firebase.apps.length) {
            this.app = firebase.initializeApp(config);
          } else {
            this.app = firebase.app();
          }
          this.database = this.app.database();
      
          this.state = {
            read: ""
          };
          this.database.ref("Q1/question").on("value", e => {
            q1 = e.val();
            // this.setState({ read: q1 });
            //console.log(data)
            // const data = e.val();
            // console.log(data)
            // this.setState({ read: data });
          });
          this.database.ref("Q1/answer").on("value", e => {
            a1 = e.val();
          });
          this.database.ref("Q2/question").on("value", e => {
            q2 = e.val();
          });
          this.database.ref("Q2/answer").on("value", e => {
            a2 = e.val();
          });
          this.database.ref("Q3/question").on("value", e => {
            q3 = e.val();
          });
          this.database.ref("Q3/answer").on("value", e => {
            a3 = e.val();
          });
          
      }
    open=()=>{
        let url = 'https://app.tzuchi.com.tw/tchw/OpdReg/SecList_DL.aspx';
        Linking.openURL(url) 
    }
    open2=()=>{
        let url = 'https://app.tzuchi.com.tw/tchw/OpdReg/SecList_TL.aspx';
        Linking.openURL(url) 
    }
  render() {
    // const { read } = this.state;
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style = {{flex:1}}>
            <ScrollView>
                <List.Section title = "常見Q&A" titleStyle = {{fontSize:30}}>
                    <List.Accordion
                    title={q1}  
                    left={props => <List.Icon {...props} icon="account-question" />}
                    titleStyle = {{fontSize:20}}>
                        <List.Item title={a1} />
                    </List.Accordion>
                    <List.Accordion
                    title={q2}
                    left={props => <List.Icon {...props} icon="account-question" />}
                    titleStyle = {{fontSize:20}}>
                        <List.Item title={a2} />
                    </List.Accordion>
                    <List.Accordion
                    title={q3}
                    left={props => <List.Icon {...props} icon="account-question" />}
                    titleStyle = {{fontSize:20}}>
                        <List.Item title={a3} />
                    </List.Accordion>
                </List.Section>
            </ScrollView>
        </LinearGradient>
      );
  }
}
