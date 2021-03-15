import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,
  ActivityIndicator,
  
} from 'react-native';


import Toast from 'react-native-toast-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../pages/Logo';
import { Card, Button , Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styletoast={backgroundColor: '#88e315',width: 300,color: "#ffffff",fontSize: 12,lineHeight: 2,lines: 1,borderRadius: 15,fontWeight: "bold",yOffset: 40};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Profile extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {

     data:[],
     isLoading:true,

  
    }
     
  }

componentDidMount(){
    this.getData();

    this.setState({
      isLoading: false,
       
    });
  }




deletePost=async (postid) =>
{
   const {navigate} = this.props.navigation;
  const token = await AsyncStorage.getItem("jwt")
  fetch('https://must-fit-backend.herokuapp.com/deletepost/'+postid,{
    method:"delete",
    headers:{
      'Authorization': 'Bearer '+ token,
    }

  }).then(res=>res.json())
  .then(async (result) =>{

             try {     
                 Toast.show('Your Informations deleted ' ,Toast.SHORT, Toast.TOP,styletoast);
                 navigate('Cinsiyet')
             }
             catch (e) {
                console.log("error hai",e) 
                
             }
  })
}





getData= async ()=>{
    const {navigate} = this.props.navigation;
  const token = await AsyncStorage.getItem("jwt")
   fetch('https://must-fit-backend.herokuapp.com/mypost',{
        headers:{
            'Authorization': 'Bearer '+ token,
        }
    })
    .then((res) => res.json())
    .then(async (result) => {
           this.setState({
      isLoading: false,
      data:result.mypost
    });

           try {
            
             console.log(this.state.data)
             console.log(postid)
            } catch (e) {
              console.log("error hai",e)
                  

            }

    })
   
    }


  render(){
  const isLoading=this.state.isLoading;
  const data = this.state.data;
  return (
     <ImageBackground 
  source={require('../../images/profileback.jpg')}
  style={{width:'100%' , height:'100%',  opacity: 0.9}}>


  



  <View style={styles.header}>


     <View style={styles.sideByside}>
      <View style={styles.iconx}>
    <TouchableOpacity style={styles.submitButtonTextone}
              onPress={()=>this.props.navigation.navigate('Profile')}>
    <Icon  name="user-circle" size={35} color='#88e315' />
     </TouchableOpacity> 
    </View>
    <View style={styles.middle}>
    <Text style={{fontSize:20,color:'#24465c',marginTop:40}}>MUST</Text>
     <Text style={{fontSize:20,color:'#88e315',marginTop:40}}>FIT</Text>
    </View>
      <View style={styles.icony}>
         <TouchableOpacity style={styles.submitButtonTextone}
              onPress={()=>this.props.navigation.navigate('Diet')}>
    <Icon  name="utensils" size={35} color='#88e315' />
     </TouchableOpacity> 
      </View>
    </View>
</View>


 
     <View style={{ flex: 1 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
                
             <Card style={{backgroundColor:'red'}} >
            
            <Text style={{fontSize:25,color:'#24465c',fontWeight:'bold' , fontStyle:'italic' , textAlign:'center',marginBottom:10}}>{item.name} </Text>
             <View style={{flex:1 , flexDirection:'row',padding:10,marginLeft:10}}>
            <Text style={{flex:1,color:'#24465c',fontSize:15,fontStyle:'italic',fontWeight:'bold'}}>Current weight {item.weight} kg</Text>
            </View>
            <View style={{flex:1 , flexDirection:'row',padding:10,marginLeft:10}}>
            <Text style={{flex:1,color:'#24465c',fontSize:15,fontStyle:'italic',fontWeight:'bold'}}>{item.message} </Text>
            </View>
             <View style={{flex:1 , flexDirection:'row',padding:10,marginLeft:10}}>
            <Text style={{flex:1,color:'#24465c',fontSize:15,fontStyle:'italic',fontWeight:'bold'}}>Body Fat %{item.yagOrani} </Text>
            </View>
             <View style={{flex:1 , flexDirection:'row',padding:10,marginLeft:10}}>
            <Text style={{flex:1,color:'#24465c',fontSize:15,fontStyle:'italic',fontWeight:'bold'}}>Ideal Weight {item.dealweight} </Text>
            </View>
             <View style={{flex:1 , flexDirection:'row',padding:10,marginLeft:10}}>
            <Text style={{flex:1,color:'#24465c',fontSize:15,fontStyle:'italic',fontWeight:'bold'}}>Body mass index {item.bm}</Text>
            </View>
             <View style={{flex:1 , flexDirection:'row',padding:10,marginLeft:10}}>
            <Text style={{flex:1,color:'#24465c',fontSize:15,fontStyle:'italic',fontWeight:'bold'}}>Minimum need calorie is {item.bmr} cal/day</Text>
            </View>
            <View style={{flex:1 , flexDirection:'row',padding:10,marginLeft:10}}>
            <Text style={{flex:1,color:'#24465c',fontSize:15,fontStyle:'italic',fontWeight:'bold'}}>{item.messagetwo}</Text>
            </View>

             <View style={{flex:1 , flexDirection:'row',padding:10,marginLeft:10}}>
               <View style={styles.icona}>
               <Icon name="shoe-prints" size={25} color='#ffd700' />   
               </View>
            <Text style={{flex:1,color:'#32cd32',fontSize:15,fontStyle:'italic',fontWeight:'bold'}}>
            {item.name} Don't forget 8000 steps should throw a day for your health
            </Text>

              </View>
             <View style={{flex:1 , flexDirection:'row',padding:10,marginLeft:10}}>
                <View style={styles.iconb}>
               <Icon name="tint" size={25} color='#1e90ff' />   
               </View>
              <Text style={{flex:1,color:'#32cd32',fontSize:15,fontStyle:'italic',fontWeight:'bold'}}>
             And  hand You should drink 8 glasses of water  for your healt 
            </Text>
            </View>

            
            <View style={styles.sideBysideone}>

                  <TouchableOpacity style={styles.submitButtonTextone}
                   onPress={()=>this.props.navigation.navigate('Login')}>
              <Icon name="sign-out-alt" size={20} color='#88e315' /> 
              <Text style={{textAlign:'center',marginTop:0,marginLeft:0}}>Logout</Text> 
              </TouchableOpacity>
      
             
               <TouchableOpacity style={styles.submitButtonTextone}
                   onPress={()=>this.props.navigation.navigate('Cinsiyet')}>
              <Icon name="plus-circle" size={50} color='#24465c' /> 
              <Text style={{textAlign:'center',marginTop:0,marginLeft:0}}>New</Text> 
              </TouchableOpacity>

         <TouchableOpacity style={styles.submitButtonTextone}
                 onPress={()=>this.deletePost(item._id)}>
              <Icon name="trash-alt" size={20} color='red' /> 
              <Text style={{textAlign:'center',marginTop:0,marginLeft:0}}>Delete</Text> 
              </TouchableOpacity>

      

              </View>


            </Card>

         


          )}  
        />
      )}
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
  },
  sideByside:{
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
  marginBottom:20,
  marginTop:0,

  },
  sideBysideone:{
  flexDirection:'row',
  marginBottom:0,
  marginLeft:0,
   alignItems:'center',
  justifyContent:'center',
  marginTop:20,
  },
  header:{
    backgroundColor:'black',
    height:70,
    marginBottom:20

  },

 submitButtonTextone:{
   color: '#FFFFFF',
   backgroundColor: 'rgba(0,0,0,0)',
   width:60,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center',
    marginTop:0,
    marginLeft:20,
    marginRight:20

 },
 middle:{
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',

 },

 iconx:{
alignItems:'center',
justifyContent:'center',
marginLeft:0,
marginRight:40

 },
  icony:{
alignItems:'center',
justifyContent:'center',
marginLeft:40,
marginRight:0

 },

 icona:{
alignItems:'center',
justifyContent:'center',
marginRight:5
 },
 iconb:{
  alignItems:'center',
justifyContent:'center',
marginRight:15,
marginLeft:5
 }

})