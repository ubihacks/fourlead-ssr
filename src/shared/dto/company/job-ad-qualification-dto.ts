import { QualificationDto } from '../primary-data/qualification-dto';

export interface IJobAdQualificationDto {
    id: number;
    JobAdQualificationId: number;
    qualificationId: number;
    qualification: QualificationDto;
}


export class JobAdQualificationDto implements IJobAdQualificationDto {
    static fromJS(data: any): JobAdQualificationDto {
        data = typeof data === 'object' ? data : {};
        const result = new JobAdQualificationDto();
        result.init(data);
        return result;
    }
    id: number;
    JobAdQualificationId: number;
    qualificationId: number;
    qualification: QualificationDto;


    constructor(data?: IJobAdQualificationDto) {
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
            this.JobAdQualificationId = data['JobAdQualificationId'];
            this.qualificationId = data['qualificationId'];
            this.qualification = data['qualification'];


        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['JobAdQualificationId'] = this.JobAdQualificationId;
        data['qualificationId'] = this.qualificationId;
        data['qualification'] = this.qualification;

        return data;
    }

    clone(): JobAdQualificationDto {
        const json = this.toJSON();
        const result = new JobAdQualificationDto();
        result.init(json);
        return result;
    }
}
