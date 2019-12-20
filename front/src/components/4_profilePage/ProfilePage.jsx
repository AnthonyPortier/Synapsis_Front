import React, { useState, useEffect } from 'react'
import NavBar from '../6_navBar/NavBar'
import './ProfilePage.css'
import axios from 'axios'
import ModalProfilPic from '../3_profileModalsUpdate/ModalUpdateProfilPic'
import ModalParcours from '../3_profileModalsUpdate/ModalUpdateParcoursSportif'
import ModalInfo from '../3_profileModalsUpdate/ModalUpdateInfo'
import ModalPalmares from '../3_profileModalsUpdate/ModalUpdatePalmares'
import ModalDistinction from '../3_profileModalsUpdate/ModalUpdateDistinctionsPersonnelles'

const ProfilePage = () => {

    
    //hooks pour get et update un user
    const [idUser, setIdUser] = useState([])
    

    //hooks pour get create et delete history
    const [history, sethistory] = useState([])
   
    //hooks pour get et update un palmares
    const [palmares, setpalmares] = useState([])
   
    //hooks pour get et update une distinction
    const [distinction, setDistinction] = useState([])
  
    //hooks pour get et update une client
    const [client, setClient] = useState([])
    

    useEffect(() => {
        fetchDataUser()
    }, [])
    //fetch de la data du user 
    const fetchDataUser = () => {
        axios.get(`http://synaps3.herokuapp.com/users/1`)
            .then(res => setIdUser(res.data))
            .catch((err) => console.log(err))
    }
   
    useEffect(() => {
        fetchDataHistory()
    }, [])
    //fetch de la data des history
    const fetchDataHistory = () => {
        axios.get(`http://synaps3.herokuapp.com/history`)
            .then(res => sethistory(res.data))
            .catch((err) => console.log(err))
    }
   
    useEffect(() => {
        fetchDataPalmares()
    }, [])
    //fetch de la data des palmares
    const fetchDataPalmares = () => {
        axios.get(`http://synaps3.herokuapp.com/palmares`)
            .then(res => setpalmares(res.data))
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        fetchDataDistinction()
    }, [])
    //fetch de la data des distinctions
    const fetchDataDistinction = () => {
        axios.get(`http://synaps3.herokuapp.com/distinctions`)
            .then(res => setDistinction(res.data))
            .catch((err) => console.log(err))
    }
   
    useEffect(() => {
        fetchDataClient()
    }, [])
    //fetch de la data des clients
    const fetchDataClient = () => {
        axios.get(`http://synaps3.herokuapp.com/clients`)
            .then(res => setClient(res.data))
            .catch((err) => console.log(err))
    }
    
  
        return (

            <>

            {idUser.role === "joueur" || "entrainement" ?

            <div className="profile-container">

                <NavBar />

                <div className="profile-page-div">

                    <div className="profile-div">

                        <div className="baneer-profile"><img id="baneer-img" src="https://previews.123rf.com/images/matsiash/matsiash1008/matsiash100800021/7598053-vecteur-de-football-banni%C3%A8re-.jpg"></img></div>
                        <img className="profile-img" src={idUser.profil_pic}></img>
                        <div className="profile-info-div">
                            <div className="profile-button-modal"><ModalProfilPic /></div>
                            <p className="profile-name">{idUser.firstname} {idUser.lastname}</p>
                            <p className="profile-role">{idUser.role === "joueur" ? Joueur : "entraineur" ? Entrainement : ""}</p>
                            <p className="profile-club">{idUser.actual_club}</p>

                        </div>
                        <div className="profile-count-relation-div">
                            <p className="relation-count">578 relations</p>

                        </div>
                    </div>

                    <div className="profile-div">
                        <div className="profile-title-div">
                            <p className="profile-title">Fiche sportive</p>
                            <div className="profile-button-modal">
                                <ModalInfo />
                            </div>
                        </div>
                        <div className="profile-fiche-sportive">
                            <p className="profile-field">Catégorie: {idUser.categorie}</p>
                            <p className="profile-field">Date de naissance: {idUser.birthday}</p>
                            <p className="profile-field">Lieu de naissance: {idUser.birthday_place}</p>
                            <p className="profile-field">Taille: {idUser.size}</p>
                            <p className="profile-field">Poids: {idUser.weight}</p>
                            <p className="profile-field">Pied fort : {idUser.foot}</p>
                        </div>
                    </div>

                    <div className="profile-div">
                        <div className="profile-title-div">
                            <p className="profile-title">Parcours sportif</p>
                            <div className="profile-button-modal">
                                <ModalParcours />
                            </div>
                        </div>
                        <div className="profile-parcours-sportif">
                            <div className="profile-div-club-map">
                                <p className="profile-field">{history.name}</p>
                                <p className="profile-field">{history.poste}</p>
                                <p className="profile-field" >{history.description}</p>
                                <p className="profile-field">{history.date}</p>
                            </div>
                        </div>

                    </div>

                    <div className="profile-div">
                        <div className="profile-title-div">
                            <p className="profile-title">Palmares</p>
                            <div className="profile-button-modal">
                                <ModalPalmares />
                            </div>
                        </div>
                        <div className="profile-palmares">
                            <div className="profile-div-palmares-map">
                                <p id="profile-field-bold">{palmares.name}</p>
                                <p>{palmares.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="profile-div">
                        <div className="profile-title-div">
                            <p className="profile-title">Distinctions personnelles</p>
                            <div className="profile-button-modal">
                                <ModalDistinction />
                            </div>
                        </div>
                        <div className="profile-distinctions">
                            <div className="profile-div-distinctions-map">
                                <p id="profile-field-bold">{distinction.name}</p>
                                <p>{distinction.description}</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            : idUser.role === "agent" ? 

                        <div className="profile-container">

                            <NavBar />

                            <div className="profile-page-div">

                                <div className="profile-div">

                                    <div className="baneer-profile"><img id="baneer-img" src="https://previews.123rf.com/images/matsiash/matsiash1008/matsiash100800021/7598053-vecteur-de-football-banni%C3%A8re-.jpg"></img></div>
                                    <img className="profile-img" src={idUser.profil_pic}></img>
                                    <div className="profile-info-div">
                                        <div className="profile-button-modal"><ModalProfilPic /></div>
                                        <p className="profile-name">{idUser.firstname} {idUser.lastname}</p>
                                        <p className="profile-role">{idUser.role}</p>
                                        <p className="profile-club">{idUser.actual_club}</p>

                                    </div>
                                    <div className="profile-count-relation-div">
                                        <p className="relation-count">100 relations</p>

                                    </div>
                                </div>  

                                <div className="profile-div">
                                        <div className="profile-title-div">
                                        <p className="profile-title">Présentation</p>
                                    </div>
                                    <div className="profile-fiche-sportive">
                                        <p className="profile-field">Date de naissance: {idUser.birthday}</p>
                                        <p className="profile-field">Lieu de naissance: {idUser.birthday_place}</p>
                                        <p className="profile-field">Années d'expérience: 20 ans</p>
                                        <p className="profile-field">Agent Fifa</p>
                                        <p className="profile-field">Région de Lisbonne, PORTUGAL</p>
                                    </div>
                               </div>

                                <div className="profile-div">
                                    <div className="profile-title-div">
                                        <p className="profile-title">Client</p>
                                    </div>
                                    <div className="profile-fiche-sportive">
                                        <p className="profile-field">Christiano RONALDO</p>
                                        <p className="profile-field">Lionel MESSI</p>
                                        <p className="profile-field">Rida LAMRINI</p>
                                    </div>
                                </div>

                                <div className="profile-div">
                                    <div className="profile-title-div">
                                        <p className="profile-title">Distinctions personnelles</p>
                                        <div className="profile-button-modal">
                                            <ModalDistinction />
                                        </div>
                                    </div>
                                    <div className="profile-distinctions">
                                        <div className="profile-div-distinctions-map">
                                            <p id="profile-field-bold">{distinction.name}</p>
                                            <p>{distinction.description}</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
            
            : ""

            } 

            </>
        )

}

export default ProfilePage