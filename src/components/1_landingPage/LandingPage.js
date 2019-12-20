import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoVert from '../../img/logoVert.png'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './LandingPage.css'


const LandingPage = () => {
    let history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //const [afficherMdp, setAfficherMdp] = useState('password')
    const detailLogin = {
    email: email,
        password: password
}
const loginUser = (e) => {
    e.preventDefault()
    axios.post('https://synaps3.herokuapp.com/utilisateur/login', detailLogin)
        .then(res => {
            localStorage.setItem('userToken', res.data)
            return res.data
        })
        .then(res => {
            history.push('/profile')
        })
        .catch(err => console.log(err))
}
return (
    <div className='LandingPage-full'>
        <img className='logoVert' src={logoVert} alt='logo Synapse' />
        <h1 className='LandingPage-h1' >SYNAPSE</h1>
        <h2 className='LandingPage-h2' >Heureux de vous revoir !</h2>
        <p className='LandingPage-p' >Ne manquez pas votre prochaine opportunité ! Identifiez-vous et restez au courant de ce qui se passe dans un réseau.</p>
        <form onSubmit={loginUser}>
            <input className='LandingPage-input' placeholder="E-mail"
                id="email"
                name="email" value={email} required type="email" onChange={(e) => setEmail(e.target.value)} />
            <input className='LandingPage-input' placeholder="Mot de passe"
                id="password"
                name="password" value={password} required type='password' onChange={(e) => setPassword(e.target.value)} />
            <button className='LandingPage-button' type='submit'>Se connecter</button>
        </form>
        <div className="register-already-subscribe">
            <button className="LandingPage-buttonfb">Continuer avec Facebook</button>
            <p className="text-inscription">Nouveau sur Synapse ? <Link to='/'><span className='LandingPage-span'>S'inscrire</span></Link></p>
        </div>
    </div>
)
}
export default LandingPage;