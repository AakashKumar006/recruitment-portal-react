import React from 'react'
import '../modal/CandidateRecruitmentErrorModal.css'
type Props = {
    onClose: () => void;
    errorMessage: string ;
}

const CandidateRecruitmentErrorModal = (props: Props) => {
    const {onClose, errorMessage } = props;
    return(
        <div>
            <div className="modalBackgroundError">
                <div className="modalContainerError">
                    <div className="title">
                        <h5>Error Message</h5>
                    </div>
                    <div>
                        <center><small>{errorMessage}</small></center>
                    </div>

                    <div className="footer">
                        <button onClick={onClose} id="cancelBtn">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CandidateRecruitmentErrorModal;
