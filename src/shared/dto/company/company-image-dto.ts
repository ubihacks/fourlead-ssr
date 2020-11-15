
export interface ICompanyImageDto {
    id: number;
    tenantId: number;
    title:string;
    fileName: string;
    physicalPath: string;
    virtualPath: string;
    url: string;
    imageType: number;
}


export class CompanyImageDto implements ICompanyImageDto {
    static fromJS(data: any): CompanyImageDto {
        data = typeof data === 'object' ? data : {};
        const result = new CompanyImageDto();
        result.init(data);
        return result;
    }

    id: number;
    tenantId: number;
    title:string;
    fileName: string;
    physicalPath: string;
    virtualPath: string;
    url: string;
    imageType: number;

    constructor(data?: CompanyImageDto) {
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
            this.title = data['title'];
            this.fileName = data['fileName'];
            this.physicalPath = data['physicalPath'];
            this.virtualPath = data['virtualPath'];
            this.url = data['url'];
        }
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['tenantId'] = this.tenantId;
        data['title'] = this.title;
        data['fileName'] = this.fileName;
        data['physicalPath'] = this.physicalPath;
        data['virtualPath'] = this.virtualPath;
        data['url'] = this.url;
        return data;
    }

    clone(): CompanyImageDto {
        const json = this.toJSON();
        const result = new CompanyImageDto();
        result.init(json);
        return result;
    }
}
enum CompanyImageType {
    Logo = 1,
    Cover,
    Image
}

export interface IListResultDtoOfCompanyImageDto {
    items: CompanyImageDto[] | undefined;
    totalCount: number;
}


export class ListResultDtoOfCompanyImageDto implements IListResultDtoOfCompanyImageDto {
    static fromJS(data: any): ListResultDtoOfCompanyImageDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListResultDtoOfCompanyImageDto();
        result.init(data);
        return result;
    }
    items: CompanyImageDto[] | undefined;
    totalCount: number;

    constructor(data?: IListResultDtoOfCompanyImageDto) {
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
                    this.items.push(CompanyImageDto.fromJS(item));
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

    clone(): ListResultDtoOfCompanyImageDto {
        const json = this.toJSON();
        const result = new ListResultDtoOfCompanyImageDto();
        result.init(json);
        return result;
    }
}
