import React from 'react';
import { Switch, Route,BrowserRouter } from 'react-router-dom';
import LandingPage from '../landingPage/LandingPage';
import RegisterPage from '../registerPage/RegisterPage';
import ProfilPage from '../profilPage/ProfilPage';
import SearchBar from '../searchBar/SearchBar';



const Router =()=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/registerPage' component={RegisterPage}/>
                    <Route exact path='/profilPage' component={ProfilPage}/>
                    <Route exact path='/searchBar' component={SearchBar}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router