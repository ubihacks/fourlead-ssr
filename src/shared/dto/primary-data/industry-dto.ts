
export interface IIndustryDto {
    name: string;
    id: number;
}


export class IndustryDto implements IIndustryDto {
    static fromJS(data: any): IndustryDto {
        data = typeof data === 'object' ? data : {};
        const result = new IndustryDto();
        result.init(data);
        return result;
    }

    name: string;
    id: number;

    constructor(data?: IIndustryDto) {
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

    clone(): IndustryDto {
        const json = this.toJSON();
        const result = new IndustryDto();
        result.init(json);
        return result;
    }
}
