import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
import './modalUpdateDistinctionPersonnelles.css'
import Plus from '../../img/plus.png'


const ModalDistinction = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [createDistinction, setcreateDistinction] = useState({
    name: '',
    date: '',
  })

  const createDataDistinction = (e) => {
    e.preventDefault()
    axios.post('https://synaps3.herokuapp.com/distinction', createDistinction)
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <Button onClick={toggle}><img className="plus" src={Plus} alt="plus" /></Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Distinctions personnelles</ModalHeader>
        <ModalBody>
          <p>Distinction :</p>
          <input id="name" name="name" value={createDistinction.name} required type="text"
            onChange={(e) => { setcreateDistinction({ ...createDistinction, name: e.target.value }) }} />
          <p>Saison :</p>
          <input id="date" name="date" value={createDistinction.date} required type="text"
            onChange={(e) => { setcreateDistinction({ ...createDistinction, date: e.target.value }) }} />
        </ModalBody>
        <ModalFooter >
          <form onSubmit={createDataDistinction}>
            <Button className="image-btn" type="submit" onClick={toggle}>Enregistrer</Button>{' '}
            <Button className="image-btn" onClick={toggle}>Fermer</Button>
          </form>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalDistinction;