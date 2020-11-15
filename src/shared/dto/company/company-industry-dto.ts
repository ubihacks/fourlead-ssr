import { IndustryDto } from '../primary-data/industry-dto';

export interface ICompanyIndustryDto {
    id: number;
    tenantId: number;
    industryId: number;
    industry: IndustryDto;
}


export class CompanyIndustryDto implements ICompanyIndustryDto {
    static fromJS(data: any): CompanyIndustryDto {
        data = typeof data === 'object' ? data : {};
        const result = new CompanyIndustryDto();
        result.init(data);
        return result;
    }

    id: number;
    tenantId: number;
    industryId: number;
    industry: IndustryDto;
    constructor(data?: ICompanyIndustryDto) {
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
            this.industryId = data['industryId'];
            this.industry = data['industry'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['tenantId'] = this.tenantId;
        data['industryId'] = this.industryId;
        data['industry'] = this.industry;
        return data;
    }

    clone(): CompanyIndustryDto {
        const json = this.toJSON();
        const result = new CompanyIndustryDto();
        result.init(json);
        return result;
    }
}


export interface IListCompanyIndustryDto {
    items: CompanyIndustryDto[] | undefined;
    totalCount: number;
}


export class ListCompanyIndustryDto implements IListCompanyIndustryDto {
    static fromJS(data: any): ListCompanyIndustryDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListCompanyIndustryDto();
        result.init(data);
        return result;
    }
    items: CompanyIndustryDto[] | undefined;
    totalCount: number;

    constructor(data?: IListCompanyIndustryDto) {
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
                    this.items.push(CompanyIndustryDto.fromJS(item));
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

    clone(): ListCompanyIndustryDto {
        const json = this.toJSON();
        const result = new ListCompanyIndustryDto();
        result.init(json);
        return result;
    }
}
