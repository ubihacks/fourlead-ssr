
export interface IUserJobStatsDto {
    newJobCount:number;
    appliedJobCount: number;
    bookmarkedJobCount: number;
    recommendedJobCount: number;
}


export class UserJobStatsDto implements IUserJobStatsDto {
    static fromJS(data: any): UserJobStatsDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserJobStatsDto();
        result.init(data);
        return result;
    }
    newJobCount:number;
    appliedJobCount: number;
    bookmarkedJobCount: number;
    recommendedJobCount: number;
    interviewJobs:number;

    constructor(data?: IUserJobStatsDto) {
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
            this.newJobCount = data['newJobCount'];
            this.appliedJobCount = data['appliedJobCount'];
            this.bookmarkedJobCount = data['bookmarkedJobCount'];
            this.recommendedJobCount = data['recommendedJobCount'];
            this.interviewJobs = data['interviewJobs'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['newJobCount'] = this.newJobCount;
        data['appliedJobCount'] = this.appliedJobCount;
        data['bookmarkedJobCount'] = this.bookmarkedJobCount;
        data['recommendedJobCount'] = this.recommendedJobCount;
        data['interviewJobs'] = this.interviewJobs;
        return data;
    }

    clone(): UserJobStatsDto {
        const json = this.toJSON();
        const result = new UserJobStatsDto();
        result.init(json);
        return result;
    }
}
