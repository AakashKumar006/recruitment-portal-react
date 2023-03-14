import React from 'react';
import { IRecruitmentPortalCandidate } from '../modal/IRecruitmentPortalCandidate';
import "../modal/Modal.css";
import TotalExperienceCalculate from './TotalExperienceCalculate';

type Props = {
    onClose: () => void;
    candidateData: IRecruitmentPortalCandidate ;
}

const CandidateRecruitmentDetailsModal = (props:Props) => {
    const { onClose, candidateData } = props;
    let expAfterSplitingYearAndMonth = candidateData.candidateTotalExperience.split(',');

    return (
        <div>
            <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h5>Candidate Recruitment Details</h5>
                </div>
                <table className="table table-user-information">
                    <tbody>
                    <tr>
                        <td className="col-sm-12">Candidate First Name  :  {candidateData.candidateFirstName}</td>
                    </tr>
                    <tr>
                        <td className="col-sm-12">Candidate Last Name  :  {candidateData.candidateLastName}</td>
                    </tr>
                    <tr>
                        <td className="col-sm-12">Age  :  {candidateData.candidateAge.toString()}</td>
                    </tr>
                    <tr>
                        <td className="col-sm-12">Date of start of notice period  :  {candidateData.candidateFirstName}</td>
                    </tr>
                    <tr>
                        <td className="col-sm-12">Total Experience : {expAfterSplitingYearAndMonth[0]} year {expAfterSplitingYearAndMonth[1]} month  </td>
                    </tr>
                    <tr>
                        <td className="col-sm-12">Region  :  {candidateData.candidateRegion?.regionName}</td>
                    </tr>
                    </tbody>
                </table>

                <div className="footer">
                    <button onClick={onClose} id="cancelBtn">Close</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CandidateRecruitmentDetailsModal;