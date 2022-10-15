import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../SharedStyles/Tables.module.css';

function DisplayDealsTable({ content }) {
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.tableHeadRow}>
                    <th><input type="checkbox" /></th>
                    <th>Deal Owner</th>
                    <th>Account Name</th>
                    <th>Stage</th>
                    <th>Amount</th>
                    <th>Expected Revenue</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {
                    content.map((item, index) => <tr key={index}>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td><Link to={''}>{item.dealOwner}</Link></td>
                        <td>{item.accountName}</td>
                        <td>{item.stage}</td>
                        <td>{item.amount}</td>
                        <td>{item.expectedRevenue}</td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}

export default DisplayDealsTable