import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  Platform,
  ImageBackground,
  KeyboardAvoidingView,

} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Header, Content, Picker, Form } from "native-base";
import Toast from 'react-native-toast-native';
import Logo from '../pages/Logo';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styletoast={backgroundColor: "red",width: 300,color: "#ffffff",fontSize: 12,lineHeight: 2,lines: 1,borderRadius: 15,fontWeight: "bold",yOffset: 40};
const stylesuccess ={backgroundColor: "green",width: 300,color: "#ffffff",fontSize: 12,lineHeight: 2,lines: 1,borderRadius: 15,fontWeight: "bold",yOffset: 40};

export default class BilgilerErkek extends Component {



 constructor(props) {
  super(props);
  this.state = {
  age:'',
  name:'',
  yagOrani:'',  
  message:'',
  messagetwo:'',
  messageone:'',
  bm:'',
  dealweight:'',
  bmr:'',
  height:'',
  weight:'',
  neck:'',
  hip:'0',
  belly:'',
  selected:'key1',
  choices:'choice0',
  };
  }




 onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }



 onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }


 onValuesChange(value: string) {
    this.setState({
      choices: value
    });
  }

  sumbitData = async ()=> {
   const token = await AsyncStorage.getItem("jwt")
   const {name, age,yagOrani,messagetwo,message,messageone,bm,dealweight,bmr,height, weight, neck,hip, belly,selected,choices} = this.state
   const {navigate} = this.props.navigation;

    fetch("https://must-fit-backend.herokuapp.com/createpostforman",{
       method:"POST",
       headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+ token
      },
      body:JSON.stringify({
    name,
    age,
    yagOrani,
    message,
    messagetwo,
    messageone,
    bm,
    dealweight,
    bmr,
    height,
    weight,
    neck,
    hip,
    belly,
    selected,
    choices
      })
    })
    .then(res=>res.json())
     .then(async (data)=>{
           try {     
               navigate('Splash');
             }
             catch (e) {
                console.log("error hai",e) 
                Toast.show('Fill in all fields correctly' ,Toast.LONG,Toast.TOP,styletoast);
             }

            })
  }



    render() {

   
        return (
 <ImageBackground 
  source={require('../../images/back.jpg')}
  style={{width:'100%' , height:'100%',  opacity: 0.9}}>

                  <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
                style= {styles.FlexGrowOne}>  


              <TouchableOpacity style={styles.buttonback}
             onPress={()=>this.props.navigation.navigate('Cinsiyet')}>
             <Text style={{   color: '#24465c',    fontWeight: 'bold',alignItems: 'center',fontSize: 25,transform: [{ rotate: '180deg' }]}}>></Text>
             </TouchableOpacity>

          

                <View style={styles.cheks}>  


                         


 <View style={styles.sideByside}>

  <Text style={{fontSize:20,color:'#24465c',marginTop:0,marginBottom:30,marginTop:0}}>MUST</Text>
  <Text style={{fontSize:20,color:'#88e315',marginTop:0,marginBottom:30,marginTop:0,}}>FIT</Text>
   <Text style={{fontSize:15,color:'white',marginTop:0,marginBottom:30,marginTop:0,marginLeft:20}}>INFORMATIONS </Text>
</View>

                <View style={styles.buttons}>
           
               
      
                    <View style={styles.middle}>
                <View style={styles.inputContainer}>
                 <TextInput style={styles.inputs}
                 placeholder="Your's name"
                 keyboardType="default"
                     maxLength={10}
                 autoCapitalize="characters"
                 underlineColorAndroid='transparent'
                 value={this.state.name}
                 onChangeText={val => this.onChangeText('name',val)}/>
                 </View>
                    </View>

                  <View style={styles.sideByside}>

                <View style={styles.inputContainer}>
                 <TextInput style={styles.inputs}
                 placeholder="Age"
                 keyboardType="numeric"
                     maxLength={2}
                 underlineColorAndroid='transparent'
                 value={this.state.age}
                 onChangeText={val => this.onChangeText('age',val)}/>
                 </View>


                 <View style={styles.inputContainer}>
                 <TextInput style={styles.inputs}
                 placeholder="Height(cm)"
                 keyboardType="numeric"
                   maxLength={3}
                 underlineColorAndroid='transparent'
                 value={this.state.height}
                 onChangeText={val => this.onChangeText('height',val)}/>
                 </View>

                     </View>



                  <View style={styles.sideByside}>

                 <View style={styles.inputContainer}>
                 <TextInput style={styles.inputs}
                 placeholder="Weight(kg)"
                   maxLength={3}
                 keyboardType="numeric"
                 underlineColorAndroid='transparent'
                 value={this.state.weight}
                 onChangeText={val => this.onChangeText('weight',val)}/>
                 </View>

             
                 


                 <View style={styles.inputContainer}>
                 <TextInput style={styles.inputs}
                 placeholder="Neck(cm)"
                   maxLength={3}
                 keyboardType="numeric"
                 underlineColorAndroid='transparent'
                 value={this.state.neck}
                 onChangeText={val => this.onChangeText('neck',val)}/>
                 </View>

                      </View>

                            <View style={styles.sideByside}>
                 <View style={styles.inputContainer}>
                 <TextInput style={styles.inputs}
                 placeholder="Waist(cm)"
                 keyboardType="numeric"
                   maxLength={3}
                 underlineColorAndroid='transparent'
                 value={this.state.belly}
                 onChangeText={val => this.onChangeText('belly',val)}/>
                 </View>

 
                 </View>


              <View style={styles.middle}>  
              <View style={styles.sideByside}>
              <Text style={styles.signUpTexttwo}>Select Activity Level      </Text>
              <TouchableOpacity style={styles.signUpTextthree}>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="0 day"  value="key0" />
              <Picker.Item label="1-2 days" value="key1" />
              <Picker.Item label="3-4 days" value="key2" />
              <Picker.Item label="5-6 days" value="key3" />
              <Picker.Item label="7 days" value="key4" />
            </Picker>
            </TouchableOpacity>
             </View>
             </View> 
             </View>

    <View style={styles.middle}>  
              <View style={styles.sideByside}>
              <Text style={styles.signUpTexttwo}>Select Goal,want to be </Text>
              <TouchableOpacity style={styles.signUpTextthree}>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.choices}
              onValueChange={this.onValuesChange.bind(this)}
            >
              <Picker.Item label="Lose Weight"  value="choice0" />
              <Picker.Item label="Protect Weight" value="choice1" />
              <Picker.Item label="Gain Weight" value="choice2" />
            </Picker>
            </TouchableOpacity>
             </View>
             </View> 


                  <View style={styles.sideByside}>
              <TouchableOpacity style={styles.signUpTextfour}
              onPress={this.sumbitData }>
             <Text style={styles.signUpTextone}>Create new</Text>
             </TouchableOpacity>
               </View>


                  <View style={styles.sideByside}>
              <TouchableOpacity style={styles.submitButtonTextone}
               onPress={()=>this.props.navigation.navigate('Profile')}>
             <Text style={styles.signUpTextone}>I have body info next</Text>
             </TouchableOpacity>
               </View>



            
              </View>
          </KeyboardAvoidingView>
</ImageBackground>

        );
    }

    
}


