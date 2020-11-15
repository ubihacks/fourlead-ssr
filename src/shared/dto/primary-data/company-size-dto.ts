

export interface ICompanySizeDto {
    id: number;
    name: string;
}


export class CompanySizeDto implements ICompanySizeDto {
    static fromJS(data: any): CompanySizeDto {
        data = typeof data === 'object' ? data : {};
        const result = new CompanySizeDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;

    constructor(data?: ICompanySizeDto) {
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

    clone(): CompanySizeDto {
        const json = this.toJSON();
        const result = new CompanySizeDto();
        result.init(json);
        return result;
    }
}
