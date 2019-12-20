import React, {useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'

const ProfilePage = () => {
    const [detail, setDetail] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })

useEffect(() => {
    getProfil()
}, [])

const getProfil = () => {
    const token = localStorage.userToken
    const decoded = jwt_decode(token)
    setDetail({
        firstname: decoded.firstname,
        lastname: decoded.lastname,
        email: decoded.email,
        password: decoded.password
    })
}
    return(
        <div>
            <p>{detail.firstname}</p>
            <p>{detail.lastname}</p>
            <p>{detail.password}</p>
            <p>{detail.email}</p>
        </div>
    )
}
export default ProfilePage;