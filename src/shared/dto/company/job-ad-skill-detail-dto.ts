import { ProficiencyDto } from '../proficiency-dto';
import { ProficiencyLevelDto } from '../proficiency-level-dto';

export interface IJobAdSkillDetailDto {
    id: number;
    proficiencyId: number;
    proficiencyLevelId: number;
    jobAdSkillId: number;

    proficiency: ProficiencyDto;
    proficiencyLevel: ProficiencyLevelDto;
}


export class JobAdSkillDetailDto implements IJobAdSkillDetailDto {
    static fromJS(data: any): JobAdSkillDetailDto {
        data = typeof data === 'object' ? data : {};
        const result = new JobAdSkillDetailDto();
        result.init(data);
        return result;
    }
    id: number;
    proficiencyId: number;
    proficiencyLevelId: number;
    jobAdSkillId: number;
    proficiency: ProficiencyDto;
    proficiencyLevel: ProficiencyLevelDto;

    constructor(data?: IJobAdSkillDetailDto) {
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
            this.proficiencyId = data['proficiencyId'];
            this.proficiencyLevelId = data['proficiencyLevelId'];
            this.jobAdSkillId = data['jobAdSkillId'];
            this.proficiency = data['proficiency'];
            this.proficiencyLevel = data['proficiencyLevel'];

        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['proficiencyId'] = this.proficiencyId;
        data['proficiencyLevelId'] = this.proficiencyLevelId;
        data['jobAdSkillId'] = this.jobAdSkillId;
        data['proficiency'] = this.proficiency;
        data['proficiencyLevel'] = this.proficiencyLevel;
        return data;
    }

    clone(): JobAdSkillDetailDto {
        const json = this.toJSON();
        const result = new JobAdSkillDetailDto();
        result.init(json);
        return result;
    }
}
