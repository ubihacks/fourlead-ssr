
export interface IUserImageDto {
    id: number;
    userId: number;
    fileName: string;
    url : string;
}

export class UserImageDto implements IUserImageDto {
    static fromJS(data: any): UserImageDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserImageDto();
        result.init(data);
        return result;
    }

    id: number;
    userId: number;
    fileName: string;
    url : string;
    
    constructor(data?: IUserImageDto) {
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
            this.userId = data['userId'];
            this.fileName = data['fileName'];
            this.url = data['url'];
        }
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['userId'] = this.userId;
        data['fileName'] = this.fileName;
        data['url'] = this.url;
       
        return data;
    }

    clone(): UserImageDto {
        const json = this.toJSON();
        const result = new UserImageDto();
        result.init(json);
        return result;
    }
}

export interface IListResultDtoOfUserImageDto {
    items: UserImageDto[] | undefined;
    totalCount: number;
}

export class ListResultDtoOfUserImageDto implements IListResultDtoOfUserImageDto {
    static fromJS(data: any): ListResultDtoOfUserImageDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListResultDtoOfUserImageDto();
        result.init(data);
        return result;
    }
    items: UserImageDto[] | undefined;
    totalCount: number;

    constructor(data?: IListResultDtoOfUserImageDto) {
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
                    this.items.push(UserImageDto.fromJS(item));
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

    clone(): ListResultDtoOfUserImageDto {
        const json = this.toJSON();
        const result = new ListResultDtoOfUserImageDto();
        result.init(json);
        return result;
    }
}