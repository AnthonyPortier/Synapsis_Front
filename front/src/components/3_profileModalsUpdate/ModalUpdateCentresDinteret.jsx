import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'

const ModalInteret = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [idUser, setIdUser] = useState([])
   
    useEffect(() => {
        fetchDataUser()
    }, [])
    const fetchDataUser = () => {
        axios.get(`http://localhost:8080/users/1`)
            .then(res => setIdUser(res.data))
            .catch((err) => console.log(err))
    }
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
                <ModalHeader toggle={toggle}>Centres d'intérêt</ModalHeader>
                <ModalBody>
                    <h1>Centres d'intérêt</h1>
                    <input id="hobbies" name="hobbies" value={idUser.hobbies} type="text"
                        onChange={(e) => { setIdUser({ ...idUser, hobbies: e.target.value }) }} />
                </ModalBody>
                <ModalFooter >
                    <form onSubmit={updateDataUser}>
                        <Button type="submit" onClick={toggle}>Enregistrer</Button>{' '}
                        <Button onClick={toggle}>Fermer</Button>
                    </form>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalInteret;