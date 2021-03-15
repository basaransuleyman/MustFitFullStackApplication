import React, { Component } from 'react';
import {StyleSheet, Text, View , ImageBackground} from 'react-native';


export default class LogoSplash extends Component{

		constructor(props){
		super(props)
		this.state = {timer : 0 , currentScreen : 'LogoSplash'};


 		setTimeout(()=> {
      this.props.navigation.navigate('SignUp')
    },3000)
    }

   	

   	render(){

   		return(
   		

   		  <ImageBackground 
  source={require('../../images/splash.png')}
  style={{width:'100%' , height:'83%',alignItems:'center', justifyContent:'center', }}>
            
          
           </ImageBackground>
			
   		
   			)
   	}
    
}

const styles=StyleSheet.create({

	   sideByside:{
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
  },

})