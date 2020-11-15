

export interface IBehaviourDto {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
}


export class BehaviourDto implements IBehaviourDto {
    static fromJS(data: any): BehaviourDto {
        data = typeof data === 'object' ? data : {};
        const result = new BehaviourDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;
    description: string;
    isActive: boolean;
    constructor(data?: IBehaviourDto) {
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
            this.description = data['description'];
            this.isActive = data['isActive'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['name'] = this.name;
        data['description'] = this.description;
        data['isActive'] = this.isActive;
    }

    clone(): BehaviourDto {
        const json = this.toJSON();
        const result = new BehaviourDto();
        result.init(json);
        return result;
    }
}



export interface IListBehaviourDto {
    items: BehaviourDto[] | undefined;
    totalCount: number;
}


export class ListBehaviourDto implements IListBehaviourDto {
    static fromJS(data: any): ListBehaviourDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListBehaviourDto();
        result.init(data);
        return result;
    }
    items: BehaviourDto[] | undefined;
    totalCount: number;

    constructor(data?: IListBehaviourDto) {
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
            if (data['items'] && data['items'].constructor === Array) {
                this.items = [];
                for (const item of data['items']) {
                    this.items.push(BehaviourDto.fromJS(item));
                }
            }
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data['items'] = [];
            for (const item of this.items) {
                data['items'].push(item.toJSON());
            }
        }
        return data;
    }

    clone(): ListBehaviourDto {
        const json = this.toJSON();
        const result = new ListBehaviourDto();
        result.init(json);
        return result;
    }
}
