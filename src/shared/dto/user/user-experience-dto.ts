import { PastRoleDto } from './past-role-dto';



export interface IUserExperienceDto {
    id: number;
    companyName: string;
    registrationNo: string;
    startDate: Date;
    endDate: Date;
    accomplishments: string;
    currency: string;
    salary: string;
    userId: number;
    industryId: number;
    positionId: number;
    specializationId: number;
    subIndustryId: number;
    industryName: string;
    positionName: string;
    specializationName: string;
    pastRoles: PastRoleDto[];
}


export class UserExperienceDto implements IUserExperienceDto {
    static fromJS(data: any): UserExperienceDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserExperienceDto();
        result.init(data);
        return result;
    }

    id: number;
    companyName: string;
    registrationNo: string;
    startDate: Date;
    endDate: Date;
    accomplishments: string;
    currency: string;
    salary: string;
    userId: number;
    industryId: number;
    positionId: number;
    specializationId: number;
    subIndustryId: number;
    industryName: string;
    positionName: string;
    specializationName: string;
    pastRoles: PastRoleDto[];

    constructor(data?: IUserExperienceDto) {
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
            this.companyName = data['companyName'];
            this.registrationNo = data['registrationNo'];
            this.startDate = data['startDate'];
            this.endDate = data['endDate'];
            this.accomplishments = data['accomplishments'];
            this.currency = data['currency'];
            this.salary = data['salary'];
            this.userId = data['userId'];
            this.industryId = data['industryId'];
            this.positionId = data['positionId'];
            this.specializationId = data['specializationId'];
            this.subIndustryId = data['subIndustryId'];
            this.industryName = data['industryName'];
            this.positionName = data['positionName'];
            this.specializationName = data['specializationName'];
            this.pastRoles = data['pastRoles'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['userId'] = this.userId;
        data['id'] = this.id;
        data['companyName'] = this.companyName;
        data['registrationNo'] = this.registrationNo;
        data['startDate'] = this.startDate;
        data['endDate'] = this.endDate;
        data['accomplishments'] = this.accomplishments;
        data['currency'] = this.currency;
        data['salary'] = this.salary;
        data['userId'] = this.userId;
        data['industryId'] = this.industryId;
        data['positionId'] = this.positionId;
        data['specializationId'] = this.specializationId;
        data['subIndustryId'] = this.subIndustryId;
        data['industryName'] = this.industryName;
        data['positionName'] = this.positionName;
        data['specializationName'] = this.specializationName;
        data['pastRoles'] = this.pastRoles;
        return data;
    }

    clone(): UserExperienceDto {
        const json = this.toJSON();
        const result = new UserExperienceDto();
        result.init(json);
        return result;
    }
}

export interface IListResultDtoOfUserExperienceDto {
    items: UserExperienceDto[] | undefined;
    totalCount: number;
}


export class ListResultDtoOfUserExperienceDto implements IListResultDtoOfUserExperienceDto {
    static fromJS(data: any): ListResultDtoOfUserExperienceDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListResultDtoOfUserExperienceDto();
        result.init(data);
        return result;
    }
    items: UserExperienceDto[] | undefined;
    totalCount: number;

    constructor(data?: IListResultDtoOfUserExperienceDto) {
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
                    this.items.push(UserExperienceDto.fromJS(item));
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

    clone(): ListResultDtoOfUserExperienceDto {
        const json = this.toJSON();
        const result = new ListResultDtoOfUserExperienceDto();
        result.init(json);
        return result;
    }
}
