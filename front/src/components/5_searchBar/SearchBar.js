import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const SearchBar = ()=>{
    const [idUser, setIdUser] = useState([])
    const [search,setSearch] = useState('')
    
    let [ catchResult, setCatchResult]=useState([])

    const [catchId,setCatchId] = useState()


    useEffect(() => {
        fetchDataUser()
    }, [])
      //fetch de la data du user 
    const fetchDataUser = () => {
    axios.get(`https://synaps3.herokuapp.com/users`)
    .then(res => setIdUser(res.data))
    .catch((err) => console.log(err))
    
    }

    const filtreApi=()=>{
        idUser.map(x =>{
            if( search.toLocaleLowerCase() === x.firstname ||  search.toLocaleLowerCase() === x.lastname){
            setCatchResult([...catchResult, x])
            }
            return catchResult
        } )
    }
    useEffect( () => {
    filtreApi()        

    },[search])
    const changeHelper = (e) => {
        setSearch(e.target.value)
        
    }

    return(
        <div>
                <form > 
                    <input id="lastname" name="lastname" value={search} type="text"
                    onChange={(e) =>  changeHelper(e)} />
                </form>

                {idUser.filter(x => x.lastname.toUpperCase() === search.toUpperCase()).map(x =>
                <div>
                {
                catchResult.map(function(item) {
                return <div key={item.id}> {item.firstname} {item.lastname}</div>
                })
                }
                <button onClick={()=>setCatchId(x.id)}><Link to={`/routes/${catchId}`}>search</Link></button>
                </div>
            )}                
        </div>
    )
}

export default SearchBar;