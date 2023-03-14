import React, { useEffect, useState } from 'react'
import { IRecruitmentPortalRegion } from '../model/IRecruitmentPortalRegion'

const CandidateRecruitmentRegionFetch = () => {
    const [region, setRegion] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/region")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setRegion(data);
            })
    },[])
    console.log(region);
    return(
        <tbody>
        {region.map((region:IRecruitmentPortalRegion) => {
            return(
                <tr key={region.regionId}>
                    <td>{region.regionId}</td>
                    <td>{region.regionName}</td>
                    {region.regionActive === 1 && <td>Active</td>}
                    {region.regionActive === 0 && <td>In-Active</td>}
                </tr>
            );}
        )}
        </tbody>
    )
}

export default CandidateRecruitmentRegionFetch;