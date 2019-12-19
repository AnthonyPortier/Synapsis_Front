import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logoVert from '../../img/logoVert.png'
import './LandingPage.css'

const LandingPage = ()=>{
    
    const [afficherMdp, setAfficherMdp] = useState('password')

    return(
        <div className='LandingPage-full'>
            <img className='logoVert' src={logoVert} alt='logo Synapse'/>
            <h1 className='LandingPage-h1' >SYNAPSE</h1>
            <h2 className='LandingPage-h2' >Heureux de vous revoir !</h2>
            <p className='LandingPage-p' >Ne manquez pas votre prochaine opportunité ! Identifiez-vous et restez au courant de ce qui se passe dans un réseau.</p>
            <input className='LandingPage-input' placeholder="E-mail"
            id="email"
            name="email"
            // value={e.target.value}
            type="email"
            // onChange={}
            />
            <input className='LandingPage-input' placeholder="Mot de passe"
            id="Mot_de_passe"
            name="Mot_de_passe"
            // value={e.target.value}
            type={afficherMdp}
            // onChange={}
            />
            <Link  to='/profilePage'><button className='LandingPage-button'>s'inscrire</button></Link>
            <div className="register-already-subscribe">
                <button className="button-fb">Continuer avec Facebook</button>
                <p className="text-inscription">Nouveau sur Synapse ? <Link to ='/register'><span className='LandingPage-span'>S'identifer</span></Link></p>
            </div>
        </div>
    )
}

export default LandingPage;