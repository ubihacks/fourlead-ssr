

export interface IEmploymentTypeDto {
    id: number;
    name: string;
}


export class EmploymentTypeDto implements IEmploymentTypeDto {
    static fromJS(data: any): EmploymentTypeDto {
        data = typeof data === 'object' ? data : {};
        const result = new EmploymentTypeDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;

    constructor(data?: IEmploymentTypeDto) {
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

    clone(): EmploymentTypeDto {
        const json = this.toJSON();
        const result = new EmploymentTypeDto();
        result.init(json);
        return result;
    }
}
