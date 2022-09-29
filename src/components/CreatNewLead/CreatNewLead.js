import React from 'react';
import styles from './CreatNewLead.module.css';

function CreatNewLead() {
    const leadOwners = ["Rokon", "Naeim", "Reza"];
    const leadSource = ['Advertisement', 'LinkedIn', 'Facebook', 'Instagram'];
    const leadStatus = ['Attempted to Contact', 'Contact in Future', 'Contacted', 'Junk Lead', 'Lost Lead', 'Not COntacted'];
    const rating = ['Acquired', 'Active', 'Market Failed', 'Project Cancelled', 'Shut Down'];
    return (
        <div>
            <header className={styles.header}>
                <h3>Create Lead</h3>
                <div>
                    <button>Cancel</button>
                    <button>Save and New</button>
                    <button>Save</button>
                </div>
            </header>
            <main>
                <form action="">
                    <div className={styles.leadImage}>
                        <h3>Lead Image</h3>
                        <input type="file" name="" id="" placeholder='' />
                    </div>
                    <div className={styles.dataLists}>
                        <div>
                            <label htmlFor="">Lead Owner: </label>
                            <input type="text" list='leadOwner' />
                            <datalist id='leadOwner'>
                                {
                                    leadOwners.map((owner, index) =>
                                        <option key={index} value={owner}>{owner}</option>
                                    )
                                }
                            </datalist>
                        </div>

                        <div>
                            <label htmlFor="">Lead Source: </label>
                            <input type="text" list='leadSource' />
                            <datalist id='leadSource'>
                                {
                                    leadSource.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>

                        <div>
                            <label htmlFor="">Lead Status: </label>
                            <input type="text" list='leadStatus' />
                            <datalist id='leadStatus'>
                                {
                                    leadStatus.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>

                        <div>
                            <label htmlFor="">Rating: </label>
                            <input type="text" list='rating' />
                            <datalist id='rating'>
                                {
                                    rating.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default CreatNewLead