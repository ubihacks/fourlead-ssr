

export interface IPositionDto {
    id: number;
    name: string;
}


export class PositionDto implements IPositionDto {
    static fromJS(data: any): PositionDto {
        data = typeof data === 'object' ? data : {};
        const result = new PositionDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;

    constructor(data?: IPositionDto) {
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

    clone(): PositionDto {
        const json = this.toJSON();
        const result = new PositionDto();
        result.init(json);
        return result;
    }
}
