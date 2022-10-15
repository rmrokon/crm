import React, { useState, useEffect } from 'react';
import styles from '../SharedStyles/createFormStyles.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CreateNewAccount() {
    const { id } = useParams();
    const [account, setAccount] = useState({});
    const { accountOwner, ownership, industry, accountType, rating, accountName, firstName, lastName,
        company, email, website, skype, phone, mobile, fax, emailOptOut, description, address } = account;

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/account/${id}`)
            .then(response => setAccount(response.data.data))
    }, [])

    const accountOwners = ["Rokon", "Naeim", "Reza"];
    const ownerships = ['Other', 'Private', 'Public', 'Subsidiary'];
    const industries = ['ASP (Application Service Provider)', 'Data/Telecom OEM', 'ERP'];
    const ratings = ['Acquired', 'Active', 'Market Failed', 'Project Cancelled', 'Shut Down'];
    const accountTypes = ['Analyst', 'Competitor', 'Customer', 'Distributor', 'Integrator', 'Investor', 'Other'];

    const handleSubmit = (e) => {
        e.preventDefault();

        const account = {
            _id: id,
            accountOwner: e.target.accountOwner.value,
            ownership: e.target.ownership.value,
            industry: e.target.industry.value,
            accountType: e.target.accountType.value,
            rating: e.target.rating.value,
            accountName: e.target.accountName.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            company: e.target.company.value,
            email: e.target.email.value,
            website: e.target.website.value,
            skype: e.target.skype.value,
            phone: e.target.phone.value,
            mobile: e.target.mobile.value,
            fax: e.target.fax.value,
            address: {
                street: e.target.street.value,
                city: e.target.city.value,
                state: e.target.state.value,
                zipCode: e.target.zipCode.value,
                country: e.target.country.value,
            },
            emailOptOut: e.target.emailOptOut.value,
            description: e.target.description.value,
        }
        console.log(account);
        axios.put('http://localhost:5000/api/v1/account', account)
            .then(response => {
                if (response.data.status === 'success') {
                    alert('Account updated!');
                }
                return response.data;
            })
    }
    return (
        <div>
            <header className={styles.formHeader}>
                <h3>Account : {accountName}</h3>
                <div>
                    <button>Cancel</button>
                    <button>Save and New</button>
                    <button>Save</button>
                </div>
            </header>
            <main>
                <form action="" onSubmit={handleSubmit}>
                    <div className={styles.image}>
                        <h3>Account Image</h3>
                        <input type="file" name="" id="" placeholder='' />
                    </div>
                    <div className={styles.dataLists}>
                        <div>
                            <label htmlFor="">Account Owner: </label>
                            <input type="text" list='accountOwner' name='accountOwner' defaultValue={accountOwner} />
                            <datalist id='accountOwner'>
                                {
                                    accountOwners.map((owner, index) =>
                                        <option key={index} value={owner}>{owner}</option>
                                    )
                                }
                            </datalist>
                        </div>

                        <div>
                            <label htmlFor="">Ownership: </label>
                            <input type="text" list='ownership' name='ownership' defaultValue={ownership && ownership} />
                            <datalist id='ownership'>
                                {
                                    ownerships.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>

                        <div>
                            <label htmlFor="">Industry: </label>
                            <input type="text" list='industry' name='industry' defaultValue={industry && industry} />
                            <datalist id='industry'>
                                {
                                    industries.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>
                        <div>
                            <label htmlFor="">Account Type: </label>
                            <input type="text" list='accountType' name='accountType' defaultValue={accountType && accountType} />
                            <datalist id='accountType'>
                                {
                                    accountTypes.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>

                        <div>
                            <label htmlFor="">Rating: </label>
                            <input type="text" list='rating' name='rating' defaultValue={rating && rating} />
                            <datalist id='rating'>
                                {
                                    ratings.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>
                    </div>
                    <section className={styles.information}>
                        <div>
                            <label htmlFor="">First Name </label>
                            <input type="text" name="firstName" id="" defaultValue={firstName} required />
                        </div>

                        <div>
                            <label htmlFor="">Last Name </label>
                            <input type="text" name="lastName" id="" defaultValue={lastName} required />
                        </div>
                        <div>
                            <label htmlFor="">Account Name</label>
                            <input type="text" name="accountName" id="" defaultValue={accountName && accountName} required />
                        </div>
                        <div>
                            <label htmlFor="">Company </label>
                            <input type="text" name="company" id="" defaultValue={company && company} />
                        </div>

                        <div>
                            <label htmlFor="">Email </label>
                            <input type="email" name="email" id="" defaultValue={email && email} />
                        </div>
                        <div>
                            <label htmlFor="">Website: </label>
                            <input type="text" name="website" id="" defaultValue={website && website} />
                        </div>

                        <div>
                            <label htmlFor="">Skype ID: </label>
                            <input type="text" name="skype" id="" defaultValue={skype && skype} />
                        </div>

                        <div>
                            <label htmlFor="">Phone: </label>
                            <input type="number" name="phone" id="" defaultValue={phone && phone} />
                        </div>

                        <div>
                            <label htmlFor="">Mobile: </label>
                            <input type="number" name="mobile" id="" defaultValue={mobile && mobile} />
                        </div>

                        <div>
                            <label htmlFor="">Fax: </label>
                            <input type="number" name="fax" id="" defaultValue={fax && fax} />
                        </div>
                    </section>

                    <section className={styles.information}>
                        <div>
                            <label htmlFor="">Street </label>
                            <input type="text" name="street" id="" defaultValue={address?.street} />
                        </div>

                        <div>
                            <label htmlFor="">City </label>
                            <input type="text" name="city" id="" defaultValue={address?.city} />
                        </div>

                        <div>
                            <label htmlFor="">State </label>
                            <input type="text" name="state" id="" defaultValue={address?.state} />
                        </div>

                        <div>
                            <label htmlFor="">ZIP Code </label>
                            <input type="number" name="zipCode" id="" defaultValue={address?.zipCode} />
                        </div>

                        <div>
                            <label htmlFor="">Country </label>
                            <input type="text" name="country" id="" defaultValue={address?.country} />
                        </div>
                    </section>

                    <section className={styles.descriptionAndEmainOptArea}>
                        <div>
                            <label htmlFor="">Email Opt Out </label>
                            <input type="checkbox" name="emailOptOut" id="" defaultValue={emailOptOut && emailOptOut} />
                        </div>
                        <div className={styles.descriptionInfo}>
                            <label htmlFor="">Description </label>
                            <textarea name="description" id="" cols="30" rows="10" defaultValue={description}></textarea>
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

export default CreateNewAccount