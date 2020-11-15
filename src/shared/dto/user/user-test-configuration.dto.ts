export interface IUserTestConfigurationDto {
    id: number;
    testDuration: number;
    noOfQuestions: number;
    testType: number;
}


export class UserTestConfigurationDto implements IUserTestConfigurationDto {
    static fromJS(data: any): UserTestConfigurationDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserTestConfigurationDto();
        result.init(data);
        return result;
    }

    id: number;
    testDuration: number;
    noOfQuestions: number;
    testType: number;

    constructor(data?: IUserTestConfigurationDto) {
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
            this.testDuration = data['testDuration'];
            this.noOfQuestions = data['noOfQuestions'];
            this.testType = data['testType'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['testDuration'] = this.testDuration;
        data['noOfQuestions'] = this.noOfQuestions;
        data['testType'] = this.testType;


        return data;
    }

    clone(): UserTestConfigurationDto {
        const json = this.toJSON();
        const result = new UserTestConfigurationDto();
        result.init(json);
        return result;
    }
}
