import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
import './modalUpdateInfo.css'
import Plus from '../../img/plus.png'


const ModalInfo = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [idUser, setIdUser] = useState({
        categorie: '',
        birthday: '',
        birthday_place: '',
        size: '',
        weight: '',
        foot: ''
    })

    const updateDataUser = (e) => {
        e.preventDefault()
        axios.put(`https://synaps3.herokuapp.com/users/1`, idUser)
            .then(res => console.log(res.data))
            .catch((err) => console.log(err))

    }

    return (
        <div>
            <Button onClick={toggle}><img className="plus" src={Plus} alt="plus" /></Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Informations personnelles</ModalHeader>
                <ModalBody>
                    <p>Categorie</p>
                    <input id="categorie" name="categorie" value={idUser.categorie} type="text"
                        onChange={(e) => { setIdUser({ ...idUser, categorie: e.target.value }) }} />
                    <p>Date de naissance </p>
                    <input id="birthday" name="birthday" value={idUser.birthday} type="date"
                        onChange={(e) => { setIdUser({ ...idUser, birthday: e.target.value }) }} />
                    <p>Lieu de naissance</p>
                    <input id="birthday_place" name="birthday_place" value={idUser.birthday_place} type="text"
                        onChange={(e) => { setIdUser({ ...idUser, birthday_place: e.target.value }) }} />
                    <p>Taille</p>
                    <input id="size" name="size" value={idUser.size} type="text"
                        onChange={(e) => { setIdUser({ ...idUser, size: e.target.value }) }} />
                    <p>Poids</p>
                    <input id="weight" name="weight" value={idUser.weight} type="text"
                        onChange={(e) => { setIdUser({ ...idUser, weight: e.target.value }) }} />
                    <p>Pied fort</p>
                    <input id="" name="foot" value={idUser.foot} type="text"
                        onChange={(e) => { setIdUser({ ...idUser, foot: e.target.value }) }} />
                </ModalBody>
                <ModalFooter >
                    <form onSubmit={updateDataUser}>
                        <Button className="image-btn" type="submit" onClick={toggle}>Enregistrer</Button>{' '}
                        <Button className="image-btn" onClick={toggle}>Fermer</Button>
                    </form>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalInfo;