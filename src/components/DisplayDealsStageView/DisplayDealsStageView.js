import React from 'react';
import ClosedLost from './ClosedLost';
import ClosedWon from './ClosedWon';
import IdentifyDecisionMakers from './IdentifyDecisionMakers';
import NeedsAnalysisStage from './NeedsAnalysisStage';
import Proposal from './Proposal';
import QualificationStage from './QualificationStage';
import ValuePropositionStage from './ValuePropositionStage';
import styles from './DisplayDealsStageView.module.css';

function DisplayDealsStageView() {

    return (
        <div className={styles.dealStages}>
            <QualificationStage />
            <ValuePropositionStage />
            <NeedsAnalysisStage />
            <IdentifyDecisionMakers />
            <Proposal />
            <ClosedWon />
            <ClosedLost />
        </div>
    )
}

export default DisplayDealsStageView