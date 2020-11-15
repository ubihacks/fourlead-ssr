import { SkillTypeDto } from './skill-type-dto';

export interface ISkillDto {
    id: number;
    name: string;
    skillTypeId: number ;
}


export class SkillDto implements ISkillDto {
    static fromJS(data: any): SkillDto {
        data = typeof data === 'object' ? data : {};
        const result = new SkillDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;
    skillTypeId: number ;

    constructor(data?: ISkillDto) {
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
            this.skillTypeId = data['skillTypeId'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['name'] = this.name;
        data['skillTypeId'] = this.skillTypeId;
        return data;
    }

    clone(): SkillDto {
        const json = this.toJSON();
        const result = new SkillDto();
        result.init(json);
        return result;
    }
}
