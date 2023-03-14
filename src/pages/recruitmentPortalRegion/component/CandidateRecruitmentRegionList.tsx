import React from 'react'
import CandidateRecruitmentRegionFetch from './CandidateRecruitmentRegionFetch';
import '../../../style/Home.style.css';



const CandidateRecruitmentRegionList = () => {
    return(
        <div className="section-content">
            <article><h3 className="list-header">LIST OF REGION</h3></article>
            <div className="mt-3">
                <table className="table table-striped table-sm">
                    <thead className="thread-light">
                    <tr>
                        <th>Region Id</th>
                        <th>Region Name</th>
                        <th>Active Status</th>
                    </tr>
                    </thead>
                    <CandidateRecruitmentRegionFetch />
                </table>
            </div>
        </div>
    );
}

export default CandidateRecruitmentRegionList