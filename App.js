import React, { Component } from "react"
import {Text, View, } from "react-native";
import Homescreen from "./screen/Homescreen";

export default class App extends Component{
  render(){
    return(
      <View style={{flex: 1}}> 
        <Homescreen  />
      </View>
    )
  }
}
