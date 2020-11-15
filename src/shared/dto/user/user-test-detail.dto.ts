import { QuestionDto } from '../primary-data/question-dto';
import { UserTestDetailAnswerDto } from './user-test-detail-answer.dto';
export enum StaticAnswerCatalog {
    Yes = 1,
    No,
    StronglyDisagree,
    Disagree,
    NeitherAgreeOrDisagree,
    Agree,
    StronglyAgree,
}
export interface IUserTestDetailDto {
    id: number;
    userTestId: number;
    questionId: number;

    question: QuestionDto;
    selectedAnswers: UserTestDetailAnswerDto[];
}


export class UserTestDetailDto implements IUserTestDetailDto {
    static fromJS(data: any): UserTestDetailDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserTestDetailDto();
        result.init(data);
        return result;
    }

    id: number;
    userTestId: number;
    questionId: number;
    question: QuestionDto;
    selectedAnswers: UserTestDetailAnswerDto[];
    constructor(data?: IUserTestDetailDto) {
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
            this.userTestId = data['userTestId'];
            this.questionId = data['questionId'];

            this.question = data['question'];
            this.selectedAnswers = data['selectedAnswers'];

        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['userTestId'] = this.userTestId;
        data['questionId'] = this.questionId;

        data['question'] = this.question;
        data['selectedAnswers'] = this.selectedAnswers;

        return data;
    }

    clone(): UserTestDetailDto {
        const json = this.toJSON();
        const result = new UserTestDetailDto();
        result.init(json);
        return result;
    }
}
