import React, {useEffect, useState } from 'react';
import {Button, Col, Row } from 'react-bootstrap';
import { IRecruitmentPortalCandidate } from '../modal/IRecruitmentPortalCandidate';
import CandidateRecruitmentDate from './CandidateRecruitmentDate';
import TotalExperienceCalculate from './TotalExperienceCalculate';

type Props = {
    viewCandiateRecruitmentDetails: (candiateRecruitmentDetails: IRecruitmentPortalCandidate) => void;
}

const CandidateRecruitmentDetailsFetch = (props: Props) => {
    const [candidate, setCandidate] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/candidate")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setCandidate(data);
            })
    },[])
    console.log(candidate);

    return(
        <tbody>
        {candidate.map((candidate:IRecruitmentPortalCandidate) => {
            return(
                <tr key={candidate.candidateId}>
                    <td>{candidate.candidateFirstName}  {candidate.candidateLastName}</td>
                    <td><TotalExperienceCalculate experience={candidate.candidateTotalExperience}/></td>
                    <td><CandidateRecruitmentDate candidateDate={candidate.candidateNoticePeriodStartDate}/></td>
                    <td>
                        <div>
                            <Row>
                                <Col>
                                    <Button variant="primary" onClick={()=>props.viewCandiateRecruitmentDetails(candidate)}>Get Details</Button>
                                </Col>
                                {/*<Col>
                                    <Button variant="primary">Edit</Button>
                                </Col>
                                <Col>
                                    <Button variant="danger">Delete</Button>
                                </Col>*/}
                            </Row>
                        </div>
                    </td>
                </tr>
            );}
        )}
        </tbody>
    );
}

export default CandidateRecruitmentDetailsFetch;


