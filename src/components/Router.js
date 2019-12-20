import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LandingPage from './1_landingPage/LandingPage';
import RegisterPage from './2_registerPage/RegisterPage';
import ProfilePage from './4_profilePage/ProfilePage';
import Routes from './test/Routes'


const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={RegisterPage} />
                <Route exact path='/login' component={LandingPage} />
                <Route exact path='/profilepage' component={ProfilePage} />
                <Route exact path='/routes/:id' component={Routes} />
                
            </Switch>
        </div>
    )
}

export default Router