import React from 'react';
import { useDispatch } from 'react-redux';
import styles from '../SharedStyles/createFormStyles.module.css';
import axios from 'axios';

function CreateNewContact() {
    const contactOwner = ["Rokon", "Naeim", "Reza"];
    const leadSource = ['Advertisement', 'LinkedIn', 'Facebook', 'Instagram'];
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const contactOwner = e.target.contactOwner.value || null;
        const accountName = e.target.accountName.value || null;
        const leadSource = e.target.leadSource.value || null;
        const firstName = e.target.firstName.value || null;
        const contactName = e.target.title.value || null;
        const lastName = e.target.lastName.value || null;
        const company = e.target.company.value || null;
        const mobile = e.target.mobile.value || null;
        const email = e.target.email.value || null;
        const website = e.target.website.value || null;
        const street = e.target.street.value || null;
        const city = e.target.city.value || null;
        const state = e.target.state.value || null;
        const zipCode = e.target.zipCode.value || null;
        const country = e.target.country.value || null;
        const emailOptOut = e.target.emailOptOut.value || null;
        const description = e.target.description.value || null;
        const skype = e.target.skype.value || null;
        const phone = e.target.phone.value || null;
        const fax = e.target.fax.value || null;


        const contact = {
            contactOwner,
            accountName,
            leadSource,
            firstName,
            contactName,
            lastName,
            company,
            mobile,
            email,
            website,
            description,
            phone,
            fax,
            skype,
            emailOptOut,
            address: {
                street,
                city,
                state,
                zipCode,
                country
            }
        };

        axios.post('http://localhost:5000/api/v1/contact', contact)
            .then(response => {
                if (response.data.status === 'success') {
                    alert('Contact saved!');
                }
                return response.data;
            })

    }
    return (
        <div>
            <header className={styles.formHeader}>
                <h3>Create Contact</h3>
                <div>
                    <button>Cancel</button>
                    <button>Save and New</button>
                    <button>Save</button>
                </div>
            </header>
            <main>
                <form action="" onSubmit={handleSubmit}>
                    <div className={styles.image}>
                        <h3>Contact Image</h3>
                        <input type="file" name="" id="" placeholder='' />
                    </div>
                    <div className={styles.dataLists}>
                        <div>
                            <label htmlFor="">Contact Owner</label>
                            <input type="text" list='contactOwner' name='contactOwner' />
                            <datalist id='contactOwner'>
                                {
                                    contactOwner.map((owner, index) =>
                                        <option key={index} value={owner}>{owner}</option>
                                    )
                                }
                            </datalist>
                        </div>
                        <div>
                            <label htmlFor="">Account Name</label>
                            <input type="text" list='accountName' name='accountName' />
                            <datalist id='accountName'>
                                {
                                    contactOwner.map((owner, index) =>
                                        <option key={index} value={owner}>{owner}</option>
                                    )
                                }
                            </datalist>
                        </div>

                        <div>
                            <label htmlFor="">Lead Source</label>
                            <input type="text" list='leadSource' name='leadSource' />
                            <datalist id='leadSource'>
                                {
                                    leadSource.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>
                    </div>
                    <section className={styles.information}>
                        <div>
                            <label htmlFor="">First Name</label>
                            <input type="text" name="firstName" id="" required />
                        </div>

                        <div>
                            <label htmlFor="">Last Name</label>
                            <input type="text" name="lastName" id="" required />
                        </div>
                        <div>
                            <label htmlFor="">Title</label>
                            <input type="text" name="title" id="" required />
                        </div>
                        <div>
                            <label htmlFor="">Company</label>
                            <input type="text" name="company" id="" />
                        </div>

                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Website</label>
                            <input type="text" name="website" id="" />
                        </div>

                        <div>
                            <label htmlFor="">Skype ID</label>
                            <input type="text" name="skype" id="" />
                        </div>

                        <div>
                            <label htmlFor="">Phone</label>
                            <input type="number" name="phone" id="" />
                        </div>

                        <div>
                            <label htmlFor="">Mobile</label>
                            <input type="number" name="mobile" id="" />
                        </div>

                        <div>
                            <label htmlFor="">Fax</label>
                            <input type="number" name="fax" id="" />
                        </div>
                    </section>

                    <section className={styles.information}>
                        <div>
                            <label htmlFor="">Street</label>
                            <input type="text" name="street" id="" />
                        </div>

                        <div>
                            <label htmlFor="">City</label>
                            <input type="text" name="city" id="" />
                        </div>

                        <div>
                            <label htmlFor="">State</label>
                            <input type="text" name="state" id="" />
                        </div>

                        <div>
                            <label htmlFor="">ZIP Code</label>
                            <input type="number" name="zipCode" id="" />
                        </div>

                        <div>
                            <label htmlFor="">Country</label>
                            <input type="text" name="country" id="" />
                        </div>
                    </section>

                    <section className={styles.descriptionAndEmainOptArea}>
                        <div>
                            <label htmlFor="">Email Opt Out</label>
                            <input type="checkbox" name="emailOptOut" id="" />
                        </div>
                        <div className={styles.descriptionInfo}>
                            <label htmlFor="">Description</label>
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

export default CreateNewContact