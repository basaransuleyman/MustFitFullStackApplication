const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const requireToken = require('../middleware/requireToken')
const Post = mongoose.model("Post")


/*
Tüm postları getirme
router.get('/allpost',requireToken,(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
    
})
*/


router.delete('/deletepost/:postId',requireToken,(req,res)=>{
    Post.findOne({_id:req.params.postId})
    .populate("postedBy","_id")
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        if(post.postedBy._id.toString() === req.user._id.toString()){
              post.remove()
              .then(result=>{
                  res.json(result)
              }).catch(err=>{
                  console.log(err)
              })
        }
    })
})



router.get('/mypost',requireToken,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("PostedBy","_id name")
    .then((mypost)=>{
        res.json({mypost})
    }).catch(err=>{
        console.log(err)
    })
    
})


function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}



//bm : vücut kitle endeksi 
//bmr : bazal metebolzima hızı






router.post('/createpostforwoman',requireToken,(req,res)=>{
	const{name,age,height,weight,neck,belly,hip,selected,choices} = req.body
	
	if(!name || !age || !height || !weight || !neck || !belly ){
		return res.status(422).json({error:"Please add all the fields"})
	}
 var yagOrani=0;
 var wn = 0;
 var dealweight= 0;
 var bmr = 0;
 var koruma1 = 0;
 var koruma2 = 0;
 var koruma3 = 0;
 var koruma4 = 0;
 var koruma5 = 0;
 var alma1 = 0;
 var alma2 = 0;
 var alma3 = 0;
 var alma4 = 0;
 var alma5 = 0;
 var verme1 = 0;
 var verme2 = 0;
 var verme3 = 0;
 var verme4 = 0;
 var verme5 = 0;
 var message = " ";
 var messagetwo =" ";

 if((height>=100 && height<=230) || (neck>=15 && neck<=70) || (belly>=30 && belly<=250) || (hip>=30 && hip<=250)) {

 	 wnh = ( hip - 0 ) + ( belly - 0 ) - neck ;
 	 yagOrani=  Math.round(495/(1.29579  - 0.35004*getBaseLog(10,wnh) + 0.22100*getBaseLog(10,height)) - 450) 
 	 bm =  Math.round((10000*weight)/(height*height))
	 dealweight=  Math.round((2.3*((height*0.39370079)-60) + 45.5))
	 bmr =   Math.round(((10*weight)+(6.25*height)-(5*age)  - 161))
	 koruma1 =  Math.round(1.2*bmr)
	 koruma2 =  Math.round(1.375*bmr)
	 koruma3 =  Math.round(1.55*bmr)
	 koruma4 =  Math.round(1.725*bmr)
	 koruma5 =  Math.round(1.9*bmr)
	 alma1 =  Math.round(1.32*bmr)
	 alma2 =  Math.round(1.512*bmr) 
	 alma3 =  Math.round(1.704*bmr)
	 alma4 =  Math.round(1.897*bmr)
	 alma5 =  Math.round(2.090*bmr)
	 verme1 = bmr 
	 verme2 =  Math.round(1.145*bmr)
	 verme3 =  Math.round(1.291*bmr)
	 verme4 =  Math.round(1.437*bmr)
	 verme5 =  Math.round(1.583*bmr)

 	 if(yagOrani>=10 && yagOrani<=13){
 	 	message = "Body fat is Essential for life "
 	 }
 	 else if(yagOrani>=14 && yagOrani<=20){
 	 	message = "Body fat is Athletes "
 	 }
 	 else if(yagOrani>=21 && yagOrani<=24){
 	 	message = "Body fat is People in shape "
 	 }
 	 else if(yagOrani>=25 && yagOrani<=31){
 	 	message = "Body fat is Normal "
 	 }
 	 else if(yagOrani>=32){
 	 	message = "Body fat is Obese "
 	 }
 	 else{
 	 	message="Body fat is Wrong body fat"
 	}



 	 

 	  if(selected==="key0" && choices==="choice0")
 	 {		
      messagetwo= "To lose weight need " + verme1 + " cal/day  " 
 	 }	
 	 else if(selected==="key0" && choices==="choice1")
 	 {
 	  messagetwo=  "To protect  weight need" + koruma1 + " cal/day " 
 	 }
 	 else if(selected==="key0"  && choices==="choice1") 
 	 {
 	  messagetwo=  "To gain weight need " + alma1 + " cal/day " 
 	 }
 	 else if(selected==="key1" && choices==="choice0") 
 	 {
 	  messagetwo=  "To lose weight need " + verme2 + " cal/day " 
 	 }
 	  else if(selected==="key1"  && choices==="choice1") 
 	 {
 	  messagetwo=  "To protect weight need " + koruma2 + " cal/day " 
 	 }
 	  else if(selected==="key1" && choices==="choice2") 
 	 {
 	  messagetwo=  "To gain weight need " + alma2 + " cal/day " 
 	 }
 	  else if(selected==="key2"  && choices==="choice0") 
 	 {
 	  messagetwo=  "To lose weight need " + verme3 + " cal/day " 
 	 }
 	  else if(selected==="key2"  && choices==="choice1") 
 	 {
 	  messagetwo=  "To lose weight need " + koruma3 + " cal/day " 
 	 }
 	  else if(selected==="key2"  && choices==="choice2") 
 	 {
 	  messagetwo=  "To lose weight need " + alma3 + " cal/day " 
 	 }
  	 else if(selected==="key3"  && choices==="choice0") 
 	 {
 	  messagetwo=  "To lose weight need " + verme4 + " cal/day " 
 	 }
 	  else if(selected==="key3"  && choices==="choice1") 
 	 {
 	  messagetwo=  "To protect weight need " + koruma4 + " cal/day " 
 	 }
 	  else if(selected==="key3" && choices==="choice2") 
 	 {
 	  messagetwo=  "To gain weight need " + alma4 + " cal/day " 
 	 }
	  	 else if(selected==="key4"  && choices==="choice0") 
 	 {
 	  messagetwo=  "To lose weight need " + verme5 + " cal/day " 
 	 }
 	  else if(selected==="key4" && choices==="choice1") 
 	 {
 	  messagetwo=  "To protect weight need " + koruma5 + " cal/day " 
 	 }
 	  else if(selected==="key4"  && choices==="choice2") 
 	 {
 	  messagetwo=  "To gain weight need " + alma5 + " cal/day " 
 	 }

 	 
  	 if(selected==="key0" && choices==="choice0")
 	 {		
      messageone= "Breakfast " + Math.round((verme1/3.332)) + " calories \n\n" + "Lunch " + (verme1/2.500) + " calories \n\n" + "Dinner " + (verme1/4.00) + " calories \n\n" + "Snack " + Math.round((verme1/19.92)) + " calories \n\n"
 	 }	
 	 else if(selected==="key0" && choices==="choice1")
 	 {
 	  messageone= "Breakfast " + Math.round((koruma1/3.332)) + " calories \n\n" + "Lunch " + (koruma1/2.500) + " calories \n\n" + "Dinner " + (koruma1/4.00) + " calories \n\n" + "Snack " + Math.round((koruma1/19.92)) + " calories \n\n"
 	 }
 	 else if(selected==="key0"  && choices==="choice1") 
 	 {
 	  messageone= "Breakfast " + Math.round((alma1/3.332)) + " calories \n\n" + "Lunch " + (alma1/2.500) + " calories \n\n" + "Dinner " + (alma1/4.00) + " calories \n\n" + "Snack " + Math.round((alma1/19.92)) + " calories \n\n" 
 	 }
 	 else if(selected==="key1" && choices==="choice0") 
 	 {
 	  messageone= "Breakfast " + Math.round((verme2/3.332)) + " calories \n\n" + "Lunch " + (verme2/2.500) + " calories \n\n" + "Dinner " + (verme2/4.00) + " calories \n\n" + "Snack " + Math.round((verme2/19.92)) + " calories \n\n"  
 	 }
 	  else if(selected==="key1"  && choices==="choice1") 
 	 {
 	  messageone= "Breakfast " + Math.round((koruma2/3.332)) + " calories \n\n" + "Lunch " + (koruma2/2.500) + " calories \n\n" + "Dinner " + (koruma2/4.00) + " calories \n\n" + "Snack " + Math.round((koruma2/19.92)) + " calories \n\n"  
 	 }
 	  else if(selected==="key1" && choices==="choice2") 
 	 {
 	  messageone= "Breakfast " + Math.round((alma2/3.332)) + " calories \n\n" + "Lunch " + (alma2/2.500) + " calories \n\n" + "Dinner " + (alma2/4.00) + " calories \n\n" + "Snack " + Math.round((alma2/19.92)) + " calories \n\n" 
 	 }
 	  else if(selected==="key2"  && choices==="choice0") 
 	 {
 	  messageone= "Breakfast " + Math.round((verme3/3.332)) + " calories \n\n" + "Lunch " + (verme3/2.500) + " calories \n\n" + "Dinner " + (verme3/4.00) + " calories \n\n" + "Snack " + Math.round((verme3/19.92)) + " calories \n\n"
 	 }
 	  else if(selected==="key2"  && choices==="choice1") 
 	 {
 	   messageone= "Breakfast " + Math.round((koruma3/3.332)) + " calories \n\n" + "Lunch " + (koruma3/2.500) + " calories \n\n" + "Dinner " + (koruma3/4.00) + " calories \n\n" + "Snack " + Math.round((koruma3/19.92)) + " calories \n\n"
 	 }
 	  else if(selected==="key2"  && choices==="choice2") 
 	 {
 	 messageone= "Breakfast " + Math.round((alma3/3.332)) + " calories \n\n" + "Lunch " + (alma3/2.500) + " calories \n\n" + "Dinner " + (alma3/4.00) + " calories \n\n" + "Snack " + Math.round((alma3/19.92)) + " calories \n\n" 
 	 }
  	 else if(selected==="key3"  && choices==="choice0") 
 	 {
 	  messageone= "Breakfast " + Math.round((verme4/3.332)) + " calories \n\n" + "Lunch " + (verme4/2.500) + " calories \n\n" + "Dinner " + (verme4/4.00) + " calories \n\n" + "Snack " + Math.round((verme4/19.92)) + " calories \n\n" 
 	 }
 	  else if(selected==="key3"  && choices==="choice1") 
 	 {
 	   messageone= "Breakfast " + Math.round((koruma4/3.332)) + " calories \n\n" + "Lunch " + (koruma4/2.500) + " calories \n\n" + "Dinner " + (koruma4/4.00) + " calories \n\n" + "Snack " + Math.round((koruma4/19.92)) + " calories \n\n"
 	 }
 	  else if(selected==="key3" && choices==="choice2") 
 	 {
 	   messageone= "Breakfast " + Math.round((alma4/3.332)) + " calories \n\n" + "Lunch " + (alma4/2.500) + " calories \n\n" + "Dinner " + (alma4/4.00) + " calories \n\n" + "Snack " + Math.round((alma4/19.92)) + " calories \n\n"  
 	 }
	  	 else if(selected==="key4"  && choices==="choice0") 
 	 {
 	  messageone= "Breakfast " + Math.round((verme5/3.332)) + " calories \n\n" + "Lunch " + (verme5/2.500) + " calories \n\n" + "Dinner " + (verme5/4.00) + " calories \n\n" + "Snack " + Math.round((verme5/19.92)) + " calories \n\n"
 	 }
 	  else if(selected==="key4" && choices==="choice1") 
 	 {
 	  messageone= "Breakfast " + Math.round((koruma5/3.332)) + " calories \n\n" + "Lunch " + (koruma5/2.500) + " calories \n\n" + "Dinner " + (koruma5/4.00) + " calories \n\n" + "Snack " + Math.round((koruma5/19.92)) + " calories \n\n" 
 	 }
 	  else if(selected==="key4"  && choices==="choice2") 
 	 {
 	   messageone= "Breakfast " + Math.round((alma5/3.332)) + " calories \n\n" + "Lunch " + (alma5/2.500) + " calories \n\n" + "Dinner " + (alma5/4.00) + " calories \n\n" + "Snack " + Math.round((alma5/19.92)) + " calories \n\n" 
 	 }




 }

	req.user.password = undefined
	 const post = new Post({
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
	 	belly,
	 	hip,
	 	selected,
	 	choices,
	 	postedBy:req.user
	 })
	 post.save().then(result=>{
	 	res.json({post:result })


	 })
	 .catch(err=>{
	 	console.log(err)
	 })
})
module.exports = router 




   
  

