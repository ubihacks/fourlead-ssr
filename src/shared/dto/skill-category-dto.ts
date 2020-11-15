import { SkillTypeDto } from './skill-type-dto';


export interface ISkillCategoryDto {
    id: number;
    name: string;
    skillTypes: SkillTypeDto[];
}


export class SkillCategoryDto implements ISkillCategoryDto {
    static fromJS(data: any): SkillCategoryDto {
        data = typeof data === 'object' ? data : {};
        const result = new SkillCategoryDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;
    skillTypes: SkillTypeDto[];

    constructor(data?: ISkillCategoryDto) {
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
            this.skillTypes = data['skillTypes'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['name'] = this.name;
        data['skillTypes'] = this.skillTypes;
        return data;
    }

    clone(): SkillCategoryDto {
        const json = this.toJSON();
        const result = new SkillCategoryDto();
        result.init(json);
        return result;
    }
}



export interface IListSkillCategoryDto {
    items: SkillCategoryDto[] | undefined;
    totalCount: number;
}


export class ListSkillCategoryDto implements IListSkillCategoryDto {
    static fromJS(data: any): ListSkillCategoryDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListSkillCategoryDto();
        result.init(data);
        return result;
    }
    items: SkillCategoryDto[] | undefined;
    totalCount: number;

    constructor(data?: IListSkillCategoryDto) {
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
                    this.items.push(SkillCategoryDto.fromJS(item));
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

    clone(): ListSkillCategoryDto {
        const json = this.toJSON();
        const result = new ListSkillCategoryDto();
        result.init(json);
        return result;
    }
}
