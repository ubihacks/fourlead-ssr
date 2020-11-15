import { UserTestDto } from './user-test-dto';
import { LevelDto } from '../primary-data/level-dto';

export interface IUserTestResultDto {
    id: number;
    userTestId: number;
    resultToken: string;
    levelId: number;
    percentage: number;
    noOfCorrectAnswer: number;
    noOfInCorrectAnswer: number;
    noOfUnAttemptedQuestions: number;
    userTest: UserTestDto;
    level: LevelDto;
    publicBehaviourImage: string;
    privateBehaviourImage: string;
    publicBehaviourLevel: LevelDto;
    privateBehaviourLevel: LevelDto;
    userTestBehaviourDetails: UserTestBehaviourDetailDto[];

}


export class UserTestResultDto implements IUserTestResultDto {

    constructor(data?: IUserTestResultDto) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any> this)[property] = (<any> data)[property];
                }
            }
        }
    }

    id: number;
    userTestId: number;
    resultToken: string;
    levelId: number;
    percentage: number;
    noOfCorrectAnswer: number;
    noOfInCorrectAnswer: number;
    noOfUnAttemptedQuestions: number;
    userTest: UserTestDto;
    level: LevelDto;
    publicBehaviourImage: string;
    privateBehaviourImage: string;
    publicBehaviourLevel: LevelDto;
    privateBehaviourLevel: LevelDto;
    userTestBehaviourDetails: UserTestBehaviourDetailDto[];
    static fromJS(data: any): UserTestResultDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserTestResultDto();
        result.init(data);
        return result;
    }

    init(data?: any) {
        if (data) {
            this.id = data.id;
            this.userTestId = data.userTestId;
            this.resultToken = data.resultToken;
            this.levelId = data.levelId;
            this.percentage = data.percentage;
            this.noOfCorrectAnswer = data.noOfCorrectAnswer;
            this.noOfInCorrectAnswer = data.noOfInCorrectAnswer;
            this.noOfUnAttemptedQuestions = data.noOfUnAttemptedQuestions;
            this.userTest = data.userTest;
            this.level = data.level;
            this.publicBehaviourImage = data.publicBehaviourImage;
            this.privateBehaviourImage = data.privateBehaviourImage;
            this.publicBehaviourLevel = data.publicBehaviourLevel;
            this.privateBehaviourLevel = data.privateBehaviourLevel;
            this.userTestBehaviourDetails = data.userTestBehaviourDetails;
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.id = this.id;
        data.userTestId = this.userTestId;
        data.levelId = this.levelId;
        data.percentage = this.percentage;
        data.noOfCorrectAnswer = this.noOfCorrectAnswer;
        data.noOfInCorrectAnswer = this.noOfInCorrectAnswer;
        data.noOfUnAttemptedQuestions = this.noOfUnAttemptedQuestions;
        data.userTest = this.userTest;
        data.level = this.level;
        data.publicBehaviourImage =  this.publicBehaviourImage;
        data.privateBehaviourImage = this.privateBehaviourImage;
        data.publicBehaviourLevel =  this.publicBehaviourLevel;
        data.privateBehaviourLevel = this.privateBehaviourLevel;
        data.userTestBehaviourDetails = this.userTestBehaviourDetails;
        return data;
    }

    clone(): UserTestResultDto {
        const json = this.toJSON();
        const result = new UserTestResultDto();
        result.init(json);
        return result;
    }
}


export enum BehaviourGraphTypeCatalog
{
   G1 = 1,
   G2 = 2,
   G3 = 3
}


export interface IUserTestBehaviourDetailDto {
    userTestResultId: number;
    userTestId: number;
    d: number;
    i: number;
    s: number;
    c: number;
    graphType: BehaviourGraphTypeCatalog;
}
export class UserTestBehaviourDetailDto implements IUserTestBehaviourDetailDto {

    constructor(data?: IUserTestBehaviourDetailDto) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any> this)[property] = (<any> data)[property];
                }
            }
        }
    }
    userTestResultId: number;
    userTestId: number;
    d: number;
    i: number;
    s: number;
    c: number;

    graphType: BehaviourGraphTypeCatalog;
    static fromJS(data: any): UserTestBehaviourDetailDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserTestBehaviourDetailDto();
        result.init(data);
        return result;
    }
    init(data?: any) {
        if (data) {
            this.userTestResultId = data.userTestResultId;
            this.userTestId = data.userTestId;
            this.graphType = data.graphType;
            this.d = data.d;
            this.i = data.i;
            this.s = data.s;
            this.c = data.c;

        }
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.userTestResultId = this.userTestResultId;
        data.userTestId = this.userTestId;
        data.graphType = this.graphType;
        data.d = this.d;
        data.i = this.i;
        data.s = this.s;
        data.c = this.c;

        return data;
    }

    clone(): UserTestBehaviourDetailDto {
        const json = this.toJSON();
        const result = new UserTestBehaviourDetailDto();
        result.init(json);
        return result;
    }
}

export interface IListUserTestBehaviourDetailDto {
    items: UserTestBehaviourDetailDto[] | undefined;
    totalCount: number;
  }

export class ListUserTestBehaviourDetailDto implements IListUserTestBehaviourDetailDto {

    constructor(data?: IListUserTestBehaviourDetailDto) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any> this)[property] = (<any> data)[property];
                }
            }
        }
    }
    items: UserTestBehaviourDetailDto[] | undefined;
    totalCount: number;
    static fromJS(data: any): ListUserTestBehaviourDetailDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListUserTestBehaviourDetailDto();
        result.init(data);
        return result;
    }

    init(data?: any) {
        if (data) {
            if (data.items && data.items.constructor === Array) {
                this.items = [];
                for (const item of data.items) {
                    this.items.push(UserTestBehaviourDetailDto.fromJS(item));
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

    clone(): ListUserTestBehaviourDetailDto {
        const json = this.toJSON();
        const result = new ListUserTestBehaviourDetailDto();
        result.init(json);
        return result;
    }
  }
