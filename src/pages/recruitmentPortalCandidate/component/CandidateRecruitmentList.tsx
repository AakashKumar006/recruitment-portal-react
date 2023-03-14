import React from 'react';
import { IRecruitmentPortalCandidate } from '../modal/IRecruitmentPortalCandidate';
import CandidateRecruitmentDetailsFetch from './CandidateRecruitmentDetailsFetch';

type Props = {
    sentCandidateDataToHome: (candidateData: IRecruitmentPortalCandidate) => void;
}

const CandidateRecruitmentList = (props: Props) => {
    const changeModalState = (candidateDetails: IRecruitmentPortalCandidate) => {
        props.sentCandidateDataToHome(candidateDetails);
    }

    return(
        <React.Fragment>
            <div>
                <article><h3 className="list-header">LIST OF CANDIDATES</h3></article>
                <div className="mt-3">
                    <table className="table table-striped table-sm">
                        <thead className="thread-light">
                        <tr>
                            <th>Candidate Name</th>
                            <th>Total experience</th>
                            <th>How many days to his lasst working day </th>
                            <th>Show Details</th>
                        </tr>
                        </thead>
                        <CandidateRecruitmentDetailsFetch viewCandiateRecruitmentDetails={(candidateData:IRecruitmentPortalCandidate) => changeModalState(candidateData)}/>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CandidateRecruitmentList;




