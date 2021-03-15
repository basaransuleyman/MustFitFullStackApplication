import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
  Dimensions,
  ActivityIndicator
  
} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../pages/Logo';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AnimatedLoader from "react-native-animated-loader";



export default class Diet extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
     data:[],
     isLoading:true,
     visible: false,
     heightArr: [1,1,1],
     HeadTable: ['Food ', 'Serving ', 'Calories '],
     HeadTable1: ['Fruit '],
     HeadTable2: ['Vegetables'],
     HeadTable3: ['Proteins '],
     HeadTable4: ['Common Meals/Snacks '],
     HeadTable5: ['Beverages/Dairy '],
     DataTable1: [
        ['Apple ', '1 (4 oz)', '59'],
        ['Banana', '1 (6 oz)', '151'],
        ['Grapes', '1 cup', '100'],
        ['Orange', '1 (4 oz)', '53'],
        ['Pear', '1 (5 oz)', '82'],
        ['Peach ', '1 (6 oz)', '67'],
        ['Pineapple', '1 cup', '82'],
        ['Strawberry', '1 cup', '53'],
        ['Watermelon', '1 cup', '50'],
      ],
       DataTable2: [
        ['Asparagus ', '1 cup', '27'],
        ['Broccoli', '1 cup', '45'],
        ['Carrots', '1 cup', '50'],
        ['Cucumber', '4 oz', '17'],
        ['Eggplant', '1 cup', '35'],
        ['Lettuce ', '1 cup', '5'],
        ['Tomato', '1 cup', '22'],
  
      ],
       DataTable3: [
        ['Beef cooked', '2 oz', '142'],
        ['Chicken, cooked', '2 oz', '136'],
        ['Tofu', '4 oz', '86'],
        ['Egg', '1 large', '78'],
        ['Fish, cooked', '2 oz', '136'],
        ['Pork, cooked ', '2 oz', '137'],
        ['Shrimp, cooked', '2 oz', '56'],
      ],
       DataTable4: [
        ['Bread, white', '1 slice (1 oz)', '75'],
        ['Butter', '1 tablespoon', '102'],
        ['Caesar salad', '3 cups', '481'],
        ['Cheeseburger', '1 sandwich', '285'],
        ['Hamburger', '1 sandwich', '250'],
        ['Dark Chocolate', '1 oz', '155'],
        ['Corn', '1 cup', '132'],
        ['Pizza', '1 slice (14")', '285'],
        ['Potato', '6 oz.', '130'],
        ['Rice', '1 cup cooked', '206'],
        ['Sandwich', '1 (6" Subway)', '200'],
      ],
       DataTable5: [
        ['Beer ', '1 can', '154'],
        ['Coca-Cola', '1 can', '150'],
        ['Diet Coke', '1 can', '0'],
        ['Milk', '1 cup', '146'],
        ['Orange Juice', '1 cup', '111'],
        ['Apple cider ', '1 cup', '117'],
        ['Yogurt ', '1 cup', '154'],
      ]


  
    }
     
  }

componentDidMount(){
    this.getData();

    this.setState({
      isLoading: false,
       
    });
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
            } catch (e) {
              console.log("error hai",e)
                  

            }

    })
   
    }


  render(){
  const isLoading=this.state.isLoading;
  const data = this.state.data;
  const HeadTable = this.state.HeadTable;
  const DataTable = this.state.DataTable;
  const state = this.state;
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

 
     <Card>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
                 
             <View>     
             <Text style={{fontSize:18,color:'#24465c',marginTop:0,fontStyle:'italic',fontWeight:'bold'}}>Sample meal program in 1 day for you {item.name}  </Text>  
             <Text> </Text>   



            <View style={{flex:1 , backgroundColor:'white', flexDirection:'row',padding:0,marginLeft:10}}>
             <View > 
            <Icon  style={{marginBottom:20}} name="coffee" size={15}  color='#ffd700' />  
            
            <Icon  style={{marginBottom:20}}  name="hamburger" size={15} color='#1e90ff' />  
            
               
            <Icon  style={{marginBottom:20}}  name="utensils" size={15} color='#dc143c' /> 
           
                   
            <Icon    name="cookie-bite" size={15} color='#7fff00' /> 
            </View> 

            <View style={{flex:1 , flexDirection:'row',padding:0,marginLeft:10}}>
            <Text style={{flex:1,color:'#24465c',fontSize:15,fontStyle:'italic',fontWeight:'bold'}}>{item.messageone}</Text>
            </View>
            </View>
               </View>
          )}  
        />
      )}
    </Card>

 <ScrollView style={styles.scrollView}>
  <Text style={{fontSize:20,color:'#24465c',backgroundColor:'white', marginTop:10,textAlign:'center',fontStyle:'italic'}}>Calories in Common Foods</Text>

<View style={styles.table}>
    <ScrollView style={styles.scrollView}>
      <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
        <Row  heightArr={state.heightArr} data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
        <Row  heightArr={state.heightArr} data={state.HeadTable1} style={styles.HeadStyle} textStyle={styles.TableText}/>
        <Rows data={state.DataTable1} textStyle={styles.TableText}/>
        <Row  heightArr={state.heightArr} data={state.HeadTable2} style={styles.HeadStyle} textStyle={styles.TableText}/>
        <Rows data={state.DataTable2} textStyle={styles.TableText}/>
        <Row  heightArr={state.heightArr} data={state.HeadTable3} style={styles.HeadStyle} textStyle={styles.TableText}/>
        <Rows data={state.DataTable3} textStyle={styles.TableText}/>
        <Row  heightArr={state.heightArr} data={state.HeadTable4} style={styles.HeadStyle} textStyle={styles.TableText}/>
        <Rows data={state.DataTable4} textStyle={styles.TableText}/>
        <Row  heightArr={state.heightArr} data={state.HeadTable5} style={styles.HeadStyle} textStyle={styles.TableText}/>
        <Rows data={state.DataTable5} textStyle={styles.TableText}/>
      </Table>
      <Text>* 1 cup = ~250 milliliters, 1 table spoon = 14.2 gram</Text>
       </ScrollView>
</View>
            </ScrollView>
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

 middle:{
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',

 },

   header:{
    backgroundColor:'black',
    height:70,
     marginBottom:20
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
   sideByside:{
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
  marginBottom:20,
  marginTop:0,
  },
  submitButtonTextone:{
   color: '#FFFFFF',
   backgroundColor: 'rgba(0,0,0,0)',
   width:100,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center',
    marginTop:0,
 },
    table: { 
    flex: 1,
    padding: 18,
    paddingTop: 5,
    backgroundColor: 'white',
    marginTop:0,
    opacity:1,
    marginBottom:10,

  },
   scrollView:{
  marginHorizontal:0,
 },
  HeadStyle: { 
    height: 40,
    alignContent: "center",
    backgroundColor: '#88e315'
  },
  TableText: { 
   margin:0
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