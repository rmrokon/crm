import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAccounts } from '../../redux/Accounts';
import styles from '../SharedStyles/Tables.module.css';

function DisplayAccountsTable() {
    const accountsData = useSelector(state => state.accounts);
    let accounts;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAccounts());
    }, [])


    if (accountsData.loading) {
        return <h4>Loading...</h4>;
    }
    if (accountsData.accounts.data) {
        accounts = accountsData.accounts.data;
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.tableHeadRow}>
                    <th><input type="checkbox" /></th>
                    <th>Account Name</th>
                    <th>Account Owner</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {
                    accounts?.map(account => <tr key={account._id}>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td><Link to={`/account/${account._id}`}>{account.accountName}</Link></td>
                        <td>{account.accountOwner}</td>
                        <td>{account.phone}</td>
                        <td>{account.email}</td>
                        <td>{account.website}</td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}

export default DisplayAccountsTable