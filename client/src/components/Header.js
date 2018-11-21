import React from 'react';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';

class Header extends React.Component {
   render() {
      return (
         <div>
            <Navbar  color="faded" light>
               <NavbarBrand> Breath! </NavbarBrand>
               <Nav />
            </Navbar>
         </div>
      )
   }
}

export default Header;