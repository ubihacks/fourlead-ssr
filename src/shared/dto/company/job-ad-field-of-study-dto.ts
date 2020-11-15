import { FieldOfStudyDto } from '../primary-data/field-of-study-dto';

export interface IJobAdFieldOfStudyDto {
    id: number;
    jobAdId: number;
    fieldOfStudyId: number;
    fieldOfStudy: FieldOfStudyDto;
}


export class JobAdFieldOfStudyDto implements IJobAdFieldOfStudyDto {
    static fromJS(data: any): JobAdFieldOfStudyDto {
        data = typeof data === 'object' ? data : {};
        const result = new JobAdFieldOfStudyDto();
        result.init(data);
        return result;
    }
    id: number;
    jobAdId: number;
    fieldOfStudyId: number;
    fieldOfStudy: FieldOfStudyDto;


    constructor(data?: IJobAdFieldOfStudyDto) {
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
            this.fieldOfStudyId = data['fieldOfStudyId'];
            this.fieldOfStudy = data['fieldOfStudy'];


        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['jobAdId'] = this.jobAdId;
        data['fieldOfStudyId'] = this.fieldOfStudyId;
        data['fieldOfStudy'] = this.fieldOfStudy;

        return data;
    }

    clone(): JobAdFieldOfStudyDto {
        const json = this.toJSON();
        const result = new JobAdFieldOfStudyDto();
        result.init(json);
        return result;
    }
}
