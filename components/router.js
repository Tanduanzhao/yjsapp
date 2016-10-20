import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';

import Index from './index/index';

export default class Router extends Component {
  componentDidMount(){
  }

  
  
  render() {
    //控制导航条
    let $navBar = <Navigator.NavigationBar
         routeMapper={{
           LeftButton: (route, navigator, index, navState) =>
            { 
              if(route.leftButton){
                return route.leftButton(route, navigator, index, navState);
              } else{
                return false;
              }
            },
           RightButton: (route, navigator, index, navState) =>
             { 
                if(route.rightButton){
                  return route.rightButton(route, navigator, index, navState); 
                }else{
                  return false
                }
             },
           Title: (route, navigator, index, navState) =>
             { return (<View style={styles.title}><Text style={styles.titleText}>{route.title}</Text></View>); },
         }}
         style={styles.titleBar}
       />; 


    return (
        <Navigator
          initialRoute = {{
            name:'defaultRuote',
            component:Index,
            title:"广东省药品交易中心",
            leftButton:
              (route)=>{
                return <TouchableOpacity style={styles.buttonMenu}><Icon name="list-ul" size={20} color="#fff"/></TouchableOpacity>
              },
            rightButton:
              ()=>{
                return <TouchableOpacity style={styles.buttonMenu}><Icon name="search" size={20} color="#fff"/></TouchableOpacity>
              }
          }}

          navigationBar={
             $navBar
          }

          configureScene ={
            (route, routeStack)=>{
               return Navigator.SceneConfigs.FloatFromBottom
            }
          }
          renderScene = {
            (route,navigator)=>{
              return <route.component {...route} navigator = {navigator} />
            }

          }
          style={{flex:1}}
        />
    );
  }
}

const styles = StyleSheet.create({
  titleBar:{
    flex:1,
    backgroundColor:'#4078c0',
    justifyContent:'center'
  },
  title:{
    flex:1,
    justifyContent:'center'
  },
  titleText:{
    fontWeight:'bold',
    fontSize:16,
    color:'#fff'
  },
  buttonMenu:{
    padding:5,
    marginLeft:5,
    marginRight:5,
    justifyContent:'center',
    flex:1
  }
})