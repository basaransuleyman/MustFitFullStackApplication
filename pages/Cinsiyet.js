import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Dimensions
  
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../pages/Logo';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Welcome extends Component<{}> {


  constructor(props) {
    super(props);
    this.state = { 
      gender:'',
      isLoading:false,
    
    }
}

  render(){

      const { gender  }=this.state;
      const {isLoading}=this.state;
  return (
     <ImageBackground 
  source={require('../../images/cinsiyetback.jpg')}
  style={{width:'100%' , height:'100%',  opacity: 1}}>
    

            <View style={styles.container}>

           <Logo/>

<View style={styles.sideByside}>
  <Text style={{fontSize:20,color:'#24465c',marginTop:0,marginBottom:0,marginTop:0,}}>MUST</Text>
  <Text style={{fontSize:20,color:'#88e315',marginTop:0,marginBottom:0,marginTop:0,}}>FIT</Text>
</View>   
               
                 <View style={styles.sideByside}>
          <TouchableOpacity 
             style={[styles.button , gender === 'woman' ? styles.active : null]}
             onPress={()=>this.props.navigation.navigate('BilgilerKadın')}>
              <View style={styles.iconx}> 
              <Icon name="female" size={25} color='white' />
              </View> 
             {this.state.isLoading ? (
                <ActivityIndicator animating={this.state.isLoading} size={"large"} color={"white"} />
                ) : ( 
             <Text style={{ color:'white',
    textAlign:'center'}}>Woman</Text>
    )}
             </TouchableOpacity>

               
          <TouchableOpacity 
             style={[styles.button , gender === 'woman' ? styles.active : null]}
             onPress={()=>this.props.navigation.navigate('BilgilerErkek')}>
              <View style={styles.iconx}> 
              <Icon name="male" size={25} color='white' />
              </View> 
             {this.state.isLoading ? (
                <ActivityIndicator animating={this.state.isLoading} size={"large"} color={"white"} />
                ) : ( 
             <Text style={{ color:'white',
    textAlign:'center'}}>Man</Text>
    )}
             </TouchableOpacity>


   
 </View>

           </View>
           </ImageBackground>
        
  );
 }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom:200,

  },

 sideByside:{


  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
  marginTop:20



},
iconx:{
alignItems:'center',
justifyContent:'center',
},
  button:{
       backgroundColor: '#24465c',
       borderRadius:100, 
       //height:60,
       flex:1,
       padding:10,
       //alignContent:'center',
  },
  active:{
       backgroundColor:'black',
       color:'rgba(0, 0, 255, 1)',
       height:40,
  },  

    buttonback:{
   color: '#FFFFFF',
   alignItems: 'center',
   justifyContent: 'center',
   width:40,
   height:25,
   marginTop:10,
   marginBottom:0


  },


})