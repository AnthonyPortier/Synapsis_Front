import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'

const ModalProfilPic = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [idUser, setIdUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        birthday: "",
        birthday_place: "",
        actual_club: "",
        categorie: "",
        size: "",
        weight: "",
        hobbies: "",
        profil_pic: "",
        role: ""
    })

    const updateDataUser = (e) => {
        e.preventDefault()
        axios.put(`https://synaps3.herokuapp.com/users/1`, idUser)
            .then(res => console.log(res.data))
            .catch((err) => console.log(err))

    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Profil General</ModalHeader>
                <ModalBody>
                    <p>Nom :</p>
                    <input id="firstname" name="firstname" value={idUser.firstname} type="text"
                        onChange={(e) => { setIdUser({ ...idUser.firstname, firstname: e.target.value }) }} />
                    <p>Prenom :</p>
                    <input id="lastname" name="lastname" value={idUser.lastname} type="text"
                        onChange={(e) => { setIdUser({ ...idUser.lastname, lastname: e.target.value }) }} />
                    <p>Club actuel :</p>
                    <input id="actual_club" name="actual_club" value={idUser.actual_club} type="text"
                        onChange={(e) => { setIdUser({ ...idUser.actual_club, actual_club: e.target.value }) }} />
                    <p>Photo de profil :</p>
                    <input id="profil_pic" name="profil_pic" value={idUser.profil_pic} type="text"
                        onChange={(e) => { setIdUser({ ...idUser.profil_pic, profil_pic: e.target.value }) }} />
                    <p>Profession :</p>
                    <input id="role" name="role" value={idUser.role} type="text"
                        onChange={(e) => { setIdUser({ ...idUser.ro, role: e.target.value }) }} />
                </ModalBody>
                <ModalFooter >
                    <form onSubmit={updateDataUser}>
                        <Button type="submit" color="primary" onClick={toggle}>Enregistrer</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Fermer</Button>
                    </form>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalProfilPic;