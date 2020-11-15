import { TestTypeCatalog } from '../user/user-test-dto';
import { EvpResultDto } from '../evp-result-dto';

export interface ICompanyOverviewDto {
   id:number;
   d:number;
   i:number;
   s:number;
   c:number;
   testType:TestTypeCatalog;
   politicsLevel:number;
   flexibilityLevel:number;
   companyRegistrationNo:string;
   evpResult:EvpResultDto;
   userTestId:number;
   total:number;
}

export class CompanyOverviewDto implements ICompanyOverviewDto {
    static fromJS(data: any): CompanyOverviewDto {
        data = typeof data === 'object' ? data : {};
        const result = new CompanyOverviewDto();
        result.init(data);
        return result;
    }
    id:number;
    d:number;
    i:number;
    s:number;
    c:number;
    testType:TestTypeCatalog;
    politicsLevel:number;
    flexibilityLevel:number;
    companyRegistrationNo:string;
   evpResult:EvpResultDto;
    userTestId:number;
    total:number;

    constructor(data?: ICompanyOverviewDto) {
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
            this.d = data['d']; 
            this.i = data['i']; 
            this.s = data['s']; 
            this.c = data['c']; 
            this.testType = data['testType']; 
            this.evpResult = data['evpResult'];
            this.politicsLevel = data['politicsLevel'];
            this.flexibilityLevel = data['flexibilityLevel'];
            this.companyRegistrationNo = data['companyRegistrationNo'];
            this.userTestId = data['userTestId'];
            this.total = data['total']; 
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['d'] = this.d;
        data['i'] = this.i;
        data['s'] = this.s;
        data['c'] = this.c;
        data['testType'] = this.testType;
        data['evpResult'] = this.evpResult;
        data['politicsLevel'] = this.politicsLevel;
        data['flexibilityLevel'] = this.flexibilityLevel;
        data['companyRegistrationNo'] = this.companyRegistrationNo;
        data['userTestId'] = this.userTestId;
        data['total'] = this.total;

        return data;
    }

    clone(): CompanyOverviewDto {
        const json = this.toJSON();
        const result = new CompanyOverviewDto();
        result.init(json);
        return result;
    }
}