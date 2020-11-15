
export interface IUserPreferenceDto {
    id: number;
    userId: number;
    currencyId: number;
    expectedSalary: number;
    locationIds: number[];
    specializationIds: number[];
    positionIds: number[];
}


export class UserPreferenceDto implements IUserPreferenceDto {
    static fromJS(data: any): UserPreferenceDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserPreferenceDto();
        result.init(data);
        return result;
    }

    id: number;
    userId: number;
    currencyId: number;
    expectedSalary: number;
    locationIds: number[];
    specializationIds: number[];
    positionIds: number[];
    constructor(data?: IUserPreferenceDto) {
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
            this.userId = data['userId'];
            this.currencyId = data['currencyId'];
            this.expectedSalary = data['expectedSalary'];
            this.locationIds = data['locationIds'];
            this.specializationIds = data['specializationIds'];
            this.positionIds = data['positionIds'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['userId'] = this.userId;
        data['currencyId'] = this.currencyId;
        data['expectedSalary'] = this.expectedSalary;
        data['locationIds'] = this.locationIds;
        data['specializationIds'] = this.specializationIds;
        data['positionIds'] = this.positionIds;
        return data;
    }

    clone(): UserPreferenceDto {
        const json = this.toJSON();
        const result = new UserPreferenceDto();
        result.init(json);
        return result;
    }
}
