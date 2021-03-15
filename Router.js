import React, { Component } from 'react';
import {
	createSwitchNavigator,
	createAppContainer,
}  from 'react-navigation';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import BilgilerErkek from './pages/BilgilerErkek';
import BilgilerKadın from './pages/BilgilerKadın';
import Cinsiyet from './pages/Cinsiyet';
import Profile from './pages/Profile';
import Diet from './pages/Diet';
import Splash from './pages/Splash';
import LogoSplash from './pages/LogoSplash';




const AppSwitchNavigator = createSwitchNavigator(

            {
             SignUp:{
             	screen:SignUp
             },
             Splash:{
                  screen:Splash
             },
             LogoSplash:{
                  screen:LogoSplash
             },
             BilgilerErkek:{
                 screen:BilgilerErkek
             },
             Profile:{
                  screen:Profile
             },
              BilgilerKadın:{
                 screen:BilgilerKadın
             },
            Cinsiyet:{
                  screen:Cinsiyet
            },  
            Diet:{
                  screen:Diet
            },
           Login:{
            	screen:Login
            }
           },
            {
               initialRouteName:"LogoSplash"
            }

	);

export default createAppContainer(AppSwitchNavigator);