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
            <Input placeholder='rechercher'
            id="rechercher"
            name="rechercher"
            // value={e.target.value}
            type="text"
            // onChange={}
            />
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