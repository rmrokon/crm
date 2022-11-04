import React from 'react';
import styles from './InviteUserModal.module.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { useState } from 'react';


function InviteUserModal({ handleInviteUser }) {
    const teams = ['Marketing', 'Sales', 'Technical'];
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [dbError, setDbError] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const team = e.target.team.value;

        const newUser = {
            name,
            email,
            password,
            team
        };

        await createUserWithEmailAndPassword(email, password);

        axios.post('http://localhost:5000/api/v1/user', newUser)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 'success') {
                    const config = {
                        Username: 'crm.admin@yopmail.com',
                        Password: '487342AD4E6017B76A7C70F5DDFCAB9D8964',
                        Host: 'smtp.elasticemail.com',
                        Port: 2525,
                        To: email,
                        From: "mdrokon7773@gmail.com",
                        Subject: "This is the invitation",
                        Body: `Hello, ${name} you are invited to the ${team} team!
                    Login using the below credential.
                    Username: ${email}
                    Password: ${password}
                    `,
                    }

                    if (window?.Email) {
                        window.Email.send(config).then(() => alert('User Invited'))
                    }
                }
                if (response.data.status === 'failed') {
                    setDbError(response.data.error);
                }
                return response.data;
            })

    }

    return (
        <div className={styles.modalContainer}>
            <h3>Invite User</h3>
            {error && <small>{error.message}</small>}
            {dbError && <small>{dbError}</small>}
            <form className={styles.modalFormContainer} action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    placeholder='Enter Name'
                    required
                />
                <input
                    type="text"
                    name='email'
                    placeholder='Enter Email'
                    required
                />
                <input
                    type="password"
                    name='password'
                    placeholder='Enter Password'
                    required
                />
                <input
                    type="text"
                    list='teams'
                    name='team'
                    placeholder='Select a team'
                    required
                />
                <datalist id='teams'>
                    {
                        teams?.map((team, index) =>
                            <option key={index} value={team}>{team}</option>
                        )
                    }
                </datalist>
                <div className={styles.InviteAndCancelBtns}>
                    <input type="submit" value="Invite" />
                    <button onClick={handleInviteUser} className={styles.cancelBtn}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default InviteUserModal