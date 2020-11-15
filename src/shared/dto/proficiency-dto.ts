export enum ProficiencyEnum {
    Proficiency = 1,
    Speaking = 2,
    Reading = 3,
    Writing = 4
}

export interface IProficiencyDto {
    name: string;
    id: number;
}


export class ProficiencyDto implements IProficiencyDto {
    static fromJS(data: any): ProficiencyDto {
        data = typeof data === 'object' ? data : {};
        const result = new ProficiencyDto();
        result.init(data);
        return result;
    }

    name: string;
    id: number;

    constructor(data?: IProficiencyDto) {
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
            this.name = data['name'];
            this.id = data['id'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['name'] = this.name;
        data['id'] = this.id;
        return data;
    }

    clone(): ProficiencyDto {
        const json = this.toJSON();
        const result = new ProficiencyDto();
        result.init(json);
        return result;
    }
}
