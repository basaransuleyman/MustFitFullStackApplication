import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import logo from '../../images/logo.png';

export default class Logo extends React.Component {
  render(){
  return (
    
           <View style={styles.container}>
             <Image source={logo}
             resizeMode={'contain'}
             style={{   justifyContent: 'center',alignItems: 'center',marginTop:-90,marginBottom:-50,width:100, height:100}}/>
             

           </View>
        
  );
 }
}

const styles = StyleSheet.create({

  
});