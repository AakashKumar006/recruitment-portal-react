import React from 'react';

type Props = {
    candidateDate:Date;
}

const CandidateRecruitmentDate = (props:Props) => {
    var date = new Date(props.candidateDate);
    const month = date.toLocaleString('en-US',{ month:'long'});
    const day = date.toLocaleString('en-US',{ day: '2-digit'});
    const year = date.getFullYear();
    return(
        <div>{day} {month} {year }</div>
    );
}

export default CandidateRecruitmentDate;