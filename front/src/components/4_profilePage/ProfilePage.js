import React, {
    useState,
    useEffect,
    useContext
} from 'react';
import NavBar from '../6_navBar/NavBar'
import axios from 'axios'
import { Link } from 'react-router-dom';


const ProfilePage = ()=>{

 const [idUser,setIdUser]=useState([])

 const [updateUser,setUpdateUser]=useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    birthday:'',
    birthday_place:'',
    actual_club:'',
    categorie:'',
    size:'',
    weight:'',
    hobbies:'',
    profil_pic:'',
    role:''
 })
const [palmares, setpalmares] = useState([])
 const [createPalmares, setcreatePalmares] = useState({
    name:'',
    description:'',
    UserId:0
 })

    useEffect(() => {
        fetchDataUser()
    }, [])

    const fetchDataUser = ()=>{
        axios.get(`http://localhost:5000/users/1`)
        .then(res => setIdUser(res.data))
        .catch((err) => console.log(err))
    }

     const updateDataUser = (e) => {
         e.preventDefault()
         axios.put(`http://localhost:5000/users/1`, updateUser)
            .then(res => setUpdateUser(res.data))
            .catch((err) => console.log(err))
     }

    useEffect(() => {
        fetchDataPalmares()
    }, [])

     const fetchDataPalmares = ()=>{
        axios.get(`http://localhost:5000/palmares/2`)
        .then(res => setpalmares(res.data))
        .catch((err) => console.log(err))
    }

     const createDataPalmares = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/palmares', createPalmares)
            .catch((err) => console.log(err))}




    return(
        <div>
            <NavBar/>
    <p>{idUser.firstname}</p>
    <p>{idUser.lastname}</p>
    <p>{idUser.email}</p>
    <p>{idUser.password}</p>
    <p>{idUser.birthday}</p>

    <h1>autres champs du user à modifier ou à rentrer</h1>

    <form onSubmit={updateDataUser}>
        <p>firstname</p>
         <input id="firstname" name="firstname" value={updateUser.firstname} required type="text"
        onChange={(e) => { setUpdateUser({ ...updateUser, firstname: e.target.value }) }} />

        <p>lastname</p>
         <input id="lastname" name="lastname" value={updateUser.lastname} required type="text"
        onChange={(e) => { setUpdateUser({ ...updateUser, lastname: e.target.value }) }} />

        <p>email</p>
         <input id="email" name="email" value={updateUser.email} required type="text"
        onChange={(e) => { setUpdateUser({ ...updateUser, email: e.target.value }) }} />

        <p>password</p>
         <input id="password" name="password" value={updateUser.password} required type="text"
        onChange={(e) => { setUpdateUser({ ...updateUser, password: e.target.value }) }} />

        <p>birthday</p>
         <input id="birthday" name="birthday" value={updateUser.birthday} required type="date"
        onChange={(e) => { setUpdateUser({ ...updateUser, birthday: e.target.value }) }} />
        <button type="submit">submit</button>
    </form>

    <h1>Parcours sportif</h1>
    <p>{palmares.name}</p>
    <p>{palmares.description}</p>
    <p>{palmares.UserId}</p>



     <form onSubmit={createDataPalmares}>
        <p>name</p>
         <input id="name" name="name" value={createPalmares.name} required type="text"
        onChange={(e) => { setcreatePalmares({ ...createPalmares, name: e.target.value }) }} />

        <p>description</p>
         <input id="description" name="description" value={createPalmares.description} required type="text"
        onChange={(e) => { setcreatePalmares({ ...createPalmares, description: e.target.value }) }} />
        <button type="submit">submit</button>
    </form>



        </div>
    )
}

export default ProfilePage;