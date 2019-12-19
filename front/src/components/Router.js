import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './1_landingPage/LandingPage';
import RegisterPage from './2_registerPage/RegisterPage';
import ProfilePage from './4_profilePage/ProfilePage';
import ModalProfilPic from './3_profileModalsUpdate/ModalsUpdateProfilPic';


const Router = () => {
    return (
        <div>
                <Switch>                    
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/register' component={RegisterPage}/>
                    <Route exact path='/profilePage' component={ProfilePage}/>
                    <Route exact path='/modal' component={ModalProfilPic}/>


                </Switch>
        </div>
    )
}

export default Router