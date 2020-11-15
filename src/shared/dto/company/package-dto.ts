
export enum packageTypeCatalog {
    TenDays = 10,
    ThirtyDays = 30,
    FourtyDays = 40
}
export interface IPackageDto {
    id: number;
    type: number;
    amountToDeduct: number;
    allowedCandidates:number;
    isActive: boolean;
}


export class PackageDto implements IPackageDto {
    static fromJS(data: any): PackageDto {
        data = typeof data === 'object' ? data : {};
        const result = new PackageDto();
        result.init(data);
        return result;
    }
    id: number;
    type: number;
    amountToDeduct: number;
    allowedCandidates:number;
    isActive: boolean;

    constructor(data?: IPackageDto) {
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
            this.type = data['type'];
            this.amountToDeduct = data['amountToDeduct'];
            this.allowedCandidates = data['allowedCandidates'];
            this.isActive = data['isActive'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['type'] = this.type;
        data['amountToDeduct'] = this.amountToDeduct;
        data['allowedCandidates'] = this.allowedCandidates;
        data['isActive'] = this.isActive;
        return data;
    }

    clone(): PackageDto {
        const json = this.toJSON();
        const result = new PackageDto();
        result.init(json);
        return result;
    }
}


export interface IListPackageDto {
    items: PackageDto[] | undefined;
    totalCount: number;
}


export class ListPackageDto implements IListPackageDto {
    static fromJS(data: any): ListPackageDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListPackageDto();
        result.init(data);
        return result;
    }
    items: PackageDto[] | undefined;
    totalCount: number;

    constructor(data?: IListPackageDto) {
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
                    this.items.push(PackageDto.fromJS(item));
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

    clone(): ListPackageDto {
        const json = this.toJSON();
        const result = new ListPackageDto();
        result.init(json);
        return result;
    }
}
