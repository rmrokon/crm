import React, { useState, useEffect, useRef } from 'react';
import styles from '../SharedStyles/createFormStyles.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CreateNewContact() {
    const { id } = useParams();
    const [contact, setContact] = useState({});
    const [edit, setEdit] = useState(false);
    const contactOwners = ["Rokon", "Naeim", "Reza"];
    const leadSources = ['Advertisement', 'LinkedIn', 'Facebook', 'Instagram'];

    const imageInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState('');
    const imageAPIkey = "ba174ce3bc57048f9cd66363c4b7ddfe";

    const { contactOwner, accountName, leadSource, firstName, contactName, lastName, company, mobile, email, website, emailOptOut, description, skype, phone, fax, address } = contact;

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/contact/${id}`)
            .then(response => setContact(response.data.data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const contactOwner = e.target.contactOwner.value || null;
        const accountName = e.target.accountName.value || null;
        const leadSource = e.target.leadSource.value || null;
        const firstName = e.target.firstName.value || null;
        const contactName = e.target.contactName.value || null;
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
            _id: id,
            imageUrl: photoUrl,
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
        console.log('Before api', contact);
        axios.put('http://localhost:5000/api/v1/contact', contact)
            .then(response => {
                if (response.data.data.modifiedCount === 1) {
                    alert('Contact updated!');
                    setEdit(!edit);
                }
                return response.data;
            })
    }

    const handleChoosePhoto = (event) => {
        event.preventDefault();
        return imageInputRef.current?.click();
    }

    const handleImageChange = (e) => {
        e.preventDefault();
        setSelectedFile(e.target.files[0]);
    }

    const handleFileUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile, selectedFile.name);
        const url = `https://api.imgbb.com/1/upload?key=${imageAPIkey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(result => {
            const image = result?.data?.url;
            setPhotoUrl(image);
        })
    }

    const handleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div>
            <header className={styles.formHeader}>
                <h3>Contact: {id}</h3>
                {!edit && <button onClick={handleEdit} className={styles.editBtn}>Edit <i class="fas fa-pen"></i></button>}
            </header>
            <main>
                <form action="" onSubmit={handleSubmit}>
                    {edit && <div className={styles.createButton}>
                        <input type="submit" value="Save" />
                        <button onClick={handleEdit} className={styles.cancelBtn}>Cancel</button>
                    </div>}
                    <div className={styles.displayImage}>
                        <img src={photoUrl} alt="" />
                        <input onChange={handleImageChange} style={{ display: 'none' }} type="file" name="" id="" placeholder='' ref={imageInputRef} />
                        {
                            edit && <div>
                                <button className={styles.choosePhoto} onClick={handleChoosePhoto}>
                                    Choose
                                </button>
                                <button className={styles.uploadPhoto} onClick={handleFileUpload}>Upload</button>
                            </div>
                        }
                    </div>
                    <div className={styles.dataLists}>
                        <div>
                            <label htmlFor="">Contact Owner</label>
                            <input type="text" list='contactOwner' name='contactOwner'
                                defaultValue={contactOwner} />
                            <datalist id='contactOwner'>
                                {
                                    contactOwners.map((owner, index) =>
                                        <option key={index} value={owner}>{owner}</option>
                                    )
                                }
                            </datalist>
                        </div>
                        <div>
                            <label htmlFor="">Account Name</label>
                            <input type="text" list='accountName' name='accountName'
                                defaultValue={accountName} />
                            <datalist id='accountName'>
                                {
                                    contactOwners.map((owner, index) =>
                                        <option key={index} value={owner}>{owner}</option>
                                    )
                                }
                            </datalist>
                        </div>

                        <div>
                            <label htmlFor="">Lead Source</label>
                            <input type="text" list='leadSource' name='leadSource' defaultValue={leadSource} />
                            <datalist id='leadSource'>
                                {
                                    leadSources.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>
                    </div>
                    <section className={styles.information}>
                        <div>
                            <label htmlFor="">First Name</label>
                            <input type="text" name="firstName" id="" required defaultValue={firstName} />
                        </div>

                        <div>
                            <label htmlFor="">Last Name</label>
                            <input type="text" name="lastName" id="" required defaultValue={lastName} />
                        </div>
                        <div>
                            <label htmlFor="">Title</label>
                            <input type="text" name="contactName" id="" required defaultValue={contactName} />
                        </div>
                        <div>
                            <label htmlFor="">Company</label>
                            <input type="text" name="company" id="" defaultValue={company} />
                        </div>

                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id="" defaultValue={email} />
                        </div>
                        <div>
                            <label htmlFor="">Website</label>
                            <input type="text" name="website" id="" defaultValue={website} />
                        </div>

                        <div>
                            <label htmlFor="">Skype ID</label>
                            <input type="text" name="skype" id="" defaultValue={skype} />
                        </div>

                        <div>
                            <label htmlFor="">Phone</label>
                            <input type="number" name="phone" id="" defaultValue={phone} />
                        </div>

                        <div>
                            <label htmlFor="">Mobile</label>
                            <input type="number" name="mobile" id="" defaultValue={mobile} />
                        </div>

                        <div>
                            <label htmlFor="">Fax</label>
                            <input type="number" name="fax" id="" defaultValue={fax} />
                        </div>
                    </section>

                    <section className={styles.information}>
                        <div>
                            <label htmlFor="">Street</label>
                            <input type="text" name="street" id="" defaultValue={address?.street} />
                        </div>

                        <div>
                            <label htmlFor="">City</label>
                            <input type="text" name="city" id="" defaultValue={address?.city} />
                        </div>

                        <div>
                            <label htmlFor="">State</label>
                            <input type="text" name="state" id="" defaultValue={address?.state} />
                        </div>

                        <div>
                            <label htmlFor="">ZIP Code</label>
                            <input type="number" name="zipCode" id="" defaultValue={address?.zipCode} />
                        </div>

                        <div>
                            <label htmlFor="">Country</label>
                            <input type="text" name="country" id="" defaultValue={address?.country} />
                        </div>
                    </section>

                    <section className={styles.descriptionAndEmainOptArea}>
                        <div>
                            <label htmlFor="">Email Opt Out</label>
                            <input type="checkbox" name="emailOptOut" id="" defaultValue={emailOptOut} />
                        </div>
                        <div className={styles.descriptionInfo}>
                            <label htmlFor="">Description</label>
                            <textarea name="description" id="" cols="30" rows="10" defaultValue={description}></textarea>
                        </div>
                    </section>
                    {edit && <div className={styles.createButton}>
                        <input type="submit" value="Save" />
                        <button onClick={handleEdit} className={styles.cancelBtn}>Cancel</button>
                    </div>}
                </form>
            </main>
        </div>
    )
}

export default CreateNewContact