const styles = StyleSheet.create({


 cheks:{ 
  top:0,
 },
sideByside:{
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
},

  active:{
       backgroundColor:'white',
       color:'rgba(0, 0, 255, 1)',
       height:35,
  },  
 buttonback:{
   color: '#FFFFFF',
   alignItems: 'center',
   justifyContent: 'center',
   width:40,
   height:25,
   marginTop:10,


  },

  button:{
       borderRadius:90,
       width:100,
       height:40,
       marginLeft:20,
       marginRight:20,
       marginBottom:0,
       backgroundColor:'#FF5A54',
       //flex:1,
       padding:14,
       alignContent:'center',
  },

  submitButtonText:{
    color: '#FFFFFF',
   width:20,
   height:25,
   justifyContent: 'center',
   alignItems: 'center',
      top:-20,

 },



 texts:{
   
    color:'white',
    fontSize: 25,
    marginBottom:40,
    textAlign:'center',
    marginTop:0,
 },

 inputContainer: {
   borderBottomColor:  '#FF5A54',
   backgroundColor:'white',
   borderRadius:5,
   borderBottomWidth: 1,
   width:100,
   height:40,
   opacity:0.8,
   marginRight:35,
   marginBottom:10,
   flexDirection: 'row',
   alignItems:'center',
   marginLeft:35

 },





 inputs:{
   height:40,
   marginLeft:0,
   borderBottomColor: '#FFFFFF',
   flex:1,

  },

   submitButton: {
   backgroundColor: '#7a42f4',
   padding: 10,
   margin: 15,
   height: 60,
 },

 signUpTextthree:{
   color: '#FFFFFF',
   alignItems: 'center',
   justifyContent: 'center',
   borderBottomColor:  '#FF5A54',
   backgroundColor:'white',
   borderBottomWidth: 1,
   opacity:0.8,
   width:170,
   height:40,
   borderRadius:10,
   marginTop:5,
    

 },

 signUpTextfour:{
  color: '#FFFFFF',
   alignItems: 'center',
   justifyContent: 'center',
   color: '#FFFFFF',
   backgroundColor:'#24465c',
   width:170,
   height:45,
   borderRadius:10,
   marginTop:15,
    
    

 },
 signUpTextone:{
   color: '#FFFFFF',
   alignItems: 'center',
   fontSize: 16,
 },

 signUpTexttwo:{
    color: '#FFFFFF',
   alignItems: 'center',
   fontSize: 15,
   marginTop:5,
 },

 iconbutton:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    marginTop:0
 },

 middle:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',   
    marginTop:0
 },
 submitButtonTextone:{
  color: '#FFFFFF',
   width:170,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center',
   marginTop:0,
 },

})

