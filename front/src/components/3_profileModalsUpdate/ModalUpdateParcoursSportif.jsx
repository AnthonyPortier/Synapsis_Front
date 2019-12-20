import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'

const ModalParcours = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [createHistory, setcreateHistory] = useState({
        name: '',
        poste: '',
        date: '',
        description: ''
    })

    const createDataHistory = (e) => {
        e.preventDefault()
        axios.post('https://synaps3.herokuapp.com/history', createHistory)
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Parcours Sportif</ModalHeader>
                <ModalBody>
                    <p>Club :</p>
                    <input id="name" name="name" value={createHistory.name} required type="text"
                        onChange={(e) => { setcreateHistory({ ...createHistory, name: e.target.value }) }} />
                    <p>Poste :</p>
                    <input id="poste" name="poste" value={createHistory.poste} required type="text"
                        onChange={(e) => { setcreateHistory({ ...createHistory, poste: e.target.value }) }} />
                        <p>Description :</p>
                    <input id="description" name="description" value={createHistory.description} required type="text"
                        onChange={(e) => { setcreateHistory({ ...createHistory, description: e.target.value }) }} />
                        <p>Saison :</p>
                    <input id="date" name="date" value={createHistory.date} required type="text"
                        onChange={(e) => { setcreateHistory({ ...createHistory, date: e.target.value }) }} />
                </ModalBody>
                <ModalFooter >
                    <form onSubmit={createDataHistory}>
                        <Button type="submit" onClick={toggle}>Enregistrer</Button>{' '}
                        <Button onClick={toggle}>Fermer</Button>
                    </form>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalParcours;