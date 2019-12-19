import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './1_landingPage/LandingPage';
import RegisterPage from './2_registerPage/RegisterPage';
import ProfilePage from './4_profilePage/ProfilePage';
import ModalClient from './3_profileModalsUpdate/ModalsUpdateClients';


const Router = () => {
    return (
        <div>
                <Switch>                    
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/register' component={RegisterPage}/>
                    <Route exact path='/profilePage' component={ProfilePage}/>
                    <Route exact path='/modal' component={ModalClient}/>


                </Switch>
        </div>
    )
}

export default Router