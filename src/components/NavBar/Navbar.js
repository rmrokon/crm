import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from "react-router-dom";
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

function Navbar() {

    return (
        <nav className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.linksContainer}>
                <NavLink
                    className={styles.link}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "cyan" : "white",
                        };
                    }}
                    to='home'
                ><i className="fas fa-home"></i><span>Home</span></NavLink>
                <NavLink
                    className={styles.link}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "cyan" : "white",
                        };
                    }}
                    to='leads'
                ><i className="far fa-address-card"></i><span>Leads</span></NavLink>
                <NavLink
                    className={styles.link}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "cyan" : "white",
                        };
                    }}
                    to='contacts'
                ><i className="far fa-address-book"></i><span>Contacts</span></NavLink>
                <NavLink
                    className={styles.link}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "cyan" : "white",
                        };
                    }}
                    to='accounts'
                ><i className="far fa-user-circle"></i><span>Accounts</span></NavLink>
                <NavLink
                    className={styles.link}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "cyan" : "white",
                        };
                    }}
                    to='deals'
                ><i className="fa fa-file-invoice-dollar"></i><span>Deals</span></NavLink>
                {/* <NavLink
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
                ><i class="far fa-calendar-alt"></i><span>Meetings</span></NavLink> */}

            </div>

            <div className={styles.linksContainer}>

                <NavLink
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "white",
                        };
                    }}
                    to={'/settings'}
                ><i class="fas fa-cog"></i><span>Settings</span></NavLink>

                <NavLink
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "cyan" : "white",
                        };
                    }}
                    to={'/login'}
                    onClick={() => signOut(auth)}
                ><i class="fas fa-sign-out-alt"></i><span>Logout</span></NavLink>
            </div>
        </nav>
    )
}

export default Navbar