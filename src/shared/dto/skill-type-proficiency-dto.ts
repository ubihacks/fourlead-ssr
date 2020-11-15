import { IProficiencyDto } from './proficiency-dto';
import { SkillDto } from './skill-dto';

export interface ISkillTypeProficiencyDto {
    proficiencyId: number;
    skillId: number;
    skill: SkillDto;
    proficiency: IProficiencyDto;
}


export class SkillTypeProficiencyDto implements ISkillTypeProficiencyDto {
    static fromJS(data: any): SkillTypeProficiencyDto {
        data = typeof data === 'object' ? data : {};
        const result = new SkillTypeProficiencyDto();
        result.init(data);
        return result;
    }

    proficiencyId: number;
    skillId: number;
    skill: SkillDto;
    proficiency: IProficiencyDto;

    constructor(data?: ISkillTypeProficiencyDto) {
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
            this.proficiencyId = data['proficiencyId'];
            this.skillId = data['skillId'];
            this.skill = data['skill'];
            this.proficiency = data['proficiency'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['proficiencyId'] = this.proficiencyId;
        data['skillId'] = this.skillId;
        data['proficiency'] = this.proficiency;
        data['skill'] = this.skill;
        return data;
    }

    clone(): SkillTypeProficiencyDto {
        const json = this.toJSON();
        const result = new SkillTypeProficiencyDto();
        result.init(json);
        return result;
    }
}
