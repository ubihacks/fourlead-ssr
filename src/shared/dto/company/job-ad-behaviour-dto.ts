import { BehaviourDto } from '../primary-data/behaviour-dto';


export interface IJobAdBehaviourDto {
    id: number;
    jobAdId: number;
    behaviourId: number;
    behaviour: BehaviourDto;

}


export class JobAdBehaviourDto implements IJobAdBehaviourDto {
    static fromJS(data: any): JobAdBehaviourDto {
        data = typeof data === 'object' ? data : {};
        const result = new JobAdBehaviourDto();
        result.init(data);
        return result;
    }
    id: number;
    jobAdId: number;
    behaviourId: number;
    behaviour: BehaviourDto;

    constructor(data?: IJobAdBehaviourDto) {
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
            this.behaviourId = data['behaviourId'];
            this.behaviour = data['behaviour'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['jobAdId'] = this.jobAdId;
        data['behaviourId'] = this.behaviourId;
        data['behaviour'] = this.behaviour;

        return data;
    }

    clone(): JobAdBehaviourDto {
        const json = this.toJSON();
        const result = new JobAdBehaviourDto();
        result.init(json);
        return result;
    }
}
