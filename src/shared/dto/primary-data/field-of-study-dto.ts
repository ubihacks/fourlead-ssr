

export interface IFieldOfStudyDto {
    id: number;
    name: string;
}


export class FieldOfStudyDto implements IFieldOfStudyDto {
    static fromJS(data: any): FieldOfStudyDto {
        data = typeof data === 'object' ? data : {};
        const result = new FieldOfStudyDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;

    constructor(data?: IFieldOfStudyDto) {
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

    clone(): FieldOfStudyDto {
        const json = this.toJSON();
        const result = new FieldOfStudyDto();
        result.init(json);
        return result;
    }
}
