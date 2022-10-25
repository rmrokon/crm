import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDeals } from '../../redux/Deals';
import styles from '../SharedStyles/Tables.module.css';

function DisplayDealsTable() {
    const dealsData = useSelector(state => state.deals);
    let deals;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDeals());
    }, [])

    if (dealsData.loading) {
        return <h4>Loading...</h4>;
    }
    if (dealsData.deals.data) {
        deals = dealsData.deals.data;
    }
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
                    deals?.map(deal => <tr key={deal._id}>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td><Link to={`/deal/${deal._id}`}>{deal.dealOwner}</Link></td>
                        <td>{deal.accountName}</td>
                        <td>{deal.stage}</td>
                        <td>{deal.amount}</td>
                        <td>{deal.expectedRevenue}</td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}

export default DisplayDealsTable