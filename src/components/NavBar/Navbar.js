import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from "react-router-dom";

const links = [
    'Home', 'Leads', 'Contacts', 'Accounts', 'Deals', 'Calls', 'Meetings'
]

function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.linksContainer}>
                {
                    links.map((link, index) => <NavLink
                        className={styles.link}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "white",
                            };
                        }}
                        to={link.toLowerCase()}
                        key={index}
                    >{link}</NavLink>)
                }
            </div>
            <div className={styles.icons}>icons</div>
        </div>
    )
}

export default Navbar