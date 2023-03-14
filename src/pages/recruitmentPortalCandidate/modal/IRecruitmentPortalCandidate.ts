import { IRecruitmentPortalRegion } from "../../recruitmentPortalRegion/model/IRecruitmentPortalRegion";

export interface IRecruitmentPortalCandidate {
    candidateId?: number;
    candidateFirstName?: string;
    candidateLastName?: string;
    candidateAge: Date;

    candidateNoticePeriodStartDate: Date;
    candidateTotalExperience: string;
    candidateRegion?: IRecruitmentPortalRegion;
}

export enum pageEnum {
    list,
    add,
}