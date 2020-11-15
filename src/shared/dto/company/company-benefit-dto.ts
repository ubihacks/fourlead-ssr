
export interface ICompanyBenefitDto {
    id: number;
    tenantId: number;
    benefitId: number;
}


export class CompanyBenefitDto implements ICompanyBenefitDto {
    static fromJS(data: any): CompanyBenefitDto {
        data = typeof data === 'object' ? data : {};
        const result = new CompanyBenefitDto();
        result.init(data);
        return result;
    }

    id: number;
    tenantId: number;
    benefitId: number;
    constructor(data?: ICompanyBenefitDto) {
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
            this.id = data.id;
            this.tenantId = data.tenantId;
            this.benefitId = data.benefitId;
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.id = this.id;
        data.tenantId = this.tenantId;
        data.benefitId = this.benefitId;
        return data;
    }

    clone(): CompanyBenefitDto {
        const json = this.toJSON();
        const result = new CompanyBenefitDto();
        result.init(json);
        return result;
    }
}


export interface IListCompanyBenefitDto {
    items: CompanyBenefitDto[] | undefined;
    totalCount: number;
}


export class ListCompanyBenefitDto implements IListCompanyBenefitDto {
    static fromJS(data: any): ListCompanyBenefitDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListCompanyBenefitDto();
        result.init(data);
        return result;
    }
    items: CompanyBenefitDto[] | undefined;
    totalCount: number;

    constructor(data?: IListCompanyBenefitDto) {
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
            if (data.items && data.items.constructor === Array) {
                this.items = [];
                for (const item of data.items) {
                    this.items.push(CompanyBenefitDto.fromJS(item));
                }
            }
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data.items = [];
            for (const item of this.items) {
                data.items.push(item.toJSON());
            }
        }
        return data;
    }

    clone(): ListCompanyBenefitDto {
        const json = this.toJSON();
        const result = new ListCompanyBenefitDto();
        result.init(json);
        return result;
    }
}
