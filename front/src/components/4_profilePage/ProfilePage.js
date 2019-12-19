import React,{useState} from 'react'
import NavBar from '../6_navBar/NavBar'


const ProfilPage = ()=>{


    return(
        <div>
            <NavBar/>
            <div className='section_presentation'>
                <img src='https://img.over-blog-kiwi.com/3/01/95/52/20190211/ob_ddf56d_test-homme-profile-face-2.jpg '/>
                <h1>Name</h1>
                <h2>Joueur</h2>
                <p>Montpellier Herault Sport Club</p>
                <div className='section_presentation_numbers_relation'>
                    <p>578 relations</p>
                </div>
            </div>

            <div className='section_fiche_sportive'>
                <div>
                   <h2>FICHE SPORTIVE</h2>
                <bution>clic</bution> 
                </div>
                <p>Catégorie:U17</p>
                <p>Date de naissance : 19/01/1998</p>
                <p>Lieu de naissance: Toulon (France)</p>
                <p>Taille: 175 cm</p>
                <p>Poids: 80 Kg</p>
                <p>Pied fort : Droite</p>
            </div>

            <div className='section_parcours_sportif' >
                <div>
                    <h2>PARCOURS SPORTIF</h2>
                </div>
                <div>
                    <img src='https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687' />
                    <div>
                        <h2>Montpellier Herault Sport Club</h2>
                        <p>Milieu de terrain</p>
                        <div>
                            <p>U17 Nationaux</p>
                            <p>Saison 2014-2015</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section_palmares'>
                
                <div>
                    <p>Saison 2014-2015 : </p>
                    <div>
                        <p>Vice-Champion de France</p>
                        <p>Vainqueur de la coupe du Languedoc-Roussillon</p>
                    </div>
                </div>
                <div>
                    <p>Saison 2014-2015 : </p>
                    <div>
                        <p>Vice-Champion de France</p>
                        <p>Vainqueur de la coupe du Languedoc-Roussillon</p>
                    </div>
                </div>
                <div>
                    <p>Saison 2014-2015 : </p>
                    <div>
                        <p>Vice-Champion de France</p>
                        <p>Vainqueur de la coupe du Languedoc-Roussillon</p>
                    </div>
                </div>
                <div>
                    <p>Saison 2014-2015 : </p>
                    <div>
                        <p>Vice-Champion de France</p>
                        <p>Vainqueur de la coupe du Languedoc-Roussillon</p>
                    </div>
                </div>
            </div>

            <div className='section_distinctions_personnelles'>

                <div>
                    <h2>DISTINCTIONS PERSONNELLES</h2>
                </div>
                <div>
                    <p>Saison 2012 - 2013</p>
                    <div>
                        <p>Section Ligue</p>
                    </div>
                </div>
                <div>
                    <p>Saison 2012 - 2013</p>
                    <div>
                        <p>Section Ligue</p>
                    </div>
                </div>
                <div>
                    <p>Saison 2012 - 2013</p>
                    <div>
                        <p>Section Ligue</p>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h2>CENTRES D'INTERET</h2>
                </div>
                <div>
                    <p>
                        #football #realmadrid #talent #barca
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ProfilPage;