import React, { useState, useEffect } from 'react';
import { deals } from '../../fakeData/data';
import DraggableDeal from './DraggableDeal';
import styles from './DisplayDealsStageView.module.css';
import { useDrop } from 'react-dnd';
import { fetchDeals, updateDeal } from '../../redux/Deals';
import { useSelector, useDispatch } from 'react-redux';

function NeedsAnalysisStage() {
    const deals = useSelector(state => state.deals);
    const [dropped, setDropped] = useState(false);
    const dispatch = useDispatch();
    let dealsInNeedsAnalysisStage;
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'div',
        drop: (item) => addDealToBoard(item._id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }), [deals.deals.data])



    useEffect(() => {
        dispatch(fetchDeals());
    }, [dropped])

    if (deals.loading) {
        return <h3>Loading...</h3>
    }
    if (deals.deals.data) {
        dealsInNeedsAnalysisStage = deals.deals.data.filter(deal => deal.stage === 'Needs Analysis');
    }

    const addDealToBoard = (id) => {
        const droppedDeal = deals.deals.data.find(deal => deal._id === id);
        console.log(droppedDeal);
        const { stage, ...rest } = droppedDeal;
        const newDeal = { stage: 'Needs Analysis', ...rest };
        dispatch(updateDeal(newDeal));
        setDropped(!dropped);
        console.log(newDeal);
    }

    return (
        <div>
            <header>
                <div className={styles.stageName}>

                    <span>Needs Analysis . 10%</span>
                    <h5>$0 . 0 Deals</h5>
                </div>
            </header>
            <main className={styles.dealsOnStage} ref={drop}>
                {
                    dealsInNeedsAnalysisStage && dealsInNeedsAnalysisStage.map((deal) => <DraggableDeal key={deal._id} deal={deal} />)
                }
            </main>

        </div>
    )
}

export default NeedsAnalysisStage