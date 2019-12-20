import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import './RegisterPage.css'
import logo from '../../img/logoVert.png'



const RegisterPage = () => {

  const [info, setInfo] = useState({
    firstname: '',
    lastname: '',
    birthday: '',
    email: '',
    password: ''    
  })

  let history = useHistory()

  const registerUser = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/utilisateur/register', info)
    .then(res => {
      history.push('/Login')
    })
  }

  return (
    <div className="container-register">
      <div className="container-logo">
        <img className="register-logo" src={logo} alt="logo" />
      </div>
      <div className="register-login">
        <h1 className="register-h1">SYNAPSE</h1>
        <h2 className="register-h2">Boostez votre carrière footballistique</h2>

        <Form className='form-register' onSubmit={registerUser}>
          <Row form>
            <Col md={11}>
              <FormGroup>
                <Label className="firstname" for="firstname">Prénom</Label>
                <Input required type="text" name="firstname" value={info.firstname} id="firstname" onChange={(e) => setInfo({...info, firstname: e.target.value})} />
              </FormGroup>
            </Col>

            <Col md={11}>
              <FormGroup>
                <Label for="lastname">Nom</Label>
                <Input required type="text" name="lastname" value={info.lastname} id="lastname" onChange={(e) => setInfo({...info, lastname: e.target.value})} />
              </FormGroup>
            </Col>

            <Col md={11}>
              <FormGroup>
                <Label for="birthday">Date de naissance</Label>
                <Input required type="text" name="birthday" value={info.birthday} id="birthday" onChange={(e) => setInfo({...info, birthday: e.target.value})} />
              </FormGroup>
            </Col>

            <Col md={11}>
              <FormGroup>
                <Label for="email">Adresse e-mail</Label>
                <Input required type="text" name="email" value={info.email} id="email" onChange={(e) => setInfo({...info, email: e.target.value})} />
              </FormGroup>
            </Col>

            <Col md={11}>
              <FormGroup>
                <Label for="password">Mot de passe (6 charactères minimun)</Label>
                <Input required type="text" name="password" value={info.password} id="password" onChange={(e) => setInfo({...info, password: e.target.value})} />
              </FormGroup>
            </Col>

            <p className="p-register">Vous acceptez les conditions d'utilisation, la Politique de confidentialité et la Politique relative aux cookies de Synapse.</p>

            <div className="bottom-register">
              <button className="button-signin" type='submit'>Accepter et s'inscrire</button>
              <div className="separation">OU</div>
              <button className="button-fb">Continuer avec Facebook</button>
              <div className="register-footer">
                Déjà inscrit(e)?
                <Link to='/login'>S'identifier</Link>
              </div>
            </div>
          </Row>
        </Form>

      </div>
    </div>
  )
}
export default RegisterPage;