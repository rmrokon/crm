import React, { useState, useEffect } from 'react';
import DraggableDeal from './DraggableDeal';
import { useDrop } from 'react-dnd';
import { fetchDeals, updateDeal } from '../../redux/Deals';
import { useSelector, useDispatch } from 'react-redux';
import styles from './DisplayDealsStageView.module.css';

function QualificationStage() {
    const deals = useSelector(state => state.deals);
    const [dropped, setDropped] = useState(false);
    const dispatch = useDispatch();
    let dealsInQualificationStage;
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'div',
        drop: (item) => addDealToBoard(item._id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }), [deals.deals.data]);




    useEffect(() => {
        dispatch(fetchDeals());
    }, [dropped])

    if (deals.loading) {
        return <h3>Loading...</h3>
    }
    if (deals.deals.data) {
        dealsInQualificationStage = deals.deals.data.filter(deal => deal.stage === 'Qualification');
    }

    const addDealToBoard = (id) => {
        const droppedDeal = deals.deals.data.find(deal => deal._id === id);
        console.log(droppedDeal);
        const { stage, ...rest } = droppedDeal;
        const newDeal = { stage: 'Qualification', ...rest };
        dispatch(updateDeal(newDeal));
        setDropped(!dropped);
    }
    return (
        <div>
            <header>
                <div className={styles.stageName}>
                    <span>Qualification . 10%</span>
                    <h5>$0 . 0 Deals</h5>
                </div>
            </header>
            <main className={styles.dealsOnStage} ref={drop}>
                {
                    dealsInQualificationStage?.map((deal) => <DraggableDeal key={deal._id} deal={deal} />)
                }
            </main>
        </div>
    )
}

export default QualificationStage