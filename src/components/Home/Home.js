import React from 'react';
import DisplayLeadsTable from '../DisplayLeadsTable/DisplayLeadsTable';
import DisplayAccountsTable from '../DisplayAccountsTable/DisplayAccountsTable';
import DisplayContactsTable from '../DisplayContactsTable/DisplayContactsTable';
import DisplayDealsTable from '../DisplayDealsTable/DisplayDealsTable';
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.homeContainer}>
            <div>
                <h3>Leads</h3>
                <DisplayLeadsTable />
            </div>
            <div>
                <h3>Accounts</h3>
                <DisplayAccountsTable />
            </div>
            <div>
                <h3>Contacts</h3>
                <DisplayContactsTable />
            </div>
            <div>
                <h3>Deals</h3>
                <DisplayDealsTable />
            </div>
        </div>
    )
}

export default Home