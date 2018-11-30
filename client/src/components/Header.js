import React from 'react';
import { Navbar, NavbarBrand, Nav, Jumbotron } from 'reactstrap';
import './style.css';
import Select from './Select';

class Header extends React.Component {
   render() {
      return (
         <div>
            <Navbar color="faded" light>
               <NavbarBrand> Breath: Checkout the Air Quality Index by City! </NavbarBrand>
               <Nav />
            </Navbar>
            <Jumbotron>
               <Select />
            </Jumbotron>
         </div>
      )
   }
}

export default Header;