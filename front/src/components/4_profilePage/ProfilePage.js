import React, { useState } from 'react'
import NavBar from '../6_navBar/NavBar'
import './ProfilePage.css'


const ProfilePage = () => {


    return (

        <div className="profile-page">

            <NavBar />

            <div className="profile-div-80">

                <div className="profile-first-container">
                    <div className="baneer-profile">
                        <img className="baneer-img" src="https://previews.123rf.com/images/stockdeca/stockdeca1708/stockdeca170800021/85308521-ballon-de-football-sur-l-herbe-verte-banni%C3%A8re-illustration-de-rendu-3d.jpg"/>
                    </div>
                    <div className="div-info-head-profile">
                        <p>Rida LAMRINI</p>
                        <p>Joueur</p>
                        <p>Montpellier Herault Sport Club</p>
                    </div>
                    <div className="div-numberRelation-profile">
                        <p>500 Relations</p>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default ProfilePage;