import React from 'react';
import styles from '../SharedStyles/createFormStyles.module.css';
import axios from 'axios';

function CreatNewLead() {
    const leadOwners = ["Rokon", "Naeim", "Reza"];
    const leadSource = ['Advertisement', 'LinkedIn', 'Facebook', 'Instagram'];
    const leadStatus = ['Attempted to Contact', 'Contact in Future', 'Contacted', 'Junk Lead', 'Lost Lead', 'Not COntacted'];
    const rating = ['Acquired', 'Active', 'Market Failed', 'Project Cancelled', 'Shut Down'];

    const handleSubmit = (e) => {
        e.preventDefault();
        const leadOwner = e.target.leadOwner.value || null;
        const leadSource = e.target.leadSource.value || null;
        const leadStatus = e.target.leadStatus.value || null;
        const rating = e.target.rating.value || null;
        const firstName = e.target.firstName.value || null;
        const lastName = e.target.lastName.value || null;
        const leadName = e.target.title.value || null;
        const company = e.target.company.value || null;
        const mobile = e.target.mobile.value || null;
        const email = e.target.email.value || null;
        const street = e.target.street.value || null;
        const city = e.target.city.value || null;
        const state = e.target.state.value || null;
        const zipCode = e.target.zipCode.value || null;
        const country = e.target.country.value || null;
        const emailOptOut = e.target.emailOptOut.value || null;
        const description = e.target.description.value || null;


        const lead = {
            leadOwner,
            leadSource,
            leadStatus,
            rating,
            firstName,
            lastName,
            leadName,
            company,
            mobile,
            email,
            description,
            address: {
                street,
                city,
                state,
                zipCode,
                country,
                emailOptOut
            }
        };

        axios.post('http://localhost:5000/api/v1/lead', lead)
            .then(response => {
                if (response.data.status === 'success') {
                    alert('Lead saved!');
                }
                return response.data;
            })


    }

    return (
        <div className={styles.formContainer}>
            <header className={styles.formHeader}>
                <h3>Create Lead</h3>
                <div>
                    <button className={styles.cancelBtn}>Cancel</button>
                    <button className={styles.saveLeadBtn}>Save</button>
                </div>
            </header>
            <main>
                <form action="" onSubmit={handleSubmit}>
                    <div className={styles.image}>
                        <h3>Lead Image</h3>
                        <input type="file" name="" id="" placeholder='' />
                    </div>
                    <div className={styles.dataLists}>
                        <div>
                            <label htmlFor="">Lead Owner </label>
                            <input type="text" list='leadOwner' name='leadOwner' />
                            <datalist id='leadOwner'>
                                {
                                    leadOwners.map((owner, index) =>
                                        <option key={index} value={owner}>{owner}</option>
                                    )
                                }
                            </datalist>
                        </div>

                        <div>
                            <label htmlFor="">Lead Source </label>
                            <input type="text" list='leadSource' name='leadSource' />
                            <datalist id='leadSource'>
                                {
                                    leadSource.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>

                        <div>
                            <label htmlFor="">Lead Status</label>
                            <input type="text" list='leadStatus' name='leadStatus' />
                            <datalist id='leadStatus'>
                                {
                                    leadStatus.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>

                        <div>
                            <label htmlFor="">Rating </label>
                            <input type="text" list='rating' name='rating' />
                            <datalist id='rating'>
                                {
                                    rating.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>
                    </div>
                    <section className={styles.information}>
                        <div>
                            <label htmlFor="">First Name </label>
                            <input type="text" name="firstName" id="" required />
                        </div>

                        <div>
                            <label htmlFor="">Last Name </label>
                            <input type="text" name="lastName" id="" required />
                        </div>
                        <div>
                            <label htmlFor="">Title</label>
                            <input type="text" name="title" id="" required />
                        </div>
                        <div>
                            <label htmlFor="">Company </label>
                            <input type="text" name="company" id="" />
                        </div>

                        <div>
                            <label htmlFor="">Email </label>
                            <input type="email" name="email" id="" />
                        </div>

                        <div>
                            <label htmlFor="">Mobile </label>
                            <input type="number" name="mobile" id="" />
                        </div>

                    </section>

                    <section className={styles.information}>
                        <div>
                            <label htmlFor="">Street </label>
                            <input type="text" name="street" id="" />
                        </div>

                        <div>
                            <label htmlFor="">City </label>
                            <input type="text" name="city" id="" />
                        </div>

                        <div>
                            <label htmlFor="">State </label>
                            <input type="text" name="state" id="" />
                        </div>

                        <div>
                            <label htmlFor="">ZIP Code </label>
                            <input type="number" name="zipCode" id="" />
                        </div>

                        <div>
                            <label htmlFor="">Country </label>
                            <input type="text" name="country" id="" />
                        </div>
                    </section>

                    <section className={styles.descriptionAndEmainOptArea}>
                        <div>
                            <label htmlFor="">Email Opt Out </label>
                            <input type="checkbox" name="emailOptOut" id="" />
                        </div>

                        <div className={styles.descriptionInfo}>
                            <label htmlFor="">Description </label>
                            <textarea name="description" id="" cols="30" rows="10"></textarea>
                        </div>
                    </section>
                    <div className={styles.createButton}>
                        <input type="submit" value="Save" />
                    </div>
                </form>
            </main>
        </div>
    )
}

export default CreatNewLead