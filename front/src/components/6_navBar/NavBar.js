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
import SearchBar from '../5_searchBar/SearchBar'

const NavBar = (props)=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  

    return(
        <div>
            <Navbar color="light" light expand="md">
        <NavbarBrand href="/profilePage">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <SearchBar/>
            <NavItem>
              <NavLink href="/ProfilePage">Acceuil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ProfilePage">Réseau</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ProfilePage">Messagerie</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ProfilePage">Notifications</NavLink>
            </NavItem>
          </Nav>
          <NavLink href="/ProfilePage">Ma fiche</NavLink>
        </Collapse>
      </Navbar>

        </div>
    )
}

export default NavBar;