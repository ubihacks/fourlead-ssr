
export interface ISubIndustryDto {
    name: string;
    id: number;
}


export class SubIndustryDto implements ISubIndustryDto {
    static fromJS(data: any): SubIndustryDto {
        data = typeof data === 'object' ? data : {};
        const result = new SubIndustryDto();
        result.init(data);
        return result;
    }

    name: string;
    id: number;

    constructor(data?: ISubIndustryDto) {
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

    clone(): SubIndustryDto {
        const json = this.toJSON();
        const result = new SubIndustryDto();
        result.init(json);
        return result;
    }
}
