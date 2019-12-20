import React, { useState, useEffect } from 'react'
import NavBar from '../6_navBar/NavBar'
import './ProfilePage.css'
import axios from 'axios'
import ModalProfilPic from '../3_profileModalsUpdate/ModalUpdateProfilPic'
import ModalParcours from '../3_profileModalsUpdate/ModalUpdateParcoursSportif'
import ModalInfo from '../3_profileModalsUpdate/ModalUpdateInfo'
import ModalPalmares from '../3_profileModalsUpdate/ModalUpdatePalmares'
import ModalDistinction from '../3_profileModalsUpdate/ModalUpdateDistinctionsPersonnelles'
import ModalClient from '../3_profileModalsUpdate/ModalsUpdateClients'

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
        axios.get(`http://localhost:5000/users/1`)
            .then(res => setIdUser(res.data))
            .catch((err) => console.log(err))
    }
   
    useEffect(() => {
        fetchDataHistory()
    }, [])
    //fetch de la data des history
    const fetchDataHistory = () => {
        axios.get(`http://localhost:5000/history`)
            .then(res => sethistory(res.data))
            .catch((err) => console.log(err))
    }
   
    useEffect(() => {
        fetchDataPalmares()
    }, [])
    //fetch de la data des palmares
    const fetchDataPalmares = () => {
        axios.get(`http://localhost:5000/palmares`)
            .then(res => setpalmares(res.data))
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        fetchDataDistinction()
    }, [])
    //fetch de la data des distinctions
    const fetchDataDistinction = () => {
        axios.get(`http://localhost:5000/distinctions`)
            .then(res => setDistinction(res.data))
            .catch((err) => console.log(err))
    }
   
    useEffect(() => {
        fetchDataClient()
    }, [])
    //fetch de la data des clients
    const fetchDataClient = () => {
        axios.get(`http://localhost:5000/clients`)
            .then(res => setClient(res.data))
            .catch((err) => console.log(err))
    }
    
  
        return (

            <div className="profile-container">

                <NavBar />

                <div className="profile-page-div">

                    <div className="profile-div">

                        <div className="baneer-profile"><img id="baneer-img" src="https://previews.123rf.com/images/matsiash/matsiash1008/matsiash100800021/7598053-vecteur-de-football-banni%C3%A8re-.jpg"></img></div>
                        <img className="profile-img" src="https://image.shutterstock.com/image-vector/man-avatar-profile-picture-vector-260nw-229692004.jpg"></img>
                        <div className="profile-info-div">
                            <div className="profile-button-modal"><ModalProfilPic /></div>
                            <p className="profile-name">Prénom NOM</p>
                            <p className="profile-role">Joueur</p>
                            <p className="profile-club">Club</p>

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
                            <p className="profile-field">Catégorie: U17</p>
                            <p className="profile-field">Date de naissance: 19/01/1998</p>
                            <p className="profile-field">Lieu de naissance: Toulon (France)</p>
                            <p className="profile-field">Taille: 175cm</p>
                            <p className="profile-field">Poids: Droit</p>
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
                                <p className="profile-field">Montpellier Herault Sport Club</p>
                                <p className="profile-field">Milieu de terrain</p>
                                <p className="profile-field" >U16 DH</p>
                                <p className="profile-field">Saison 2012-2013</p>
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
                                <p id="profile-field-bold">Saison 2014-2015 </p>
                                <p>Vice-champion de France</p>
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