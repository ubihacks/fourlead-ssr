

export interface IQuestionAnswerDto {
    id: number;
    questionId: number;
    answerText: string;
    isCorrect: boolean;
    description: string;
    typeId: string;

}


export class QuestionAnswerDto implements IQuestionAnswerDto {
    static fromJS(data: any): QuestionAnswerDto {
        data = typeof data === 'object' ? data : {};
        const result = new QuestionAnswerDto();
        result.init(data);
        return result;
    }

    id: number;
    questionId: number;
    answerText: string;
    isCorrect: boolean;
    description: string;
    typeId: string;


    constructor(data?: IQuestionAnswerDto) {
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
            this.questionId = data['questionId'];
            this.answerText = data['answerText'];
            this.isCorrect = data['isCorrect'];
            this.description = data['description'];
            this.typeId = data['typeId'];

        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['questionId'] = this.questionId;
        data['answerText'] = this.answerText;
        data['isCorrect'] = this.isCorrect;
        data['description'] = this.description;
        data['typeId'] = this.typeId;

    }

    clone(): QuestionAnswerDto {
        const json = this.toJSON();
        const result = new QuestionAnswerDto();
        result.init(json);
        return result;
    }
}



export interface IListQuestionAnswerDto {
    items: QuestionAnswerDto[] | undefined;
    totalCount: number;
}


export class ListQuestionAnswerDto implements IListQuestionAnswerDto {
    static fromJS(data: any): ListQuestionAnswerDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListQuestionAnswerDto();
        result.init(data);
        return result;
    }
    items: QuestionAnswerDto[] | undefined;
    totalCount: number;

    constructor(data?: IListQuestionAnswerDto) {
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
                    this.items.push(QuestionAnswerDto.fromJS(item));
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

    clone(): ListQuestionAnswerDto {
        const json = this.toJSON();
        const result = new ListQuestionAnswerDto();
        result.init(json);
        return result;
    }
}
