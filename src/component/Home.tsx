import "../style/Home.style.css";
import React, {useState} from "react";

import '../style/Home.style.css'
import {IRecruitmentPortalCandidate, pageEnum } from "../pages/recruitmentPortalCandidate/modal/IRecruitmentPortalCandidate";
import CandidateRecruitmentList from "../pages/recruitmentPortalCandidate/component/CandidateRecruitmentList";
import CandidateRecruitmentDetailsModal from "../pages/recruitmentPortalCandidate/component/CandidateRecruitmentDetailsModal";

const Home = () => {
    const [showPage, setShowPage] = useState(pageEnum.list);
    const [showModal, setShowModal] = useState(false);
    const [candidateData, setCandidateData] = useState(null as IRecruitmentPortalCandidate | null);
    const changeModalState = (candidateData: IRecruitmentPortalCandidate) => {
        setShowModal(true);
        setCandidateData(candidateData);
    }

    const onCloseHandler = () => {
        setShowModal(false);
    }

    return(
        <React.Fragment>
            <section className="section-content">
                {showPage === pageEnum.list && (<>
                        {/*<button type="button" value="ADD CANDIDATE DETAILS" onClick={onAddEmployeeClickHandler} className="btn btn-warning float-end">ADD EMPLOYEE</button>*/}
                        <CandidateRecruitmentList sentCandidateDataToHome={(candidateData:IRecruitmentPortalCandidate) => changeModalState(candidateData)}/></>
                )}
                {showModal && candidateData !== null && <CandidateRecruitmentDetailsModal candidateData={candidateData} onClose={onCloseHandler}/>}

            </section>
        </React.Fragment>
    )
};

export default Home;