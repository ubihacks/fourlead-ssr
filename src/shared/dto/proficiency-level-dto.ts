
export interface IProficiencyLevelDto {
    name: string;
    id: number;
}


export class ProficiencyLevelDto implements IProficiencyLevelDto {
    static fromJS(data: any): ProficiencyLevelDto {
        data = typeof data === 'object' ? data : {};
        const result = new ProficiencyLevelDto();
        result.init(data);
        return result;
    }

    name: string;
    id: number;

    constructor(data?: IProficiencyLevelDto) {
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

    clone(): ProficiencyLevelDto {
        const json = this.toJSON();
        const result = new ProficiencyLevelDto();
        result.init(json);
        return result;
    }
}