router.post('/createpostforman',requireToken,(req,res)=>{
	const{name,age,height,weight,neck,belly,hip,selected,choices} = req.body
	if(!name || !age || !height || !weight || !neck || !belly ){
		return res.status(422).json({error:"Please add all the fields"})
	}
 var yagOrani=0;
 var wn = 0;
 var dealweight= 0;
 var bmr = 0;
 var koruma1 = 0;
 var koruma2 = 0;
 var koruma3 = 0;
 var koruma4 = 0;
 var koruma5 = 0;
 var alma1 = 0;
 var alma2 = 0;
 var alma3 = 0;
 var alma4 = 0;
 var alma5 = 0;
 var verme1 = 0;
 var verme2 = 0;
 var verme3 = 0;
 var verme4 = 0;
 var verme5 = 0;
 var message = " ";
 var messagetwo =" ";
 var messageone= "";


 if(height>=100 && height<=230 || neck>=15 && neck<=70 || belly>=30 && belly<=250)
  {
 	 wn = belly-neck;
 	 yagOrani= Math.round(495/(1.0324 - 0.19077*getBaseLog(10,wn) + 0.15456*getBaseLog(10,height)) - 450)
 	 bm = Math.round((10000*weight)/(height*height))
	 dealweight= Math.round((2.3*((height*0.39370079)-60) + 50))
	 bmr = Math.round(5+ (10*weight)+(6.25*height)-(5*age))
	 koruma1 = Math.round(1.2*bmr)
	 koruma2 = Math.round(1.375*bmr)
	 koruma3 = Math.round(1.55*bmr)
	 koruma4 = Math.round(1.725*bmr)
	 koruma5 = Math.round(1.9*bmr)
	 alma1 = Math.round(1.32*bmr)
	 alma2 = Math.round(1.512*bmr)
	 alma3 = Math.round(1.704*bmr)
	 alma4 = Math.round(1.897*bmr)
	 alma5 = Math.round(2.090*bmr)
	 verme1 = bmr 
	 verme2 = Math.round(1.145*bmr)
	 verme3 = Math.round(1.291*bmr)
	 verme4 = Math.round(1.437*bmr)
	 verme5 = Math.round(1.583*bmr)
 	 
 	 if(yagOrani>=2 && yagOrani<=5)
 	 {
 	 	message = "Body fat is Essential for life "
 	 }
 	 else if(yagOrani>=6 && yagOrani<=13)
 	 {
 	 	message = "Body fat is Athletes "
 	 }
 	 else if(yagOrani>=14 && yagOrani<=17)
 	 {
 	 	message = "Body fat is People in shape "
 	 }
 	 else if(yagOrani>=18 && yagOrani<=24)
 	 {
 	 	message = "Boody fat is Normal "
 	 }
 	 else if(yagOrani>=25){
 	 	message = "Body fat is Obese "
 	 }
 	 else
 	 {
 	 	message="Wrong body fat "

 	 }


 	  if(selected==="key0" && choices==="choice0")
 	 {		
      messagetwo= "To lose weight need " + verme1 + " cal/day  " 
 	 }	
 	 else if(selected==="key0" && choices==="choice1")
 	 {
 	  messagetwo=  "To protect  weight need" + koruma1 + " cal/day " 
 	 }
 	 else if(selected==="key0"  && choices==="choice1") 
 	 {
 	  messagetwo=  "To gain weight need " + alma1 + " cal/day " 
 	 }
 	 else if(selected==="key1" && choices==="choice0") 
 	 {
 	  messagetwo=  "To lose weight need " + verme2 + " cal/day " 
 	 }
 	  else if(selected==="key1"  && choices==="choice1") 
 	 {
 	  messagetwo=  "To protect weight need " + koruma2 + " cal/day " 
 	 }
 	  else if(selected==="key1" && choices==="choice2") 
 	 {
 	  messagetwo=  "To gain weight need " + alma2 + " cal/day " 
 	 }
 	  else if(selected==="key2"  && choices==="choice0") 
 	 {
 	  messagetwo=  "To lose weight need " + verme3 + " cal/day " 
 	 }
 	  else if(selected==="key2"  && choices==="choice1") 
 	 {
 	  messagetwo=  "To lose weight need " + koruma3 + " cal/day " 
 	 }
 	  else if(selected==="key2"  && choices==="choice2") 
 	 {
 	  messagetwo=  "To lose weight need " + alma3 + " cal/day " 
 	 }
  	 else if(selected==="key3"  && choices==="choice0") 
 	 {
 	  messagetwo=  "To lose weight need " + verme4 + " cal/day " 
 	 }
 	  else if(selected==="key3"  && choices==="choice1") 
 	 {
 	  messagetwo=  "To protect weight need " + koruma4 + " cal/day " 
 	 }
 	  else if(selected==="key3" && choices==="choice2") 
 	 {
 	  messagetwo=  "To gain weight need " + alma4 + " cal/day " 
 	 }
	  	 else if(selected==="key4"  && choices==="choice0") 
 	 {
 	  messagetwo=  "To lose weight need " + verme5 + " cal/day " 
 	 }
 	  else if(selected==="key4" && choices==="choice1") 
 	 {
 	  messagetwo=  "To protect weight need " + koruma5 + " cal/day " 
 	 }
 	  else if(selected==="key4"  && choices==="choice2") 
 	 {
 	  messagetwo=  "To gain weight need " + alma5 + " cal/day " 
 	 }


  	  if(selected==="key0" && choices==="choice0")
 	 {		
      messageone= "Breakfast " + Math.round((verme1/3.332)) + " calories \n\n" + "Lunch " + (verme1/2.500) + " calories \n\n" + "Dinner " + (verme1/4.00) + " calories \n\n" + "Snack " + Math.round((verme1/19.92)) + " calories \n\n"
 	 }	
 	 else if(selected==="key0" && choices==="choice1")
 	 {
 	  messageone= "Breakfast " + Math.round((koruma1/3.332)) + " calories \n\n" + "Lunch " + (koruma1/2.500) + " calories \n\n" + "Dinner " + (koruma1/4.00) + " calories \n\n" + "Snack " + Math.round((koruma1/19.92)) + " calories \n\n"
 	 }
 	 else if(selected==="key0"  && choices==="choice1") 
 	 {
 	  messageone= "Breakfast " + Math.round((alma1/3.332)) + " calories \n\n" + "Lunch " + (alma1/2.500) + " calories \n\n" + "Dinner " + (alma1/4.00) + " calories \n\n" + "Snack " + Math.round((alma1/19.92)) + " calories \n\n" 
 	 }
 	 else if(selected==="key1" && choices==="choice0") 
 	 {
 	  messageone= "Breakfast " + Math.round((verme2/3.332)) + " calories \n\n" + "Lunch " + (verme2/2.500) + " calories \n\n" + "Dinner " + (verme2/4.00) + " calories \n\n" + "Snack " + Math.round((verme2/19.92)) + " calories \n\n"  
 	 }
 	  else if(selected==="key1"  && choices==="choice1") 
 	 {
 	  messageone= "Breakfast " + Math.round((koruma2/3.332)) + " calories \n\n" + "Lunch " + (koruma2/2.500) + " calories \n\n" + "Dinner " + (koruma2/4.00) + " calories \n\n" + "Snack " + Math.round((koruma2/19.92)) + " calories \n\n"  
 	 }
 	  else if(selected==="key1" && choices==="choice2") 
 	 {
 	  messageone= "Breakfast " + Math.round((alma2/3.332)) + " calories \n\n" + "Lunch " + (alma2/2.500) + " calories \n\n" + "Dinner " + (alma2/4.00) + " calories \n\n" + "Snack " + Math.round((alma2/19.92)) + " calories \n\n" 
 	 }
 	  else if(selected==="key2"  && choices==="choice0") 
 	 {
 	  messageone= "Breakfast " + Math.round((verme3/3.332)) + " calories \n\n" + "Lunch " + (verme3/2.500) + " calories \n\n" + "Dinner " + (verme3/4.00) + " calories \n\n" + "Snack " + Math.round((verme3/19.92)) + " calories \n\n"
 	 }
 	  else if(selected==="key2"  && choices==="choice1") 
 	 {
 	   messageone= "Breakfast " + Math.round((koruma3/3.332)) + " calories \n\n" + "Lunch " + (koruma3/2.500) + " calories \n\n" + "Dinner " + (koruma3/4.00) + " calories \n\n" + "Snack " + Math.round((koruma3/19.92)) + " calories \n\n"
 	 }
 	  else if(selected==="key2"  && choices==="choice2") 
 	 {
 	 messageone= "Breakfast " + Math.round((alma3/3.332)) + " calories \n\n" + "Lunch " + (alma3/2.500) + " calories \n\n" + "Dinner " + (alma3/4.00) + " calories \n\n" + "Snack " + Math.round((alma3/19.92)) + " calories \n\n" 
 	 }
  	 else if(selected==="key3"  && choices==="choice0") 
 	 {
 	  messageone= "Breakfast " + Math.round((verme4/3.332)) + " calories \n\n" + "Lunch " + (verme4/2.500) + " calories \n\n" + "Dinner " + (verme4/4.00) + " calories \n\n" + "Snack " + Math.round((verme4/19.92)) + " calories \n\n" 
 	 }
 	  else if(selected==="key3"  && choices==="choice1") 
 	 {
 	   messageone= "Breakfast " + Math.round((koruma4/3.332)) + " calories \n\n" + "Lunch " + (koruma4/2.500) + " calories \n\n" + "Dinner " + (koruma4/4.00) + " calories \n\n" + "Snack " + Math.round((koruma4/19.92)) + " calories \n\n"
 	 }
 	  else if(selected==="key3" && choices==="choice2") 
 	 {
 	   messageone= "Breakfast " + Math.round((alma4/3.332)) + " calories \n\n" + "Lunch " + (alma4/2.500) + " calories \n\n" + "Dinner " + (alma4/4.00) + " calories \n\n" + "Snack " + Math.round((alma4/19.92)) + " calories \n\n"  
 	 }
	  	 else if(selected==="key4"  && choices==="choice0") 
 	 {
 	  messageone= "Breakfast " + Math.round((verme5/3.332)) + " calories \n\n" + "Lunch " + (verme5/2.500) + " calories \n\n" + "Dinner " + (verme5/4.00) + " calories \n\n" + "Snack " + Math.round((verme5/19.92)) + " calories \n\n"
 	 }
 	  else if(selected==="key4" && choices==="choice1") 
 	 {
 	  messageone= "Breakfast " + Math.round((koruma5/3.332)) + " calories \n\n" + "Lunch " + (koruma5/2.500) + " calories \n\n" + "Dinner " + (koruma5/4.00) + " calories \n\n" + "Snack " + Math.round((koruma5/19.92)) + " calories \n\n" 
 	 }
 	  else if(selected==="key4"  && choices==="choice2") 
 	 {
 	   messageone= "Breakfast " + Math.round((alma5/3.332)) + " calories \n\n" + "Lunch " + (alma5/2.500) + " calories \n\n" + "Dinner " + (alma5/4.00) + " calories \n\n" + "Snack " + Math.round((alma5/19.92)) + " calories \n\n" 
 	 }



 }

	req.user.password = undefined
	 const post = new Post({
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
	 	belly,
	 	hip,
	 	selected,
	 	choices,
	 	postedBy:req.user
	 })
	 post.save().then(result=>{
	 	res.json({post:result })


	 })
	 .catch(err=>{
	 	console.log(err)
	 })
})

module.exports = router 




   
  
