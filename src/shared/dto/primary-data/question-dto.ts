import { QuestionAnswerDto } from './question-answer-dto';


export interface IQuestionDto {
    id: number;
    questionText: string;
    testType: number;
    description: string;
    questionAnswers: QuestionAnswerDto[];
}


export class QuestionDto implements IQuestionDto {
    static fromJS(data: any): QuestionDto {
        data = typeof data === 'object' ? data : {};
        const result = new QuestionDto();
        result.init(data);
        return result;
    }

    id: number;
    questionText: string;
    testType: number;
    description: string;
    questionAnswers: QuestionAnswerDto[];

    constructor(data?: IQuestionDto) {
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
            this.questionText = data['questionText'];
            this.testType = data['testType'];
            this.description = data['description'];
            this.questionAnswers = data['questionAnswers'];

        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['questionText'] = this.questionText;
        data['testType'] = this.testType;
        data['description'] = this.description;
        data['questionAnswers'] = this.questionAnswers;

    }

    clone(): QuestionDto {
        const json = this.toJSON();
        const result = new QuestionDto();
        result.init(json);
        return result;
    }
}



export interface IListQuestionDto {
    items: QuestionDto[] | undefined;
    totalCount: number;
}


export class ListQuestionDto implements IListQuestionDto {
    static fromJS(data: any): ListQuestionDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListQuestionDto();
        result.init(data);
        return result;
    }
    items: QuestionDto[] | undefined;
    totalCount: number;

    constructor(data?: IListQuestionDto) {
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
                    this.items.push(QuestionDto.fromJS(item));
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

    clone(): ListQuestionDto {
        const json = this.toJSON();
        const result = new ListQuestionDto();
        result.init(json);
        return result;
    }
}
