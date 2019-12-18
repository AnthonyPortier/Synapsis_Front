import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './1_landingPage/LandingPage';
import RegisterPage from './2_registerPage/RegisterPage';
import EditProfil from './3_editProfile/EditProfil'
import ProfilPage from './4_profilePage/ProfilPage';



const Router =()=>{
    return(
        <div>
                <Switch>                    
                    <Route exact path='/' component={RegisterPage}/>
                    <Route exact path='/landingPage' component={LandingPage}/>
                    <Route exact path='/editProfil' component={EditProfil}/>
                    <Route exact path='/profilPage' component={ProfilPage}/>
                </Switch>
        </div>
    )
}

export default Router