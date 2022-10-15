import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLeads } from '../../redux/Leads';
import styles from '../SharedStyles/Tables.module.css';

function DisplayLeadsTable() {
    const leadsData = useSelector(state => state.leads);
    let leads;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLeads());
    }, [])

    if (leadsData.loading) {
        return <h4>Loading...</h4>;
    }
    if (leadsData.leads.data) {
        leads = leadsData.leads.data;
    }
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.tableHeadRow}>
                    <th><input type="checkbox" /></th>
                    <th>Lead Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Lead Owner</th>
                    <th>Lead Source</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {
                    leads?.map(lead => <tr key={lead._id}>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td><Link to={`/lead/${lead._id}`}>{lead.leadName}</Link></td>
                        <td>{lead.firstName}</td>
                        <td>{lead.lastName}</td>
                        <td>{lead.email}</td>
                        <td>{lead.leadOwner}</td>
                        <td>{lead.leadSource}</td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}

export default DisplayLeadsTable