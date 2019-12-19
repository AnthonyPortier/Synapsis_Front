import React,{useState,useEffect} from 'react'
import { Link,withRouter, useHistory } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './RegisterPage.css'
import logo from '../../img/logoVert.png'
import axios from 'axios'


const RegisterPage = ()=>{
    let history = useHistory()

const [createUser, setcreateUser] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    birthday:''
})

console.log(createUser)
    const createU = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/users', createUser)
            .catch((err) => console.log(err))
            .then(e => history.push('/profile'))

        
    }
    return(
        <div className="container-register">
          <div className="container-logo">
            <img className="register-logo" src={logo} alt="logo"/>
            </div>
          <div className="register-login">
            <h1 className="register-h1">SYNAPSE</h1>
            <h2 className="register-h2">Boostez votre carrière footballistique</h2>

    <Form className='form-register' onSubmit={createU}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label className="prenom-register" for="prenom">Prénom</Label>
            <Input type="text" 
            name="prenom" 
            id="prenom" 
            placeholder="Prénom" 
            value={createUser.firstname}
            onChange={(e) => { setcreateUser({ ...createUser, firstname: e.target.value }) }}
             />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="Nom">Nom</Label>
            <Input type="text" 
            name="Nom" 
            id="Nom" 
            placeholder="Nom" 
            value={createUser.lastname}
            onChange={(e) => { setcreateUser({ ...createUser, lastname: e.target.value }) }}
             />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Date de naissance</Label>
        <Input type="date" name="Date_de_naissance" id="Date_de_naissance" placeholder="Date de naissance"
        value={createUser.birthday}
        onChange={(e) => { setcreateUser({ ...createUser, birthday: e.target.value }) }}/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Adresse e-mail</Label>
        <Input type="email" name="email" id="email" placeholder="email"
        value={createUser.email}
        onChange={(e) => { setcreateUser({ ...createUser, email: e.target.value })} }/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="Mot_de_passe">Mot de passe(6 charactères minimun)</Label>
            <Input type="password" name="Mot_de_passe" id="Mot_de_passe" placeholder="Mot de passe"
            value={createUser.password}
            onChange={(e) => { setcreateUser({ ...createUser, password: e.target.value }) }}/>
          </FormGroup>
        </Col>
        <p>Vous acceptez les conditions d'utilisation, la Politique de confidentialité et la Politique relative aux cookies de Synapse.</p>

 <button type='submit'>Accepter et s'inscrire</button>
<p>OU</p>
<button>Continuer avec Facebook</button>
<p>Déja inscrit ? <Link to='/login'>S'identifier</Link></p>

      </Row>
      
    </Form>

    </div>
  </div>
    )
}

export default withRouter(RegisterPage) ;