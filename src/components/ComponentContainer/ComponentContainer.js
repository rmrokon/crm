import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import DisplayAccountsTable from '../DisplayAccountsTable/DisplayAccountsTable';
import DisplayContactsTable from '../DisplayContactsTable/DisplayContactsTable';
import DisplayDealsStageView from '../DisplayDealsStageView/DisplayDealsStageView';
import DisplayDealsTable from '../DisplayDealsTable/DisplayDealsTable';
import DisplayLeadsTable from '../DisplayLeadsTable/DisplayLeadsTable';
import styles from './ComponentContainer.module.css';

function ComponentContainer({ name }) {
    const [isImportLinksOpen, setImportLinksOpen] = useState(false);
    const [isActionLinksOpen, setActionLinksOpen] = useState(false);
    const [isFiltersOpen, setFiltersOpen] = useState(false);
    const [dealView, setDealView] = useState('Stage View');

    const toggleImportLinks = () => {
        setImportLinksOpen(!isImportLinksOpen);
    }
    const toggleActionLinks = () => {
        setActionLinksOpen(!isActionLinksOpen);
    }

    const toggleFilters = () => {
        setFiltersOpen(!isFiltersOpen);
    }

    const closeLinks = () => {
        isImportLinksOpen && setImportLinksOpen(false);
        isActionLinksOpen && setActionLinksOpen(false);
    }

    const handleDealView = (view) => {
        setDealView(view);
        console.log(view);
    }

    const displayImportLinks = isImportLinksOpen ? 'block' : '';
    const displayActionLinks = isActionLinksOpen ? 'block' : '';
    const displayFilters = isFiltersOpen ? 'block' : '';

    const arrow = isImportLinksOpen ? <i class="fas fa-sort-up"></i> : <i class="fas fa-sort-down"></i>;

    return (
        <div onClick={closeLinks} className={styles.container}>
            <header className={styles.header}>
                <div className={styles.createAndActionsBtns}>
                    <Link to={`/create/${name}`}><button className={styles.createBtn}>Create {name}</button></Link>
                    <button
                        onClick={toggleImportLinks}
                        className={styles.toggleImportLinksBtn}
                    >{arrow}</button>
                    <ul
                        style={{ display: `${displayImportLinks}` }}
                        className={styles.importLinks}>
                        <li><NavLink to={'/'}>Import Notes</NavLink></li>
                        <li><NavLink to={'/'}>Import {name}s</NavLink></li>
                    </ul>
                    <button
                        onClick={toggleActionLinks}
                        className={styles.toggleActionsBtn}>Actions</button>

                    <ul
                        style={{ display: `${displayActionLinks}` }}
                        className={styles.actionLinks}
                    >
                        <li><NavLink to={'/'}>Mass Transfer</NavLink></li>
                        <li><NavLink to={'/'}>Mass Delete</NavLink></li>
                        <li><NavLink to={'/'}>Mass Update</NavLink></li>
                        <li><NavLink to={'/'}>Mass Email</NavLink></li>
                        <li><NavLink to={'/'}>Approve {name}s</NavLink></li>
                        <li><NavLink to={'/'}>Add to Campaigns</NavLink></li>
                    </ul>

                </div>
                <div className={styles.filtersAndTypes}>
                    {
                        name === 'Deal' && <select className={styles.selectDealView} name="" id="" onChange={(e) => handleDealView(e.target.value)}>
                            <option className={styles.selectDealViewOptions} value="Stage View" selected>Stage View</option>
                            <option className={styles.selectDealViewOptions} value="Table View">Table View</option>
                        </select>
                    }
                    <button onClick={toggleFilters} className={styles.togglefiltersBtn}>

                        <i class="fas fa-filter"></i>
                    </button>
                    <button className={styles.selectItemTypesBtn}>{name} Types</button>
                </div>
            </header>
            <section className={styles.recordCountAndPagination}>
                <div>
                    record and filter count
                </div>
                <div>
                    Pagination
                </div>
            </section>
            <section className={styles.tableAndFilters}>
                <div className={styles.table}>
                    {name === 'Lead' && <DisplayLeadsTable />}
                    {name === 'Contact' && <DisplayContactsTable />}
                    {name === 'Account' && <DisplayAccountsTable />}
                    {(name === 'Deal' && dealView === 'Stage View') && <DisplayDealsStageView />}
                    {(name === 'Deal' && dealView === 'Table View') && <DisplayDealsTable />}
                </div>
                <div style={{ display: `${displayFilters}` }} className={styles.filters}>
                    filters
                </div>
            </section>
        </div>
    )
}

export default ComponentContainer