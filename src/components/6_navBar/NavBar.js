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
import './NavBar.css'
import logo from '../../img/logo.png'

const NavBar = (props)=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
              <NavLink className='mr-2' href="/ProfilePage">Réseau</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='mr-2' href="/ProfilePage">Messagerie</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='mr-2' href="/ProfilePage">Notifications</NavLink>
            </NavItem>
          </Nav>
          <NavLink className='mr-2' href="/ProfilePage">Ma fiche</NavLink>
        </Collapse>
      </Navbar>

        </div>
    )
}

export default NavBar;