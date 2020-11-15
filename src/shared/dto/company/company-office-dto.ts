
export interface ICompanyOfficeDto {
    id: number;
    tenantId: number;
    address: string;
    isBeingUsed: boolean;
}


export class CompanyOfficeDto implements ICompanyOfficeDto {
    static fromJS(data: any): CompanyOfficeDto {
        data = typeof data === 'object' ? data : {};
        const result = new CompanyOfficeDto();
        result.init(data);
        return result;
    }

    id: number;
    tenantId: number;
    address: string;
    isBeingUsed: boolean;
    constructor(data?: ICompanyOfficeDto) {
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
            this.tenantId = data['tenantId'];
            this.address = data['address'];
            this.isBeingUsed = data['isBeingUsed'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['tenantId'] = this.tenantId;
        data['address'] = this.address;
        data['isBeingUsed'] = this.isBeingUsed;
        return data;
    }

    clone(): CompanyOfficeDto {
        const json = this.toJSON();
        const result = new CompanyOfficeDto();
        result.init(json);
        return result;
    }
}


export interface IListCompanyOfficeDto {
    items: CompanyOfficeDto[] | undefined;
    totalCount: number;
}


export class ListCompanyOfficeDto implements IListCompanyOfficeDto {
    static fromJS(data: any): ListCompanyOfficeDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListCompanyOfficeDto();
        result.init(data);
        return result;
    }
    items: CompanyOfficeDto[] | undefined;
    totalCount: number;

    constructor(data?: IListCompanyOfficeDto) {
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
                    this.items.push(CompanyOfficeDto.fromJS(item));
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

    clone(): ListCompanyOfficeDto {
        const json = this.toJSON();
        const result = new ListCompanyOfficeDto();
        result.init(json);
        return result;
    }
}
