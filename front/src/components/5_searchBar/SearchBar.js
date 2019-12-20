import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const SearchBar = ()=>{
    const [idUser, setIdUser] = useState([])
    const [search,setSearch] = useState('')
    const [catchId,setCatchId] = useState()


    useEffect(() => {
        fetchDataUser()
    }, [])
      //fetch de la data du user 
    const fetchDataUser = () => {
    axios.get(`http://localhost:5000/users`)
    .then(res => setIdUser(res.data))
    .catch((err) => console.log(err))
    
    }


    return(
        <div>
                <form > 
                    <input id="lastname" name="lastname" value={search} type="text"
                    onChange={(e) => { setSearch(e.target.value) }} />
                </form>

                {idUser.filter(x => x.lastname.toUpperCase() === search.toUpperCase()).map(x =>
                <div>
                    <p>{x.lastname}</p>
                <button onClick={()=>setCatchId(x.id)}><Link to={`/routes/${catchId}`}>search</Link></button>
                </div>
            )}                
        </div>
    )
}

export default SearchBar;