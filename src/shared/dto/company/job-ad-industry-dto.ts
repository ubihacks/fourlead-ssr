import { IndustryDto } from '../primary-data/industry-dto';

export interface IJobAdIndustryDto {
    id: number;
    jobAdId: number;
    industryId: number|undefined;
    industryName:string;
    industry: IndustryDto;
}


export class JobAdIndustryDto implements IJobAdIndustryDto {
    static fromJS(data: any): JobAdIndustryDto {
        data = typeof data === 'object' ? data : {};
        const result = new JobAdIndustryDto();
        result.init(data);
        return result;
    }
    id: number;
    jobAdId: number;
    industryId: number|undefined;
    industryName:string;
    industry: IndustryDto;


    constructor(data?: IJobAdIndustryDto) {
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
            this.id = data['id'];
            this.jobAdId = data['jobAdId'];
            this.industryId = data['industryId'];
            this.industryName = data['industryName'];
            this.industry = data['industry'];


        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['jobAdId'] = this.jobAdId;
        data['industryId'] = this.industryId;
        data['industryName'] = this.industryName;
        data['industry'] = this.industry;

        return data;
    }

    clone(): JobAdIndustryDto {
        const json = this.toJSON();
        const result = new JobAdIndustryDto();
        result.init(json);
        return result;
    }
}
