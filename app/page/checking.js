import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ToastAndroid,
    DrawerLayoutAndroid,
    TextInput,
} from 'react-native';

export default class checking extends Component {
    render() {
        var navigationView = (
            <View style={{flex: 1, alignItems:'center'}}>
                <Text style={{width:'100%', textAlign:'center', marginTop:20}}>影像醫學科</Text>
                <Text style={{width:'100%', textAlign:'center', marginTop:20}}>核子醫學科</Text>
                <Text style={{width:'100%', textAlign:'center', marginTop:20}}>臨床病理科</Text>
                <TouchableOpacity onPress={() => {this.drawer.closeDrawer()}}>
                    <Text style={{width:'100%', textAlign:'center', marginTop:20}}>解剖病理科</Text>
                </TouchableOpacity>
            </View>
        );
        return (
            /*
             * 抽屜佈局(DrawerLayoutAndroid)，屬性如下：
             * 1.寬度--drawerWidth，類型：number
             * 2.背景顏色--drawerBackgroundColor，類型：rgba
             * 3.鎖定模式--drawerLockMode，類型：enum('unlocked', 'locked-closed', 'locked-open')
             *   unlocked (默認值)，抽屜可以響應打開和關閉的手勢操作。
             *   locked-closed，抽屜將保持關閉，不可用手勢打開。
             *   locked-open，抽屜將保持打開，不可用手勢關閉。
             *   無論抽屜處於何種狀態，都可以調用openDrawer/closeDrawer這兩個方法打開和關閉。
             * 4.抽屜位置（從屏幕哪邊滑出，左邊還是右邊）--drawerPosition，類型：enum(DrawerConsts.DrawerPosition.Left, DrawerConsts.DrawerPosition.Right)
             * 5.在拖動的過程中是否隱藏軟鍵盤--keyboardDismissMode，類型：enum('none', "on-drag")
             *    none (默認值)，拖拽不會隱藏軟鍵盤;
             *    on-drag 當拖拽開始的時候隱藏軟鍵盤。
             *
             * 抽屜佈局(DrawerLayoutAndroid)，回調函數如下：
             * 1.抽屜被關閉之後調用此回調函數--onDrawerClose
             * 2.抽屜被打開之後調用此回調函數--onDrawerOpen
             * 3.抽屜產生交互的時候調用此回調函數--onDrawerSlide
             * 4.抽屜的狀態變化時調用此回調函數--onDrawerStateChanged, 有三種狀態：
             *    idle（空閒），表示現在導航條上沒有任何正在進行的交互。
             *    dragging（拖拽中），表示用戶正在與導航條進行交互。
             *    settling（停靠中），表示用戶剛剛結束與導航條的交互，導航條正在結束打開或者關閉的動畫。
             * 5.渲染一個可以從屏幕一邊拖入的導航視圖--renderNavigationView
             * 6.statusBarBackgroundColor
             *
             * 抽屜佈局(DrawerLayoutAndroid)，Methods如下：
             * 1.打開抽屜--openDrawer()
             * 2.關閉抽屜--closeDrawer()
             */
            <DrawerLayoutAndroid
                ref={(drawerObj) => {this.drawer = drawerObj;}}
                drawerWidth={120}
                drawerBackgroundColor='#00ffffaa'
                drawerLockMode={'unlocked'}
                keyboardDismissMode={'on-drag'}
                renderNavigationView={() => navigationView}
            >
                {/* <View style={{flex: 1, alignItems: 'center'}}>
                    <TouchableOpacity onPress = {()=>{
                        this.drawer.openDrawer();
                    }}>
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>打開抽屜</Text>
                    </TouchableOpacity>

                    <TextInput
                        style={{width:'80%', height:100, margin: 10, fontSize: 15,}}
                        placeholder="keyboardDismissMode測試，這個Demo的效果：打開抽屜，軟鍵盤隱藏"
                        multiline={true}
                    />
                </View> */}
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({});