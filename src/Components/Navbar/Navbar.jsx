import { InlineIcon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';

const Navbar = () => {

    //SC = Styled-Components
    const NavbarSC = styled.nav`
        width:100%;
        height:55px;
        position: fixed;
        top:0px;
        left:0px;
        z-index: 100;
        background:white;
    
    `
    const NavbarIconBox =  () => {
        

        return (
            <div className="navbar-icon-box">
                <InlineIcon icon="entypo:chat" />
                <span className="alert-count">1</span>
            </div>
        );

    }


    




    return (
        <>
            <NavbarSC className="Navbar_of_dashboard">
                <div className="row w-100">
                    <div className="col-4 logo">
                        <h3>Logo</h3>
                    </div>
                    <div className="col-8 items">
                        <div className="icons">
                            <NavbarIconBox />
                            <NavbarIconBox />
                            <NavbarIconBox />
                        </div>
                        <div className="user-icon">
                            <img className="img-fluid" src="https://static.billboard.com/files/media/andrew-rannells-billboard-650-compressed.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </NavbarSC>

            <div className="navbar-of-dashboard-spacer"></div>
        </>
    );


};



export default Navbar;