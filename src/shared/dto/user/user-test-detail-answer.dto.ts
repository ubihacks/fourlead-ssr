import { QuestionDto } from '../primary-data/question-dto';
import { QuestionAnswerDto } from '../primary-data/question-answer-dto';

export interface IUserTestDetailAnswerDto {
    id: number;
    userTestDetailId: number;
    answerId: number;
    staticAnswerId: number;
    answerOrder: number;

    answer: QuestionAnswerDto;
}


export class UserTestDetailAnswerDto implements IUserTestDetailAnswerDto {
    static fromJS(data: any): UserTestDetailAnswerDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserTestDetailAnswerDto();
        result.init(data);
        return result;
    }
    id: number;
    userTestDetailId: number;
    answerId: number;
    staticAnswerId: number;
    answerOrder: number;

    answer: QuestionAnswerDto;
    constructor(data?: IUserTestDetailAnswerDto) {
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
            this.userTestDetailId = data['userTestDetailId'];
            this.answerId = data['answerId'];
            this.staticAnswerId = data['staticAnswerId'];
            this.answerOrder = data['answerOrder'];
            this.answer = data['answer'];

        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['userTestDetailId'] = this.userTestDetailId;
        data['answerId'] = this.answerId;
        data['staticAnswerId'] = this.staticAnswerId;
        data['answerOrder'] = this.answerOrder;
        data['answer'] = this.answer;

        return data;
    }

    clone(): UserTestDetailAnswerDto {
        const json = this.toJSON();
        const result = new UserTestDetailAnswerDto();
        result.init(json);
        return result;
    }
}
