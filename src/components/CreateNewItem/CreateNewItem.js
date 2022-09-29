import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as data from '../../data';
import styles from './CreateNewItem.module.css';

function CreateNewItem() {
    const [entries, setEntries] = useState({});
    const { category } = useParams();
    const selectMenuForLeads = data.select.filter(item => item.category === category);

    const handleCreateNewItem = (e) => {
        e.preventDefault();
        console.log(entries)
    }

    const handleSelectMenuChange = (value, label) => {
        const newEntry = {};
        newEntry[label] = value;
        setEntries(prevState => {
            const mergedEntries = { ...prevState, ...newEntry }
            return mergedEntries;
        });
    }

    return (
        <div>
            <h3 className={styles.title}>Create New {category}</h3>
            <form action="" onSubmit={handleCreateNewItem}>
                <section className={styles.selectMenu}>
                    {
                        selectMenuForLeads.map((item, index) => <div key={index}>
                            <label htmlFor="">{item.label}</label>
                            <select name="" id="" onChange={(e, label = item.label) => handleSelectMenuChange(e.target.value, label)}>
                                <option value=""></option>
                                {
                                    item.options.map((option, index) => <option key={index} value={option}>{option}</option>)
                                }
                            </select>
                        </div>)
                    }
                </section>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateNewItem