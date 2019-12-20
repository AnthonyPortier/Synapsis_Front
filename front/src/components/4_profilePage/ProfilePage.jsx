import React from 'react'
import NavBar from '../6_navBar/NavBar'
import './ProfilePage.css'

const ProfilePage = () => {

    return (

        <div className="profile-container">

            <NavBar />

            <div className="profile-page-div">

                <div className="profile-div">
                    
                    <div className="baneer-profile"><img id="baneer-img" src="https://previews.123rf.com/images/matsiash/matsiash1008/matsiash100800021/7598053-vecteur-de-football-banni%C3%A8re-.jpg"></img></div>
                    <div className="profile-img-div"><img className="profile-img" src="https://image.shutterstock.com/image-vector/man-avatar-profile-picture-vector-260nw-229692004.jpg"></img></div>
                    <div className="profile-info-div">
                        <p className="profile-name">Prénom NOM</p>
                        <p className="profile-role">Joueur</p>
                        <p className="profile-club">Club</p>
                    </div>
                <div className="profile-count-relation-div"><p className="relation-count">578 relations</p></div>
                </div>

                <div className="profile-div">
                    <div className="profile-title-div"><p className="profile-title">Fiche sportive</p></div>
                    <div className="profile-fiche-sportive">
                        <p className="profile-field">Catégorie: U17</p>
                        <p className="profile-field">Date de naissance: 19/01/1998</p>
                        <p className="profile-field">Lieu de naissance: Toulon (France)</p>
                        <p className="profile-field">Taille: 175cm</p>
                        <p className="profile-field">Poids: Droit</p>
                    </div>
                </div>

                <div className="profile-div">
                    <div className="profile-title-div"><p className="profile-title">Parcours sportif</p></div>
                    <div className="profile-parcours-sportif">
                        <div className="profile-div-club-map">
                        <p className="profile-field">Montpellier Herault Sport Club</p>
                        <p className="profile-field">Milieu de terrain</p>
                        <p className="profile-field" >U16 DH</p>
                        <p className="profile-field">Saison 2012-2013</p>
                    </div>  
                </div>
                    
                </div>

                <div className="profile-div">
                    <div className="profile-title-div"><p className="profile-title">Palmares</p></div>
                    <div className="profile-palmares">
                        <div className="profile-div-palmares-map">
                            <p id="profile-field-bold">Saison 2014-2015 </p>
                            <p>Vice-champion de France</p>
                        </div>
                    </div>
                </div>

                <div className="profile-div">
                    <div className="profile-title-div"><p className="profile-title">Distinctions personnelles</p></div>
                    <div className="profile-distinctions">
                        <div className="profile-div-distinctions-map">
                            <p id="profile-field-bold">Saison 2012-2013 </p>
                            <p>Sélection Ligue Languedoc-Roussillon</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )

}

export default ProfilePage