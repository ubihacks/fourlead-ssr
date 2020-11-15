
export enum CompanyBalanceCatalog
{
    Credit = 1,
    Debit=2
}
export interface ICompanyBalanceDto {
    type:CompanyBalanceCatalog;
    tenantId: number;
    amount: number;
    expiry: number;
    costRM: number;
}

export class CompanyBalanceDto implements ICompanyBalanceDto {
    static fromJS(data: any): CompanyBalanceDto {
        data = typeof data === 'object' ? data : {};
        const result = new CompanyBalanceDto();
        result.init(data);
        return result;
    }
    type:CompanyBalanceCatalog;
    tenantId: number;
    amount: number;
    expiry: number;
    costRM: number;

    constructor(data?: ICompanyBalanceDto) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.type = data['type'];
            this.tenantId = data['tenantId'];
            this.amount = data['amount'];
            this.expiry = data['expiry'];
            this.costRM = data['costRM'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['type'] = this.type;
        data['tenantId'] = this.tenantId;
        data['amount'] = this.amount;
        data['expiry'] = this.expiry;
        data['costRM'] = this.costRM;

        return data;
    }

    clone(): CompanyBalanceDto {
        const json = this.toJSON();
        const result = new CompanyBalanceDto();
        result.init(json);
        return result;
    }
}


export interface ICompanyStatsDto {
    companyFollowersCount: number;
    jobOpeningCount: number;
    activeJobCount: number;
    completedJobCount: number;
    draftedJobCount: number;
    pendingJobCount: number;
    candidateCount: number;
    jobApplicationCount: number;
    requestedInterviewCount: number;
    myCandidateCount: number;
    creditAmount: number;
    expiredJobCount: number;
}


export class CompanyStatsDto implements ICompanyStatsDto {
    static fromJS(data: any): CompanyStatsDto {
        data = typeof data === 'object' ? data : {};
        const result = new CompanyStatsDto();
        result.init(data);
        return result;
    }
    companyFollowersCount: number;
    jobOpeningCount: number;
    activeJobCount: number;
    completedJobCount: number;
    draftedJobCount: number;
    pendingJobCount: number;
    candidateCount: number;
    jobApplicationCount: number;
    requestedInterviewCount: number;
    myCandidateCount: number;
    creditAmount: number;
    expiredJobCount: number;

    constructor(data?: ICompanyStatsDto) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.companyFollowersCount = data['companyFollowersCount'];
            this.jobOpeningCount = data['jobOpeningCount'];
            this.activeJobCount = data['activeJobCount'];
            this.completedJobCount = data['completedJobCount'];
            this.draftedJobCount = data['draftedJobCount'];
            this.pendingJobCount = data['pendingJobCount'];
            this.candidateCount = data['candidateCount'];
            this.jobApplicationCount = data['jobApplicationCount'];
            this.requestedInterviewCount = data['requestedInterviewCount'];
            this.myCandidateCount = data['myCandidateCount'];
            this.creditAmount = data['creditAmount'];
            this.expiredJobCount = data['expiredJobCount'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['companyFollowersCount'] = this.companyFollowersCount;
        data['jobOpeningCount'] = this.jobOpeningCount;
        data['activeJobCount'] = this.activeJobCount;
        data['completedJobCount'] = this.completedJobCount;
        data['draftedJobCount'] = this.draftedJobCount;
        data['pendingJobCount'] = this.pendingJobCount;
        data['candidateCount'] = this.candidateCount;
        data['jobApplicationCount'] = this.jobApplicationCount;
        data['requestedInterviewCount'] = this.requestedInterviewCount;
        data['myCandidateCount'] = this.myCandidateCount;
        data['creditAmount'] = this.creditAmount;
        data['expiredJobCount'] = this.expiredJobCount;
        return data;
    }

    clone(): CompanyStatsDto {
        const json = this.toJSON();
        const result = new CompanyStatsDto();
        result.init(json);
        return result;
    }
}
