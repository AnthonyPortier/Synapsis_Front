import React,{useState} from 'react'
import { Link } from 'react-router-dom';


const LandingPage = ()=>{
    
    const [afficherMdp, setAfficherMdp] = useState('password')

    return(
        <div>
            <h1>SYNAPSE</h1>
            <h2>Heureux de vous revoir !</h2>
            <p>Ne manquez pas votre prochaine opportunité ! Identifiez-vous et restez au courant de ce qui se passe dans un réseau.</p>
            
            <input placeholder="E-mail"
            id="email"
            name="email"
            // value={e.target.value}
            type="email"
            // onChange={}
            />

            <h3>Mot de passe</h3>
            <input placeholder="Mot de passe"
            id="Mot_de_passe"
            name="Mot_de_passe"
            // value={e.target.value}
            type={afficherMdp}
            // onChange={}
            />
            <p>Vous acceptez les conditions d'utilisation, la Politique de confidentialité et la Politique relative aux cookies de Synapse.</p>

            <button><Link to='/profilePage'>Accepter et s'inscrire</Link></button>
            <p>OU</p>
            <button>Continuer avec Facebook</button>
            <p>Déja inscrit ? <Link to='/landingPage'>S'identifier</Link></p>


        </div>
    )
}

export default LandingPage;