

export interface ISubSpecializationDto {
    id: number;
    name: string;
    specializationId:number; 
}
export class SubSpecializationDto implements ISubSpecializationDto {
    static fromJS(data: any): SubSpecializationDto {
        data = typeof data === 'object' ? data : {};
        const result = new SubSpecializationDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;
    specializationId:number; 
    
    constructor(data?: ISubSpecializationDto) {
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

    clone(): SubSpecializationDto {
        const json = this.toJSON();
        const result = new SubSpecializationDto();
        result.init(json);
        return result;
    }
}

export interface ISpecializationDto {
    id: number;
    name: string;
}

export class SpecializationDto implements ISpecializationDto {
    static fromJS(data: any): SpecializationDto {
        data = typeof data === 'object' ? data : {};
        const result = new SpecializationDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;

    constructor(data?: ISpecializationDto) {
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

    clone(): SpecializationDto {
        const json = this.toJSON();
        const result = new SpecializationDto();
        result.init(json);
        return result;
    }
}
