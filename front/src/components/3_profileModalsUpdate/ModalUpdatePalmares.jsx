import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'

const ModalPalmares = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [createPalmares, setcreatePalmares] = useState({
        name: '',
        description: '',
    })

    const createDataPalmares = (e) => {
        e.preventDefault()
        axios.post('https://synaps3.herokuapp.com/palmares', createPalmares)
            .catch((err) => console.log(err))
    }


    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Palmares</ModalHeader>
                <ModalBody>
                    <p>Titre</p>
                    <input id="name" name="name" value={createPalmares.name} required type="text"
                        onChange={(e) => { setcreatePalmares({ ...createPalmares, name: e.target.value }) }} />
                    <p>Date</p>
                    <input id="description" name="description" value={createPalmares.description} required type="text"
                        onChange={(e) => { setcreatePalmares({ ...createPalmares, description: e.target.value }) }} />
                </ModalBody>
                <ModalFooter >
                    <form onSubmit={createDataPalmares}>
                        <Button type="submit" color="primary" onClick={toggle}>Enregistrer</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Fermer</Button>
                    </form>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalPalmares;