import { ProficiencyDto } from "./proficiency-dto";
import { ProficiencyLevelDto } from "./proficiency-level-dto";

export interface IUserSkillDetailDto {
    id: number;
    userSkillId: number;
    proficiencyId: number;
    proficiencyLevelId: number;
    proficiency: ProficiencyDto;
    proficiencyLevel: ProficiencyLevelDto;
}


export class UserSkillDetailDto implements IUserSkillDetailDto {
    static fromJS(data: any): UserSkillDetailDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserSkillDetailDto();
        result.init(data);
        return result;
    }
    id: number;
    userSkillId: number;
    proficiencyId: number;
    proficiencyLevelId: number;
    proficiency: ProficiencyDto;
    proficiencyLevel: ProficiencyLevelDto;

    constructor(data?: IUserSkillDetailDto) {
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
            this.userSkillId = data['userSkillId'];
            this.proficiencyId = data['proficiencyId'];
            this.proficiencyLevelId = data['proficiencyLevelId'];
            this.proficiency = data['proficiency'];
            this.proficiencyLevel = data['proficiencyLevel'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['userSkillId'] = this.userSkillId;
        data['proficiencyId'] = this.proficiencyId;
        data['proficiencyLevelId'] = this.proficiencyLevelId;
        data['proficiency'] = this.proficiency;
        data['proficiencyLevel'] = this.proficiencyLevel;
        return data;
    }

    clone(): UserSkillDetailDto {
        const json = this.toJSON();
        const result = new UserSkillDetailDto();
        result.init(json);
        return result;
    }
}
