import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
import './modalUpdatePalmares.css'
import Plus from '../../img/plus.png'





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
            <Button onClick={toggle}><img className="plus" src={Plus} alt="plus" /></Button>
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
                        <Button className="image-btn" type="submit" onClick={toggle}>Enregistrer</Button>{' '}
                        <Button className="image-btn" onClick={toggle}>Fermer</Button>
                    </form>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalPalmares;