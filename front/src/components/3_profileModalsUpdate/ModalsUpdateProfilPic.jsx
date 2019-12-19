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
        categorie:'',
        birthday:'',
        birthday_place:'',
        size:'',
        weight:'',
        foot:''
    })

    const updateDataUser = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8080/users/1`, idUser)
            .then(res => console.log(res.data))
            .catch((err) => console.log(err))
        window.location.reload(false);

    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Profil General</ModalHeader>
                <ModalBody>
                <p>firstname</p>
                <input id="firstname" name="firstname" value={idUser.firstname} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, firstname: e.target.value }) }} />
                <p>lastname</p>
                <input id="lastname" name="lastname" value={idUser.lastname} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, lastname: e.target.value }) }} />
                <p>email</p>
                <input id="email" name="email" value={idUser.email} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, email: e.target.value }) }} />
                <p>password</p>
                <input id="password" name="password" value={idUser.password} type="password"
                    onChange={(e) => { setIdUser({ ...idUser, password: e.target.value }) }} />
                < p > birthday </p>
                <input id="birthday" name="birthday" value={idUser.birthday} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, birthday: e.target.value }) }} />

                <p>birthday place</p>
                <input id="birthday_place" name="birthday_place" value={idUser.birthday_place} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, birthday_place: e.target.value }) }} />
                <p>actual_club</p>
                <input id="actual_club" name="actual_club" value={idUser.actual_club} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, actual_club: e.target.value }) }} />
                <p>categorie</p>
                <input id="categorie" name="categorie" value={idUser.categorie} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, categorie: e.target.value }) }} />

                <p>size</p>
                <input id="size" name="size" value={idUser.size} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, size: e.target.value }) }} />
                <p>weight</p>
                <input id="weight" name="weight" value={idUser.weight} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, weight: e.target.value }) }} />
                <p>profil_pic</p>
                <input id="profil_pic" name="profil_pic" value={idUser.profil_pic} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, profil_pic: e.target.value }) }} />
                <p>role</p>
                <input id="role" name="role" value={idUser.role} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, role: e.target.value }) }} />
                <h1>Hobbies</h1>
                <input id="hobbies" name="hobbies" value={idUser.hobbies} type="text"
                    onChange={(e) => { setIdUser({ ...idUser, hobbies: e.target.value }) }} />
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