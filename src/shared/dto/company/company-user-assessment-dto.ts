import { PagedRequestDto } from '../paged-listing-component-base';



export interface IPagedCompanyUserAssessmentResultRequestDto {
    sorting: string;
    keyword: string;
    type: string;
    registrationNumber :string;
}


export class PagedCompanyUserAssessmentResultRequestDto extends PagedRequestDto implements IPagedCompanyUserAssessmentResultRequestDto {
    static fromJS(data: any): PagedCompanyUserAssessmentResultRequestDto {
        data = typeof data === 'object' ? data : {};
        const result = new PagedCompanyUserAssessmentResultRequestDto();
        result.init(data);
        return result;
    }
    registrationNumber :string;
    sorting: string;
    keyword: string;
    type: string;
    constructor(data?: IPagedCompanyUserAssessmentResultRequestDto) {
        super();
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
            this.registrationNumber = data['registrationNumber'];
            this.sorting = data['sorting'];
            this.keyword = data['keyword'];
            this.type = data['type'];
        }
    }


    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['sorting'] = this.sorting;
        data['keyword'] = this.keyword;
        data['type'] = this.type;
        data['registrationNumber'] = this.registrationNumber;
        return data;
    }

    clone(): PagedCompanyUserAssessmentResultRequestDto {
        const json = this.toJSON();
        const result = new PagedCompanyUserAssessmentResultRequestDto();
        result.init(json);
        return result;
    }
}

export interface ICompanyUserAssessmentDto {
    id:number;
    publicBehaviourLevelName: string;
    privateBehaviourLevelName: string;
    invitedUserName: string;
    invitedUserEmail: string;
    completionTime: Date| null;
    creationTime: Date| null;
    companyRegistrationNo: string;
    inviteToken:string;
    userTestResultId:number|undefined;
}
export class CompanyUserAssessmentDto implements ICompanyUserAssessmentDto {
    static fromJS(data: any): CompanyUserAssessmentDto {
        data = typeof data === 'object' ? data : {};
        const result = new CompanyUserAssessmentDto();
        result.init(data);
        return result;
    }
    id:number;
    publicBehaviourLevelName: string;
    privateBehaviourLevelName: string;
    invitedUserName: string;
    invitedUserEmail: string;
    completionTime: Date| null;
    creationTime: Date| null;
    companyRegistrationNo: string;
    inviteToken:string;
    userTestResultId:number|undefined;

    constructor(data?: ICompanyUserAssessmentDto) {
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
            this.publicBehaviourLevelName = data['publicBehaviourLevelName'];
            this.privateBehaviourLevelName = data['privateBehaviourLevelName'];
            this.invitedUserName = data['invitedUserName'];
            this.invitedUserEmail = data['invitedUserEmail'];
            this.completionTime = data['completionTime'];
            this.creationTime = data['creationTime'];
            this.companyRegistrationNo = data['companyRegistrationNo'];
            this.inviteToken  = data['inviteToken'];
            this.userTestResultId = data['userTestResultId'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['publicBehaviourLevelName'] = this.publicBehaviourLevelName;
        data['privateBehaviourLevelName'] = this.privateBehaviourLevelName;
        data['invitedUserName'] = this.invitedUserName;
        data['invitedUserEmail'] = this.invitedUserEmail;
        data['completionTime'] = this.completionTime;
        data['creationTime'] = this.creationTime;
        data['companyRegistrationNo'] = this.companyRegistrationNo;
        data['inviteToken'] = this.inviteToken;
        data['userTestResultId'] = this.userTestResultId;

        return data;
    }

    clone(): CompanyUserAssessmentDto {
        const json = this.toJSON();
        const result = new CompanyUserAssessmentDto();
        result.init(json);
        return result;
    }
}


export interface IListCompanyUserAssessmentDto {
    items:  CompanyUserAssessmentDto[] | undefined;
    totalCount: number;
}


export class ListCompanyUserAssessmentDto implements IListCompanyUserAssessmentDto {
    static fromJS(data: any): ListCompanyUserAssessmentDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListCompanyUserAssessmentDto();
        result.init(data);
        return result;
    }
    items: CompanyUserAssessmentDto[] | undefined;
    totalCount: number;

    constructor(data?: IListCompanyUserAssessmentDto) {
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
                    this.items.push(CompanyUserAssessmentDto.fromJS(item));
                }
            }
            this.totalCount = data['totalCount'];
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
        data['totalCount'] = this.totalCount;
        return data;
    }
 

    clone(): ListCompanyUserAssessmentDto {
        const json = this.toJSON();
        const result = new ListCompanyUserAssessmentDto();
        result.init(json);
        return result;
    }
}
