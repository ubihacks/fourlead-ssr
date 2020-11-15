

export interface ICompanyEntityTypeDto {
    id: number;
    name: string;
}


export class CompanyEntityTypeDto implements ICompanyEntityTypeDto {
    static fromJS(data: any): CompanyEntityTypeDto {
        data = typeof data === 'object' ? data : {};
        const result = new CompanyEntityTypeDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;

    constructor(data?: ICompanyEntityTypeDto) {
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
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['name'] = this.name;
    }

    clone(): CompanyEntityTypeDto {
        const json = this.toJSON();
        const result = new CompanyEntityTypeDto();
        result.init(json);
        return result;
    }
}
