//首页-标题
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
export default class Title extends Component{
	render(){
		return(
			<View style={{padding:10,backgroundColor:'#e8e8e8',justifyContent:'center',flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#d1d1d1'}}>
              <Text style={{fontSize:16,color:'#000',flex:1}}>{this.props.title}</Text>
              <TouchableOpacity onPress={this.props.changeTabHandle} style={{paddingHorizontal:10}}>
                <Text style={{fontSize:12}}>更多</Text>
              </TouchableOpacity>
            </View>
		)
	}
}
