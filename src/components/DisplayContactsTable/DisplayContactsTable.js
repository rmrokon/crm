import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchContacts } from '../../redux/Contact';
import styles from '../SharedStyles/Tables.module.css';

function DisplayContactsTable() {
    const contactsData = useSelector(state => state.contacts);
    let contacts;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [])

    console.log(contactsData);
    if (contactsData.loading) {
        return <h4>Loading...</h4>;
    }
    if (contactsData.contacts.data) {
        contacts = contactsData.contacts.data;
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.tableHeadRow}>
                    <th><input type="checkbox" /></th>
                    <th>Contact Name</th>
                    <th>Account Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Contact Owner</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {
                    contacts?.map(contact => <tr key={contact._id}>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td><Link to={''}>{contact.contactName}</Link></td>
                        <td>{contact.accountName}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.contactOwner}</td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}

export default DisplayContactsTable