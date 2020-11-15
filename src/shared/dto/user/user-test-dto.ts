import { UserTestConfigurationDto } from './user-test-configuration.dto';
import { UserTestDetailDto } from './user-test-detail.dto';

export interface IUserTestDto {
    id: number;
    userId: number;
    testType: number;
    startTime: Date;
    endTime: Date;
    configurationId: number;
    userTestDetails: UserTestDetailDto[];
    configuration: UserTestConfigurationDto;
    invitedTest:boolean;
}

export enum TestTypeCatalog
{
    BehaviourAssessment = 1,
    English,
    EnglishPractice,
    Culture,
    OfficePolitics,
    OfficeFlexibility,
}

export class UserTestDto implements IUserTestDto {
    static fromJS(data: any): UserTestDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserTestDto();
        result.init(data);
        return result;
    }

    id: number;
    userId: number;
    testType: number;
    startTime: Date;
    endTime: Date;
    configurationId: number;
    userTestDetails: UserTestDetailDto[];
    configuration: UserTestConfigurationDto;
    invitedTest:boolean;

    constructor(data?: IUserTestDto) {
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
            this.testType = data['testType'];
            this.startTime = data['startTime'];
            this.endTime = data['endTime'];
            this.configurationId = data['configurationId'];
            this.userTestDetails = data['userTestDetails'];
            this.configuration = data['configuration'];
            this.invitedTest = data['invitedTest'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['userId'] = this.userId;
        data['testType'] = this.testType;
        data['startTime'] = this.startTime;
        data['endTime'] = this.endTime;
        data['configurationId'] = this.configurationId;
        data['userTestDetails'] = this.userTestDetails;
        data['configuration'] = this.configuration;
        data['invitedTest'] = this.invitedTest;
        return data;
    }

    clone(): UserTestDto {
        const json = this.toJSON();
        const result = new UserTestDto();
        result.init(json);
        return result;
    }
}
