import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Authentication.module.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function Register() {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [passError, setPassError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;


        if (password === confirmPassword) {
            // Registering user to firebase
            createUserWithEmailAndPassword(email, password);
        } else {
            setPassError('Passwords do not match!');
        }
    }

    if (loading) {
        return <h4>Loading...</h4>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className={styles.authenticationFormContainer}>
            <h3>Register</h3>
            <form className={styles.authenticationForm} action="" onSubmit={handleRegister}>
                <input
                    type="text"
                    name='name'
                    placeholder='Enter Name'
                    required
                />

                <input
                    type="email"
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
                    type="password"
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    required
                />

                {passError && <small style={{ color: 'red' }}>{passError}</small>}
                {error && <small style={{ color: 'red' }}>{error}</small>}

                <div className={styles.termsAndCondition}>
                    <input type="checkbox" name="policy" id="" required />
                    <small>Accept terms & conditions!</small>
                </div>
                <input type="submit" value="Register" />
            </form>
            <h4>Already have an account? <Link to={'/login'}>Login</Link></h4>
        </div>
    )
}

export default Register