import React, { useState, useEffect, useRef } from 'react';
import styles from '../SharedStyles/createFormStyles.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CreatNewLead() {
    const { id } = useParams();
    const [lead, setLead] = useState({});
    const [edit, setEdit] = useState(false);
    const leadOwners = ["Rokon", "Naeim", "Reza"];
    const leadSources = ['Advertisement', 'LinkedIn', 'Facebook', 'Instagram'];
    const leadStatuses = ['Attempted to Contact', 'Contact in Future', 'Contacted', 'Junk Lead', 'Lost Lead', 'Not COntacted'];
    const ratings = ['Acquired', 'Active', 'Market Failed', 'Project Cancelled', 'Shut Down'];
    const imageInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState('');
    const imageAPIkey = "ba174ce3bc57048f9cd66363c4b7ddfe";

    const { leadOwner, leadSource, leadStatus, rating, firstName, lastName, leadName, company, mobile, email, emailOptOut, description, address } = lead;

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/lead/${id}`)
            .then(response => setLead(response.data.data))
    }, [])

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
            _id: id,
            imageUrl: photoUrl,
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

        axios.put('http://localhost:5000/api/v1/lead', lead)
            .then(response => {
                if (response.data.status === 'success') {
                    setEdit(!edit);
                    alert('Lead saved!');
                }
                return response.data;
            })
    }

    const handleChoosePhoto = (e) => {
        e.preventDefault();
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
            console.log(image);
            setPhotoUrl(image);
        })
    }

    const handleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div className={styles.formContainer}>
            <header className={styles.formHeader}>
                <h3>Create Lead</h3>
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
                            <label htmlFor="">Lead Owner </label>
                            <input type="text" list='leadOwner' name='leadOwner' defaultValue={leadOwner} />
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
                            <input type="text" list='leadSource' name='leadSource' defaultValue={leadSource} />
                            <datalist id='leadSource'>
                                {
                                    leadSources.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>

                        <div>
                            <label htmlFor="">Lead Status</label>
                            <input type="text" list='leadStatus' name='leadStatus' defaultValue={leadStatus} />
                            <datalist id='leadStatus'>
                                {
                                    leadStatuses.map((source, index) =>
                                        <option key={index} value={source}>{source}</option>
                                    )
                                }
                            </datalist>
                        </div>

                        <div>
                            <label htmlFor="">Rating </label>
                            <input type="text" list='rating' name='rating' defaultValue={rating} />
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
                            <label htmlFor="">Title</label>
                            <input type="text" name="title" id="" defaultValue={leadName} required />
                        </div>
                        <div>
                            <label htmlFor="">Company </label>
                            <input type="text" name="company" id="" defaultValue={company} />
                        </div>

                        <div>
                            <label htmlFor="">Email </label>
                            <input type="email" name="email" id="" defaultValue={email} />
                        </div>

                        <div>
                            <label htmlFor="">Mobile </label>
                            <input type="number" name="mobile" id="" defaultValue={mobile} />
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
                            <input type="checkbox" name="emailOptOut" id="" defaultValue={emailOptOut} />
                        </div>

                        <div className={styles.descriptionInfo}>
                            <label htmlFor="">Description </label>
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

export default CreatNewLead