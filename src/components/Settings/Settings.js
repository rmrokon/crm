import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import InviteUserModal from '../InviteUserModal/InviteUserModal';
import styles from './Settings.module.css';

function Settings() {
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
    const displayModal = isInviteModalOpen ? { top: 0 } : {};

    const handleInviteUser = (e) => {
        e.preventDefault();
        setIsInviteModalOpen(!isInviteModalOpen);
    }
    return (
        <div className={styles.settingsContainer}>
            <h3>Settings</h3>
            <Link to={''}>Manage User Permission</Link>
            <button onClick={handleInviteUser}>Invite User</button>
            <div className={styles.InviteUserModal} style={displayModal}>
                <InviteUserModal
                    handleInviteUser={handleInviteUser}
                />
            </div>
        </div>
    )
}

export default Settings