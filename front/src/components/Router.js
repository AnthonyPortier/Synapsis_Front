import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './1_landingPage/LandingPage';
import RegisterPage from './2_registerPage/RegisterPage';
import ProfilePage from './4_profilePage/ProfilePage';
import Routes from './test/Routes'
import ModalParcours from './3_profileModalsUpdate/ModalUpdateParcoursSportif';
{/*import EditProfile from './3_editProfile/EditProfile'*/ }


const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={RegisterPage} />
                <Route exact path='/login' component={LandingPage} />
                {/*<Route exact path='/' component={EditProfile}/>*/}
                <Route exact path='/profile/:id' component={ProfilePage} />
                {/* Route pour tester les routes */}
                <Route exact path='/routes/:id' component={Routes} /> 
                <Route exact path='/modal' component={ModalParcours} /> 

            </Switch>
        </div>
    )
}

export default Router