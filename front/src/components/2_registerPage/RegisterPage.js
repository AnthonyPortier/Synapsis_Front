import React,{useState} from 'react'
import { Link } from 'react-router-dom';



const RegisterPage = ()=>{

const [createUser, setcreateUser] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    birthday:''




})
    const createUser = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/users', createUser)
            .catch((err) => console.log(err))
        
    }
    return(
        <div>
            <h1>SYNAPSE</h1>
            <h2>Boostez votre carrière footballistique</h2>
            <h3>Prénom</h3>
            <input placeholder="Prénom"
            id="Prénom"
            name="Prénom"
            // value={e.target.value}
            type="text"
            // onChange={}
            />
            <h3>Nom</h3>
            <input placeholder="Nom"
            id="Nom"
            name="Nom"
            // value={e.target.value}
            type="text"
            // onChange={}
            />
            <h3>Date de naissance</h3>
            <input placeholder="Date_de_naissance"
            id="Date_de_naissance"
            name="Date_de_naissance"
            // value={e.target.value}
            type="date"
            // onChange={}
            />

            <h3>email</h3>
            <input placeholder="email"
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
            type="password"
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

export default RegisterPage;