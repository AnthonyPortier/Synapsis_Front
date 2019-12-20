import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
import './modalUpdateClient.css'
import Plus from '../../img/plus.png'


const ModalClient = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [createClient, setcreateClient] = useState({
        firstname: '',
        lastname: '',
        profil_pic: '',
        club: '',
    })

    const createDataClient = (e) => {
        e.preventDefault()
        axios.post('https://synaps3.herokuapp.com/clients', createClient)
            .catch((err) => console.log(err))

    }



    return (
        <div>
            <Button onClick={toggle}><img className="plus" src={Plus} alt="plus" /></Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Clients</ModalHeader>
                <ModalBody>
                    <p>Nom</p>
                    <input id="firstname" name="firstname" value={createClient.firstname} required type="text"
                        onChange={(e) => { setcreateClient({ ...createClient, firstname: e.target.value }) }} />
                    <p>Prenom</p>
                    <input id="lastname" name="lastname" value={createClient.lastname} required type="text"
                        onChange={(e) => { setcreateClient({ ...createClient, lastname: e.target.value }) }} />

                    <p>Photo</p>
                    <input id="profil_pic" name="profil_pic" value={createClient.profil_pic} required type="text"
                        onChange={(e) => { setcreateClient({ ...createClient, profil_pic: e.target.value }) }} />

                    <p>Club</p>
                    <input id="club" name="club" value={createClient.club} required type="text"
                        onChange={(e) => { setcreateClient({ ...createClient, club: e.target.value }) }} />
                </ModalBody>
                <ModalFooter >
                    <form onSubmit={createDataClient}>
                        <Button className="image-btn" type="submit" onClick={toggle}>Enregistrer</Button>{' '}
                        <Button className="image-btn" onClick={toggle}>Fermer</Button>
                    </form>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalClient;