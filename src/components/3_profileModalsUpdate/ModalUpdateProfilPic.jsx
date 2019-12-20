import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
import './modalUpdateProfilPic.css'
import Plus from '../../img/plus.png'

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
<<<<<<< HEAD
        axios.put(`https://synaps3.herokuapp.com/users/${1}`, idUser)
=======
        axios.put(`https://synaps3.herokuapp.com/users/${props.id}`, idUser)
>>>>>>> d24444de98e1d2b4c8d2674b4f3afd4619447018
            .then(res => console.log(res.data))
            .catch((err) => console.log(err))

    }

    const [image, setImage] = useState(null)
    const onChangeHandler = (e) => {
        setImage(e.target.files)
        console.log(e.target.files[0])
    }

    const onClickHandler = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('file', image[0])
        axios.put(`https://synaps3.herokuapp.com/users/imgupload/${props.id}`, data)
            .then(res => {
                console.log(res.statusText)
            })
    }

    return (
        <div>
            <Button onClick={toggle}><img className="plus" src={Plus} alt="plus" /></Button>
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
                    <form method="POST" encType="multipart/form-data" action="uploaddufichier" >
                        <p>Photo de profil :</p>
                        <input type="file" name="file" onChange={(e) => onChangeHandler(e)} />
                        <button className="image-btn" type="submit" onClick={(e) => onClickHandler(e)} > Envoyer </button>
                    </form>

                </ModalBody>
                <ModalFooter >
                    <div className="submit">
                    <form onSubmit={updateDataUser}>
                        <Button type="submit" className="image-btn" onClick={toggle}>Enregistrer</Button>{' '}
                        <Button className="image-btn" onClick={toggle}>Fermer</Button>
                    </form>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalProfilPic;