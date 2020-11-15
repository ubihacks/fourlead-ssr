

export interface ILevelDto {
    id: number;
    name: string;
    description: string;
    image: string;
}


export class LevelDto implements ILevelDto {
    static fromJS(data: any): LevelDto {
        data = typeof data === 'object' ? data : {};
        const result = new LevelDto();
        result.init(data);
        return result;
    }

    id: number;
    name: string;
    description: string;
    image: string;

    constructor(data?: ILevelDto) {
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
            this.image = data["image"];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['name'] = this.name;
        data['description'] = this.description;
        data["image"] = this.image;

    }

    clone(): LevelDto {
        const json = this.toJSON();
        const result = new LevelDto();
        result.init(json);
        return result;
    }
}



export interface IListLevelDto {
    items: LevelDto[] | undefined;
    totalCount: number;
}


export class ListLevelDto implements IListLevelDto {
    static fromJS(data: any): ListLevelDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListLevelDto();
        result.init(data);
        return result;
    }
    items: LevelDto[] | undefined;
    totalCount: number;

    constructor(data?: IListLevelDto) {
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
                    this.items.push(LevelDto.fromJS(item));
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

    clone(): ListLevelDto {
        const json = this.toJSON();
        const result = new ListLevelDto();
        result.init(json);
        return result;
    }
}
