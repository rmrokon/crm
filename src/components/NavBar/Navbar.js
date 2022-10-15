import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.linksContainer}>
                <NavLink
                    className={styles.link}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "white",
                        };
                    }}
                    to='home'
                ><i class="fas fa-home"></i><span>Home</span></NavLink>
                <NavLink
                    className={styles.link}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "white",
                        };
                    }}
                    to='leads'
                ><i class="far fa-address-card"></i><span>Leads</span></NavLink>
                <NavLink
                    className={styles.link}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "white",
                        };
                    }}
                    to='contacts'
                ><i class="far fa-address-book"></i><span>Contacts</span></NavLink>
                <NavLink
                    className={styles.link}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "white",
                        };
                    }}
                    to='accounts'
                ><i class="far fa-user-circle"></i><span>Accounts</span></NavLink>
                <NavLink
                    className={styles.link}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "white",
                        };
                    }}
                    to='deals'
                ><i class="fa fa-file-invoice-dollar"></i><span>Deals</span></NavLink>
                <NavLink
                    className={styles.link}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "white",
                        };
                    }}
                    to='calls'
                ><i class="fa fa-phone-square"></i><span>Calls</span></NavLink>
                <NavLink
                    className={styles.link}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "white",
                        };
                    }}
                    to='meetings'
                ><i class="far fa-calendar-alt"></i><span>Meetings</span></NavLink>

            </div>

            <div className={styles.icons}>
                <div className={styles.linksContainer}>
                    Icons
                    {/* <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "white",
                            };
                        }}
                        to={'/settings'}
                    ><i class="fas fa-cog"></i><span>Settings</span></NavLink> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar