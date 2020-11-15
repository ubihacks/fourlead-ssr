import { CompanyImageDto } from './company-image-dto';
import { DressCodeDto } from '../primary-data/dress-code-dto';
import { CompanyOfficeDto } from './company-office-dto';
import { CompanyIndustryDto } from './company-industry-dto';
import { CompanyBenefitDto } from './company-benefit-dto';
import { CompanyTimingDto } from './company-timing-dto';
import { CompanyEntityTypeDto } from './company-entity-type-dto';
import { BusinessSectorDto } from '../primary-data/business-sector-dto';
import { CompanySizeDto } from '../primary-data/company-size-dto'; 

export interface ITenantDto {
    tenancyName: string;
    adminEmailAddress: string;
    connectionString: string | undefined;
    isActive: boolean | undefined;

    id: number;
    name: string;
    registrationNumber: string;
    userId: number;
    entityTypeId: number;
    businessSectorId: number;
    foundedYear: string;
    companySizeId: number;
    contactNumber: string;
    webSite: string;
    aboutUs: string;
    mission: string;
    vision: string;
    coreValueStatement: string;
    dressCodeId: number;
    benefitIds: number[];
    industryIds: number[];
    attachment: string;
    companyIndustries: CompanyIndustryDto[];
    companyOffices: CompanyOfficeDto[];
    companyBenefits: CompanyBenefitDto[];
    companyTimings: CompanyTimingDto[];
    dressCodes: DressCodeDto;
    entityType: CompanyEntityTypeDto;
    businessSector: BusinessSectorDto;
    companySize: CompanySizeDto;
    companyImages: CompanyImageDto[];
    isFileUpdated: boolean;
    isDocumentUploaded: boolean;
    isSubscribed: boolean;
    companyStatus : CompanyStatusCatalog;
    companySlug:string;

   // authResult: AuthenticateResultModel;
}
export enum CompanyStatusCatalog
{
    Open = 1,
    PendingDocuments,
    Completed,
    Cancelled
}

export class TenantDto implements ITenantDto {
    static fromJS(data: any): TenantDto {
        data = typeof data === 'object' ? data : {};
        const result = new TenantDto();
        result.init(data);
        return result;
    }
    tenancyName: string;
    adminEmailAddress: string;
    connectionString: string | undefined;
    isActive: boolean | undefined;

    id: number;
    name: string;
    registrationNumber: string;
    userId: number;
    entityTypeId: number;
    businessSectorId: number;
    foundedYear: string;
    companySizeId: number;
    contactNumber: string;
    webSite: string;
    aboutUs: string;
    mission: string;
    vision: string;
    coreValueStatement: string;
    dressCodeId: number;
    benefitIds: number[];
    industryIds: number[];
    attachment: string;
    isFileUpdated: boolean;
    isDocumentUploaded: boolean;
    isSubscribed: boolean;
    frequentlyUsedDescription: string;
    frequentlyUsedRequirements: string;
    companyStatus : CompanyStatusCatalog;
    companyIndustries: CompanyIndustryDto[];
    companyOffices: CompanyOfficeDto[];
    companyBenefits: CompanyBenefitDto[];
    companyTimings: CompanyTimingDto[];
    dressCodes: DressCodeDto;
    entityType: CompanyEntityTypeDto;
    businessSector: BusinessSectorDto;
    companySize: CompanySizeDto;
    companyImages: CompanyImageDto[];
    companySlug:string;
    //authResult: AuthenticateResultModel;
    constructor(data?: ITenantDto) {
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
            this.isActive = data['isActive'];
            this.connectionString = data['connectionString'];
            this.adminEmailAddress = data['adminEmailAddress'];
            this.tenancyName = data['tenancyName'];
            this.id = data['id'];
            this.name = data['name'];
            this.registrationNumber = data['registrationNumber'];
            this.userId = data['userId'];
            this.entityTypeId = data['entityTypeId'];
            this.businessSectorId = data['businessSectorId'];
            this.foundedYear = data['foundedYear'];
            this.companySizeId = data['companySizeId'];
            this.contactNumber = data['contactNumber'];
            this.webSite = data['webSite'];
            this.aboutUs = data['aboutUs'];
            this.mission = data['mission'];
            this.vision = data['vision'];
            this.coreValueStatement = data['coreValueStatement'];
            this.dressCodeId = data['dressCodeId'];
            this.frequentlyUsedDescription = data['frequentlyUsedDescription'];
            this.frequentlyUsedRequirements = data['frequentlyUsedRequirements'];
            this.companyStatus = data['companyStatus'];
            this.companyIndustries = data['companyIndustries'];
            this.companyOffices = data['companyOffices'];
            this.companyTimings = data['companyTimings'];
            // this.companyBenifits = data['companyBenifits'];
            this.dressCodes = data['dressCodes'];
            this.entityType = data['entityType'];
            this.businessSector = data['businessSector'];
            this.companySize = data['companySize'];
            this.companyImages = data['companyImages'];

            this.benefitIds = data['benefitIds'];
            this.industryIds = data['industryIds'];
            this.companyBenefits = data['companyBenefits'];
            this.attachment = data['attachment'];
            this.isFileUpdated = data['isFileUpdated'];
            this.isSubscribed = data['isSubscribed'];
            this.isDocumentUploaded = data['isDocumentUploaded'];
            this.companySlug = data['companySlug'];
            //this.authResult = data['authResult'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['tenancyName'] = this.tenancyName;
        data['adminEmailAddress'] = this.adminEmailAddress;
        data['connectionString'] = this.connectionString;
        data['isActive'] = this.isActive;
        data['id'] = this.id;
        data['name'] = this.name;
        data['registrationNumber'] = this.registrationNumber;
        data['userId'] = this.userId;
        data['entityTypeId'] = this.entityTypeId;
        data['businessSectorId'] = this.businessSectorId;
        data['foundedYear'] = this.foundedYear;
        data['companySizeId'] = this.companySizeId;
        data['contactNumber'] = this.contactNumber;
        data['webSite'] = this.webSite;
        data['aboutUs'] = this.aboutUs;
        data['mission'] = this.mission;
        data['vision'] = this.vision;
        data['coreValueStatement'] = this.coreValueStatement;
        data['dressCodeId'] = this.dressCodeId;
        data['frequentlyUsedDescription'] = this.frequentlyUsedDescription;
        data['frequentlyUsedRequirements'] = this.frequentlyUsedRequirements;

        data['companyIndustries'] = this.companyIndustries;
        data['companyOffices'] = this.companyOffices;
        data['companyTimings'] = this.companyTimings;
        // data['companyBenifits'] = this.companyBenifits;
        data['dressCodes'] = this.dressCodes;
        data['entityType'] = this.entityType;
        data['businessSector'] = this.businessSector;
        data['companySize'] = this.companySize;
        data['companyImages'] = this.companyImages;

        data['benefitIds'] = this.benefitIds;
        data['industryIds'] = this.industryIds;
        data['companyBenefits'] = this.companyBenefits;
        data['attachment'] = this.attachment;
        data['isFileUpdated'] = this.isFileUpdated;
        data['isSubscribed'] = this.isSubscribed;
        data['isDocumentUploaded'] = this.isDocumentUploaded;
        //data['authResult'] = this.authResult;
        data['companyStatus'] = this.companyStatus;
        data['companySlug'] = this.companySlug;
        return data;
    }

