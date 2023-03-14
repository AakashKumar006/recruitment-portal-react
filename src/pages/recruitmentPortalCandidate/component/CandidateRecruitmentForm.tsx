import React, {ChangeEvent, useEffect, useState } from 'react';
import {Button, Col, Row } from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';
import useInput from '../../../hooks/use-input';
import { IRecruitmentPortalRegion } from '../../recruitmentPortalRegion/model/IRecruitmentPortalRegion';
import { IRecruitmentPortalCandidate } from '../modal/IRecruitmentPortalCandidate';
import '../style/CandidateRecruitmentForm.css'
import CandidateRecruitmentErrorModal from './CandidateRecruitmentErrorModal';

const CandidateRecruitmentForm = () => {

    const [showErrorModal, setShowErrorModal] = useState(false);
    const [modalErrorMessage, setModalErrorMessage] = useState("");
    const [regionId, setRegionId] = useState("");
    const [candiateDOB, setCandiateDOB] = useState(new Date());
    const [noticePeriod, setNoticePeriod] = useState(new Date());

    const regionChangeHandler =  (e:any) => {
        setRegionId(e.target.value);
    }

    const dateOfBirthChangeHandler = (e:any) => {
        setCandiateDOB(e.target.value);
    }


    const onCloseModalHandler = () => {
        setShowErrorModal(false);
    }

    const noticePeriodStartChamgeHandler = (e:any) => {
        setNoticePeriod(e.target.value);
    }

    const onCandidateRecruitmentData = (candidateRecruitmentFormData: IRecruitmentPortalCandidate) => {
        fetch('http://localhost:8080/candidate/add',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(candidateRecruitmentFormData)
        }).then(response => response.json())
            .then(response => {
                console.log(response);
            })
        onCloseBtnClickHandler();
    }

    const [region, setRegion] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/region")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setRegion(data);
            })
    },[])

    const {
        value: candidateFirstName,
        hasError: candidateFirstNameHasError,
        valueChangedHandler: candidateFirstNameChangeHandler,
        inputBlurHandler: candidateFirstNameBlurHandler,
        reset: resetcandidateFirstNameInput,
        inputClass: candidateFirstNameInputClass,
        errorMessage: candidateFirstNameErrorMessage
    } = useInput("candidateFirstName","string");

    const {
        value: candidateLastName,
        hasError: candidateLastNameHasError,
        valueChangedHandler: candidateLastNameChangeHandler,
        inputBlurHandler: candidateLastNameBlurHandler,
        reset: resetcandidateLastNameInput,
        inputClass: candidateLastNameInputClass,
        errorMessage: candidateLastNameErrorMessage
    } = useInput("candidateLastName","string");

    const navigate = useNavigate();
    const onCloseBtnClickHandler = () => {
        navigate('/');
    }

    const [totalExpericeYear, setTotalExpericeYear] = useState(0);
    const [totalExpericeMonth, setTotalExpericeMonth] = useState(0);

    const onExperienceYearChangeHandler = (event:any) => {
        setTotalExpericeYear(event.target.value);
    };

    const onExperienceMonthChangeHandler = (event:any) => {
        setTotalExpericeMonth(event.target.value);
    };

    const candidateExperienceCheckHandler = () => {
        let candidateTotalExperienceInMonth = (Number(totalExpericeYear)*12) + Number(totalExpericeMonth);
        if(candidateTotalExperienceInMonth < 24){
            return false;
        } else
            return true;
    }

    let formIsValid = false;
    if(
        candidateLastNameHasError === false &&
        candidateFirstNameHasError === false) {
        formIsValid = true;
    }

    const candidateRecruitmentFormSubmitHandler = (event:any) => {
        if(candidateExperienceCheckHandler() == false){
            setModalErrorMessage("Experience cannot be less then 2 Years");

            setShowErrorModal(true);
            event.preventDefault();
            return;
        }

        if(!formIsValid) {
            return;
        }
        resetcandidateFirstNameInput();
        resetcandidateLastNameInput();
        const candidateRecruitmentFormData: IRecruitmentPortalCandidate = {
            candidateFirstName: candidateFirstName,
            candidateLastName: candidateLastName,
            candidateAge : candiateDOB,
            candidateTotalExperience : ''+totalExpericeYear+','+totalExpericeMonth,
            candidateNoticePeriodStartDate : noticePeriod,
            candidateRegion:{
                regionId: parseInt(regionId),
            }
        }
        onCandidateRecruitmentData(candidateRecruitmentFormData);
    };

    return(
        <React.Fragment>
            <div className="box">
                <form onSubmit={candidateRecruitmentFormSubmitHandler}>
                    <center>
                        <h5>Candidate Recruitment Form</h5>
                    </center>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Candidate First Name</label>
                                <input className={candidateFirstNameInputClass} placeholder="Candidate First Name" value={candidateFirstName} onChange={candidateFirstNameChangeHandler} onBlur={candidateFirstNameBlurHandler} />
                                {candidateFirstNameHasError && <small className="text-danger">{candidateFirstNameErrorMessage}</small>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Candidate Last Name</label>
                                <input className={candidateLastNameInputClass} placeholder="Candidate Last Name" value={candidateLastName} onChange={candidateLastNameChangeHandler} onBlur={candidateLastNameBlurHandler}/>
                                {candidateLastNameHasError && <small className="text-danger">{candidateLastNameErrorMessage}</small>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Date Of Birth</label>
                                <input type="date" className="form-control"  placeholder="Enter Date Of Birth" onChange={dateOfBirthChangeHandler}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Start Date Of Notice Period</label>
                                <input type="Date" className="form-control"  placeholder="Notice Period Start Date" onChange={noticePeriodStartChamgeHandler}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Total Experience</label>
                                <div>
                                    <input type="number" min={0} max={20} style={{width:"65px",height: "32px"}} value={totalExpericeYear} onChange={onExperienceYearChangeHandler}/> : year
                                    &nbsp;&nbsp;&nbsp;&nbsp;<input type="number" min={0} max={12} style={{width:"65px",height: "32px"}} value={totalExpericeMonth} onChange={onExperienceMonthChangeHandler}/> : Months
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Region</label>
                                <select className="form-control" onChange={regionChangeHandler}>
                                    <option value={0}>Select Region</option>
                                    {region.map((region:IRecruitmentPortalRegion) => {
                                        return(
                                            <React.Fragment>
                                                {region.regionActive === 0 && <option disabled={true} value={region.regionId}>{region.regionName}</option>}
                                                {region.regionActive === 1 && <option value={region.regionId}>{region.regionName}</option>}
                                            </React.Fragment>
                                        );}
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                    <center>
                        <Row className="mt-4">
                            <Col>
                                <Button variant="success" onClick={onCloseBtnClickHandler}>Close Form</Button>
                            </Col>
                            <Col>
                                <Button type="submit" variant="primary" disabled={!formIsValid}>Submit Form</Button>
                            </Col>
                        </Row>
                    </center>
                </form>
            </div>

            {showErrorModal && <CandidateRecruitmentErrorModal onClose={onCloseModalHandler} errorMessage={modalErrorMessage}/>}
        </React.Fragment>
    );
}

export default CandidateRecruitmentForm;