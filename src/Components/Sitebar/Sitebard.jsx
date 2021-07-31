import { Icon, InlineIcon } from "@iconify/react";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Sitebar = () => {
    const SitebarSC = styled.aside`
        position: fixed;
        width: 70px;
        height: calc(100% - 50px);
        left: 0px;
        top: 50px;
        background: white;
        border: 1px solid #888888;
    `;

    return (
        <>
            <SitebarSC className="Sitebar-of--website">
                <ul className="sitebar-contents">
                    <li className="sitebar-item">
                        <NavLink exact activeClassName="sitebar-active" className="sitebar-link" to="/projects">
                            {" "}
                            <NavItemIcon icon="fluent:text-bullet-list-square-24-regular" text="project" />{" "}
                        </NavLink>
                    </li>
                    <li className="sitebar-item">
                        <NavLink exact activeClassName="sitebar-active" className="sitebar-link" to="/help-desk">
                            {" "}
                            <NavItemIcon icon="iconoir:headset-help" text="help desk" />{" "}
                        </NavLink>
                    </li>
                    <li className="sitebar-item">
                        <NavLink exact activeClassName="sitebar-active" className="sitebar-link" to="/sites">
                            <NavItemIcon icon="bi:building" text="Sites" />{" "}
                        </NavLink>
                    </li>
                    <li className="sitebar-item">
                        <NavLink exact activeClassName="sitebar-active" className="sitebar-link" to="/team">
                            <NavItemIcon icon="clarity:group-line" text="team" />{" "}
                        </NavLink>
                    </li>
                    <li className="sitebar-item">
                        <NavLink exact activeClassName="sitebar-active" className="sitebar-link" to="/super-chat">
                            <NavItemIcon icon="entypo:chat" text="super chat" />
                        </NavLink>
                    </li>
                    <li className="sitebar-item">
                        <NavLink exact activeClassName="sitebar-active" className="sitebar-link" to="/payments">
                            <NavItemIcon icon="bx:bx-rupee" text="payments" />
                        </NavLink>
                    </li>
                </ul>
            </SitebarSC>
            <div className="sitebar-of-website-spacer"></div>
        </>
    );
};

const NavItemIcon = ({icon,text}) => {
    return (
        <div className="navbar-icon-box">
            <InlineIcon className="icon" icon={icon} />
            <span className="icon-text">{text}</span>
        </div>
    );
};

export default Sitebar;