    clone(): TenantDto {
        const json = this.toJSON();
        const result = new TenantDto();
        result.init(json);
        return result;
    }
}


export interface IListTenantDto {
    items: TenantDto[] | undefined;
    totalCount: number;
}


export class ListTenantDto implements IListTenantDto {
    static fromJS(data: any): ListTenantDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListTenantDto();
        result.init(data);
        return result;
    }
    items: TenantDto[] | undefined;
    totalCount: number;

    constructor(data?: IListTenantDto) {
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
                    this.items.push(TenantDto.fromJS(item));
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

    clone(): ListTenantDto {
        const json = this.toJSON();
        const result = new ListTenantDto();
        result.init(json);
        return result;
    }
}

export class IsTenantAvailableInput implements IIsTenantAvailableInput {
  tenancyName: string;

  constructor(data?: IIsTenantAvailableInput) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
  }

  init(data?: any) {
      if (data) {
          this.tenancyName = data["tenancyName"];
      }
  }

  static fromJS(data: any): IsTenantAvailableInput {
      data = typeof data === 'object' ? data : {};
      let result = new IsTenantAvailableInput();
      result.init(data);
      return result;
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["tenancyName"] = this.tenancyName;
      return data;
  }

  clone(): IsTenantAvailableInput {
      const json = this.toJSON();
      let result = new IsTenantAvailableInput();
      result.init(json);
      return result;
  }
}

export interface IIsTenantAvailableInput {
  tenancyName: string;
}

export class IsTenantAvailableOutput implements IIsTenantAvailableOutput {
  state: IsTenantAvailableOutputState | undefined;
  tenantId: number | undefined;

  constructor(data?: IIsTenantAvailableOutput) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
  }

  init(data?: any) {
      if (data) {
          this.state = data["state"];
          this.tenantId = data["tenantId"];
      }
  }

  static fromJS(data: any): IsTenantAvailableOutput {
      data = typeof data === 'object' ? data : {};
      let result = new IsTenantAvailableOutput();
      result.init(data);
      return result;
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["state"] = this.state;
      data["tenantId"] = this.tenantId;
      return data;
  }

  clone(): IsTenantAvailableOutput {
      const json = this.toJSON();
      let result = new IsTenantAvailableOutput();
      result.init(json);
      return result;
  }
}

export interface IIsTenantAvailableOutput {
  state: IsTenantAvailableOutputState | undefined;
  tenantId: number | undefined;
}

export enum IsTenantAvailableOutputState {
  _1 = 1,
  _2 = 2,
  _3 = 3,
}
