import React from 'react';
import styled from 'styled-components';

const Navbar = () => {

    //SC = Styled-Components
    const NavbarSC = styled.nav`
        width:100%;
        height:50px;
        background:red;
        position: fixed;
        top:0px;
        left:0px;
    
    
    `


    return (
        <>
            <NavbarSC className="Navbar_of_dashboard"></NavbarSC>

            <div className="navbar-of-dashboard-spacer"></div>
        </>
    );
};

export default Navbar;