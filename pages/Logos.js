import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import logos from '../../images/logos.png';

export default class Logos extends React.Component {
  render(){
  return (
    
           <View style={styles.container}>
             <Image source={logos}
             resizeMode={'contain'}
            style={{   justifyContent: 'center',alignItems: 'center',width:150, height:150}}/>
             

           </View>
        
  );
 }
}

const styles = StyleSheet.create({

  
});