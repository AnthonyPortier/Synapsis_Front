import React from 'react'
import NavBar from '..6_navBar/NavBar'

const ProfilePage = () => {
    return(
        <div className="profile-page-div">
            <Navbar/>
            <div className="profile-head-div">
                <div className="baneer-profile"><img></img></div>
                <div>
                    <p>Prénom NOM</p>
                    <p>Joueur</p>
                    <p>Club</p>

                </div>
                <div><p>578 relations</p></div>
            </div>



        </div>
    )

}