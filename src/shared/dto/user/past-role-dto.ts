export interface IPastRoleDto {
    id: number;
    startDate: Date;
    endDate: Date;
    specializationId: number;
    specializationName: string;
    positionId: number;
    positionName: string;
    accomplishments: string;
    userExperienceId: number;
    currency: string;
    salary: number;
}


export class PastRoleDto implements IPastRoleDto {
    static fromJS(data: any): PastRoleDto {
        data = typeof data === 'object' ? data : {};
        const result = new PastRoleDto();
        result.init(data);
        return result;
    }

    id: number;
    startDate: Date;
    endDate: Date;
    specializationId: number;
    specializationName: string;
    positionId: number;
    positionName: string;
    accomplishments: string;
    userExperienceId: number;
    currency: string;
    salary: number;
    constructor(data?: IPastRoleDto) {
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
            this.startDate = data['startDate'];
            this.endDate = data['endDate'];
            this.specializationId = data['specializationId'];
            this.specializationName = data['specializationName'];
            this.positionId = data['positionId'];
            this.positionName = data['positionName'];
            this.accomplishments = data['accomplishments'];
            this.userExperienceId = data['userExperienceId'];
            this.currency = data['currency'];
            this.salary = data['salary'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['startDate'] = this.startDate;
        data['endDate'] = this.endDate;
        data['specializationId'] = this.specializationId;
        data['specializationName'] = this.specializationName;
        data['positionId'] = this.positionId;
        data['positionName'] = this.positionName;
        data['accomplishments'] = this.accomplishments;
        data['userExperienceId'] = this.userExperienceId;
        data['salary'] = this.salary;
        data['currency'] = this.currency;
        return data;
    }

    clone(): PastRoleDto {
        const json = this.toJSON();
        const result = new PastRoleDto();
        result.init(json);
        return result;
    }
}
