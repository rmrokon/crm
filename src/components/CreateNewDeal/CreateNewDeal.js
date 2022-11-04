import React from 'react';
import styles from '../SharedStyles/createFormStyles.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateNewDeal() {
    const dealOwners = ["Rokon", "Naeim", "Reza"];
    const accountNames = ['account1', 'account2', 'account3'];
    const dealType = ['Existing Business', 'New Business'];
    const leadSource = ['Advertisement', 'LinkedIn', 'Facebook', 'Instagram'];
    const dealStage = ['Qualification', 'Needs Analysis', 'Value Proposition', 'Identify Decision Makers', 'Proposal', 'Closed Won', 'Closed Lost'];
    const contactNames = ["Rokon", "Naeim", "Reza"];
    const campaignSource = ['campaign1', 'campaign2', 'campaign3'];
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const deal = {
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

        const result = await axios.post('http://localhost:5000/api/v1/deal', deal)
            .then(response => {
                if (response.data.status === 'success') {
                    alert('Deal saved!');
                }
                return response.data;
            })

        console.log(result);

    }

    const handleCancel = () => {
        navigate('/deals');
    }

    return (
        <div className={styles.formContainer}>
            <header className={styles.formHeader}>
                <h3>Create New Deal</h3>
            </header>
            <form className={styles.createItemForm} action="" onSubmit={handleSubmit}>
                <section className={styles.dataLists}>
                    <div>
                        <label htmlFor="">Deal Owner </label>
                        <input type="text" list='dealOwners' name='dealOwner' />
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
                        <label htmlFor="">Account Name </label>
                        <input type="text" list='accountNames' name='accountName' />
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
                        <input type="text" list='rating' name='rating' />
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
                        <input type="text" list='stage' name='stage' />
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
                        <input type="text" list='contactName' name='contactName' />
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
                        <input type="text" list='campaignSource' name='campaignSource' />
                        <datalist id='campaignSource'>
                            {
                                campaignSource.map((source, index) =>
                                    <option key={index} value={source}>{source}</option>
                                )
                            }
                        </datalist>
                    </div>
                </section>
                <section className={styles.information}>
                    <div>
                        <label htmlFor="">Deal Name </label>
                        <input type="text" name="dealName" id="" />
                    </div>

                    <div>
                        <label htmlFor="">Next Step </label>
                        <input type="text" name="nextStep" id="" />
                    </div>

                    <div>
                        <label htmlFor="">Amount </label>
                        <input type="number" name="amount" id="" />
                    </div>

                    <div>
                        <label htmlFor="">Probability (%) </label>
                        <input type="number" name="probability" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Expected Revenue </label>
                        <input type="number" name="expectedRevenue" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Closing Date </label>
                        <input type="date" name="closingDate" id="" />
                    </div>
                </section>
                <section className={styles.descriptionAndEmainOptArea}>
                    <div className={styles.descriptionInfo}>
                        <label htmlFor="">Description </label>
                        <textarea name="description" id="" cols="30" rows="10"></textarea>
                    </div>
                </section>
                <div className={styles.createButton}>
                    <input type="submit" value="Save" />
                    <button onClick={handleCancel} className={styles.cancelBtn}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default CreateNewDeal