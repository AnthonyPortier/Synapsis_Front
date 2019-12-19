import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './1_landingPage/LandingPage';
import RegisterPage from './2_registerPage/RegisterPage';
import EditProfile from './3_editProfile/EditProfile'
import ProfilePage from './4_profilePage/ProfilePage';



const Router =()=>{
    return(
        <div>
                <Switch>                    
                    <Route exact path='/' component={RegisterPage}/>
                    <Route exact path='/landingPage' component={LandingPage}/>
                    <Route exact path='/editProfile' component={EditProfile}/>
                    <Route exact path='/profilePage' component={ProfilePage}/>
                </Switch>
        </div>
    )
}

export default Router