import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './RegisterPage.css'
import logo from '../../img/logoVert.png'


const RegisterPage = ()=>{


    return(
        <div className="container-register">
          <div className="container-logo">
            <img className="register-logo" src={logo} alt="logo"/>
            </div>
          <div className="register-login">
            <h1 className="register-h1">SYNAPSE</h1>
            <h2 className="register-h2">Boostez votre carrière footballistique</h2>

            {/* <h3>Prénom</h3>
            <input placeholder="Prénom"
            id="Prénom"
            name="Prénom"
            // value={e.target.value}
            type="text"
            // onChange={}
            /> */}

           {/*  <h3>Nom</h3>
            <input placeholder="Nom"
            id="Nom"
            name="Nom"
            // value={e.target.value}
            type="text"
            // onChange={}
            /> */}

            {/* <h3>Date de naissance</h3>
            <input placeholder="Date_de_naissance"
            id="Date_de_naissance"
            name="Date_de_naissance"
            // value={e.target.value}
            type="date"
            // onChange={}
            /> */}

          {/*   <h3>email</h3>
            <input placeholder="email"
            id="email"
            name="email"
            // value={e.target.value}
            type="email"
            // onChange={}
            /> */}


    <Form className='form-register'>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label className="prenom-register" for="prenom">Prénom</Label>
            <Input type="text" name="prenom" id="prenom" placeholder="Prénom" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="Nom">Nom</Label>
            <Input type="text" name="nom" id="Nom" placeholder="Nom" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Date de naissance</Label>
        <Input type="text" name="Date_de_naissance" id="Date_de_naissance" placeholder="Date de naissance"/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Adresse e-mail</Label>
        <Input type="text" name="email" id="email" placeholder="email"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="Mot_de_passe">Mot de passe(6 charactères minimun)</Label>
            <Input type="text" name="Mot_de_passe" id="Mot_de_passe" placeholder="Mot de passe"/>
          </FormGroup>
        </Col>
        <p>Vous acceptez les conditions d'utilisation, la Politique de confidentialité et la Politique relative aux cookies de Synapse.</p>

 <Link to='/profilePage'><button>Accepter et s'inscrire</button>
<p>OU</p>
<button>Continuer avec Facebook</button>
<p>Déja inscrit ? </p></Link>

      </Row>
      <Link to='/landingPage'>S'identifier
      <Button className="button-signin">Accepter et s'inscrire</Button>
      </Link>
    </Form>

    </div>
  </div>
    )
}

export default RegisterPage;