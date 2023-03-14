import React from 'react'

type Props = {
    experience:string;
}

const TotalExperienceCalculate = (props: Props) => {
    let expAfterSplitingYearAndMonth = props.experience.split(',');

    return(<div>{expAfterSplitingYearAndMonth[0] } years {expAfterSplitingYearAndMonth[1]} months</div>);
}

export default TotalExperienceCalculate;