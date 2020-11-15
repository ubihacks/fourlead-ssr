import { SkillDto } from './skill-dto';
import { UserSkillDetailDto } from './user-skill-detail-dto';

export interface IUserSkillDto {
    id: number;
    userId: number;
    skillTypeId: number;
    skillCategoryId: number;
    skillId: number;
    userSkillDetails: UserSkillDetailDto;
    skill: SkillDto;
}


export class UserSkillDto implements IUserSkillDto {
    static fromJS(data: any): UserSkillDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserSkillDto();
        result.init(data);
        return result;
    }

    id: number;
    userId: number;
    skillTypeId: number;
    skillCategoryId: number;
    skillId: number;
    userSkillDetails: UserSkillDetailDto;
    skill: SkillDto;
    constructor(data?: IUserSkillDto) {
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
            this.userId = data['userId'];
            this.skillTypeId = data['skillTypeId'];
            this.skillCategoryId = data['skillCategoryId'];
            this.skillId = data['skillId'];
            this.userSkillDetails = data['userSkillDetails'];
            this.skill = data['skill'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['userId'] = this.userId;
        data['skillTypeId'] = this.skillTypeId;
        data['skillCategoryId'] = this.skillCategoryId;
        data['skillId'] = this.skillId;
        data['userSkillDetails'] = this.userSkillDetails;
        data['skill'] = this.skill;
        return data;
    }

    clone(): UserSkillDto {
        const json = this.toJSON();
        const result = new UserSkillDto();
        result.init(json);
        return result;
    }
}


export interface IListUserSkillDto {
    items: UserSkillDto[] | undefined;
    totalCount: number;
}


export class ListUserSkillDto implements IListUserSkillDto {
    static fromJS(data: any): ListUserSkillDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListUserSkillDto();
        result.init(data);
        return result;
    }
    items: UserSkillDto[] | undefined;
    totalCount: number;

    constructor(data?: IListUserSkillDto) {
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
            if (data['items'] && data['items'].constructor === Array) {
                this.items = [];
                for (const item of data['items']) {
                    this.items.push(UserSkillDto.fromJS(item));
                }
            }
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data['items'] = [];
            for (const item of this.items) {
                data['items'].push(item.toJSON());
            }
        }
        return data;
    }

    clone(): ListUserSkillDto {
        const json = this.toJSON();
        const result = new ListUserSkillDto();
        result.init(json);
        return result;
    }
}
