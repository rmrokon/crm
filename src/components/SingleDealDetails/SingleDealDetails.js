import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from '../SharedStyles/createFormStyles.module.css';

function SingleDealDetails() {
    const { id } = useParams();
    const [deal, setDeal] = useState({});
    const [edit, setEdit] = useState(false);
    const dealOwners = ["Rokon", "Naeim", "Reza"];
    const accountNames = ['account1', 'account2', 'account3'];
    const dealType = ['Existing Business', 'New Business'];
    const leadSources = ['Advertisement', 'LinkedIn', 'Facebook', 'Instagram'];
    const dealStage = ['Qualification', 'Needs Analysis', 'Value Proposition', 'Identify Decision Makers', 'Proposal', 'Closed Won', 'Closed Lost'];
    const contactNames = ["Rokon", "Naeim", "Reza"];
    const campaignSources = ['campaign1', 'campaign2', 'campaign3'];

    const { dealOwner, dealName, leadSource, accountName, rating, stage, contactName, campaignSource, nextStep, amount, probability, expectedRevenue, closingDate, description } = deal;


    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/deal/${id}`)
            .then(response => setDeal(response.data.data))
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const deal = {
            _id: id,
            dealOwner: e.target.dealOwner.value || null,
            dealName: e.target.dealName.value || null,
            leadSource: e.target.leadSource.value || null,
            accountName: e.target.accountName.value || null,
            rating: e.target.rating.value || null,
            stage: e.target.stage.value || null,
            contactName: e.target.contactName.value || null,
            campaignSource: e.target.campaignSource.value || null,
            nextStep: e.target.nextStep.value || null,
            amount: e.target.amount.value || null,
            probability: e.target.probability.value || null,
            expectedRevenue: e.target.expectedRevenue.value || null,
            closingDate: e.target.closingDate.value || null,
            description: e.target.description.value || null,
        }

        axios.put('http://localhost:5000/api/v1/deal', deal)
            .then(response => {
                if (response.data.data.modifiedCount === 1) {
                    setEdit(!edit);
                    alert('Deal Updated!');
                }
                return response.data;
            })

    }

    const handleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div className={styles.formContainer}>
            <header className={styles.formHeader}>
                <h3>Deal: {id}</h3>
                {!edit && <button onClick={handleEdit} className={styles.editBtn}>Edit <i class="fas fa-pen"></i></button>}
            </header>
            <form
                className={styles.createItemForm}
                action=""
                onSubmit={handleSubmit}
            >
                {edit && <div className={styles.createButton}>
                    <input type="submit" value="Save" />
                    <button onClick={handleEdit} className={styles.cancelBtn}>Cancel</button>
                </div>}
                <section className={styles.dataLists}>
                    <div>
                        <label htmlFor="">Deal Owner </label>
                        <input
                            type="text"
                            list='dealOwners'
                            name='dealOwner'
                            defaultValue={dealOwner}
                            readOnly={!edit}
                        />
                        <datalist id='dealOwners'>
                            {
                                dealOwners.map((owner, index) =>
                                    <option key={index} value={owner}>{owner}</option>
                                )
                            }
                        </datalist>
                    </div>

                    <div>
                        <label htmlFor="">Lead Source </label>
                        <input
                            type="text"
                            list='leadSource'
                            name='leadSource'
                            defaultValue={leadSource}
                            readOnly={!edit}
                        />
                        <datalist id='leadSource'>
                            {
                                leadSources.map((source, index) =>
                                    <option key={index} value={source}>{source}</option>
                                )
                            }
                        </datalist>
                    </div>

                    <div>
                        <label htmlFor="">Account Name </label>
                        <input
                            type="text"
                            list='accountNames'
                            name='accountName'
                            defaultValue={accountName}
                            readOnly={!edit}
                        />
                        <datalist id='accountNames'>
                            {
                                accountNames.map((source, index) =>
                                    <option key={index} value={source}>{source}</option>
                                )
                            }
                        </datalist>
                    </div>

                    <div>
                        <label htmlFor="">Type </label>
                        <input
                            type="text"
                            list='rating'
                            name='rating'
                            defaultValue={rating}
                            readOnly={!edit}
                        />
                        <datalist id='rating'>
                            {
                                dealType.map((source, index) =>
                                    <option key={index} value={source}>{source}</option>
                                )
                            }
                        </datalist>
                    </div>
                    <div>
                        <label htmlFor="">Stage </label>
                        <input
                            type="text"
                            list='stage'
                            name='stage'
                            defaultValue={stage}
                            readOnly={!edit}
                        />
                        <datalist id='stage'>
                            {
                                dealStage.map((source, index) =>
                                    <option key={index} value={source}>{source}</option>
                                )
                            }
                        </datalist>
                    </div>
                    <div>
                        <label htmlFor="">Contact Name </label>
                        <input
                            type="text"
                            list='contactName'
                            name='contactName'
                            defaultValue={contactName}
                            readOnly={!edit}
                        />
                        <datalist id='contactName'>
                            {
                                contactNames.map((source, index) =>
                                    <option key={index} value={source}>{source}</option>
                                )
                            }
                        </datalist>
                    </div>
                    <div>
                        <label htmlFor="">Campaign Source </label>
                        <input
                            type="text"
                            list='campaignSource'
                            name='campaignSource'
                            defaultValue={campaignSource}
                            readOnly={!edit}
                        />
                        <datalist id='campaignSource'>
                            {
                                campaignSources.map((source, index) =>
                                    <option key={index} value={source}>{source}</option>
                                )
                            }
                        </datalist>
                    </div>
                </section>
                <section className={styles.information}>
                    <div>
                        <label htmlFor="">Deal Name </label>
                        <input
                            type="text"
                            name="dealName"
                            id=""
                            defaultValue={dealName}
                            readOnly={!edit}
                        />
                    </div>

                    <div>
                        <label htmlFor="">Next Step </label>
                        <input
                            type="text"
                            name="nextStep"
                            id=""
                            defadefaultValue={nextStep}
                            readOnly={!edit}
                        />
                    </div>

                    <div>
                        <label htmlFor="">Amount </label>
                        <input
                            type="number"
                            name="amount" id=""
                            defaultValue={amount}
                            readOnly={!edit}
                        />
                    </div>

                    <div>
                        <label htmlFor="">Probability (%) </label>
                        <input
                            type="number"
                            name="probability"
                            id=""
                            defaultValue={probability}
                            readOnly={!edit}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Expected Revenue </label>
                        <input
                            type="number"
                            name="expectedRevenue"
                            id=""
                            defaultValue={expectedRevenue}
                            readOnly={!edit}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Closing Date </label>
                        <input
                            type="date"
                            name="closingDate"
                            id=""
                            defaultValue={closingDate}
                            readOnly={!edit}
                        />
                    </div>
                </section>
                <section className={styles.descriptionAndEmainOptArea}>
                    <div className={styles.descriptionInfo}>
                        <label htmlFor="">Description </label>
                        <textarea
                            name="description"
                            id=""
                            cols="30"
                            rows="10"
                            defaultValue={description}
                            readOnly={!edit}
                        ></textarea>
                    </div>
                </section>
                {edit && <div className={styles.createButton}>
                    <input type="submit" value="Save" />
                    <button onClick={handleEdit} className={styles.cancelBtn}>Cancel</button>
                </div>}
            </form>
        </div>
    )
}

export default SingleDealDetails