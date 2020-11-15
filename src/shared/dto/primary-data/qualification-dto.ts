

export interface IQualificationDto {
    id: number;
    name: string;
}


export class QualificationDto implements IQualificationDto {
    static fromJS(data: any): QualificationDto {
        data = typeof data === 'object' ? data : {};
        const result = new QualificationDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;

    constructor(data?: IQualificationDto) {
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

    clone(): QualificationDto {
        const json = this.toJSON();
        const result = new QualificationDto();
        result.init(json);
        return result;
    }
}
