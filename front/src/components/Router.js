import React from 'react';
import { Switch, Route,BrowserRouter } from 'react-router-dom';
import LandingPage from './1_landingPage/LandingPage';
import RegisterPage from './2_registerPage/RegisterPage';
import EditProfil from './3_editProfil/EditProfil'
import ProfilPage from './4_profilPage/ProfilPage';
import SearchBar from './5_searchBar/SearchBar';



const Router =()=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/registerPage' component={RegisterPage}/>
                    <Route exact path='/editProfil' component={EditProfil}/>
                    <Route exact path='/profilPage' component={ProfilPage}/>
                    <Route exact path='/searchBar' component={SearchBar}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router