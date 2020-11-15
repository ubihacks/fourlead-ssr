import { SkillDto } from './skill-dto';
import { SkillCategoryDto } from './skill-category-dto';
import { SkillTypeProficiencyDto } from './skill-type-proficiency-dto';

export interface ISkillTypeDto {
    id: number;
    name: string;
    skillCategoryId: number;
    skillOrder: number;
    skills: SkillDto[];
    skillTypeProficiencies: SkillTypeProficiencyDto[];

}


export class SkillTypeDto implements ISkillTypeDto {
    static fromJS(data: any): SkillTypeDto {
        data = typeof data === 'object' ? data : {};
        const result = new SkillTypeDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;
    skillCategoryId: number;
    skillOrder: number;
    skills: SkillDto[];
    skillTypeProficiencies: SkillTypeProficiencyDto[];

    constructor(data?: ISkillTypeDto) {
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
            this.name = data['name'];
            this.skillCategoryId = data['skillCategoryId'];
            this.skillTypeProficiencies = data['skillTypeProficiencies'];
            this.skills = data['skills'];
            this.skillOrder = data['skillOrder'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['name'] = this.name;
        data['skillCategoryId'] = this.skillCategoryId;
        data['skillTypeProficiencies'] = this.skillTypeProficiencies;
        data['skills'] = this.skills;
        data['skillOrder'] = this.skillOrder;
        return data;
    }

    clone(): SkillTypeDto {
        const json = this.toJSON();
        const result = new SkillTypeDto();
        result.init(json);
        return result;
    }
}
