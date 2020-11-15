

export interface IBusinessSectorDto {
    id: number;
    name: string;
}


export class BusinessSectorDto implements IBusinessSectorDto {
    static fromJS(data: any): BusinessSectorDto {
        data = typeof data === 'object' ? data : {};
        const result = new BusinessSectorDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;

    constructor(data?: IBusinessSectorDto) {
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

    clone(): BusinessSectorDto {
        const json = this.toJSON();
        const result = new BusinessSectorDto();
        result.init(json);
        return result;
    }
}
