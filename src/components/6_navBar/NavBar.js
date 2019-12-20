
import React,{useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input
} from 'reactstrap';
import './Navbar.css'
import {useHistory, Link} from 'react-router-dom'
import logo from '../../img/logo.png'

const NavBar = (props)=>{
  let history = useHistory()
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    const logOut = (e) => {
      e.preventDefault()
      localStorage.removeItem('userToken')
      history.push(`/`)
    }

    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    )

    return(
        <div className='Navbar-full' style = {{position:'sticky',top:'0px', backgroundColor:'#535353', zIndex:'2'}}>
            <Navbar color="#535353" light expand="md">
        <NavbarBrand href="/profilePage"><img style={{width:'2.5rem', height:'auto'}} src={logo} alt='logo synapse' /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Input className='mr-2' style={{marginBottom:'0px', textAlign:'left', width:'300%'}} placeholder='rechercher'
            id="rechercher"
            name="rechercher"
            // value={e.target.value}
            type="text"
            // onChange={}
            />
            <NavItem>
              <NavLink className='mr-2' href="/ProfilePage">Accueil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='mr-2' href="/ProfilePage">Reseau</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='mr-2' href="/ProfilePage">Messagerie</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='mr-2' href="/ProfilePage">Notifications</NavLink>
            </NavItem>
          </Nav>
          {localStorage.userToken ? userLink : loginRegLink}
        </Collapse>
      </Navbar>

        </div>
    )
}

export default NavBar;