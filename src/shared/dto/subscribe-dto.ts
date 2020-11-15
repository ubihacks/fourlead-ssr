export interface ISubscribeDto {
    saved: boolean;
    tenantId: number;
}


export class SubscribeDto implements ISubscribeDto {
    static fromJS(data: any): SubscribeDto {
        data = typeof data === 'object' ? data : {};
        const result = new SubscribeDto();
        result.init(data);
        return result;
    }

    saved: boolean;
    tenantId: number;

    constructor(data?: ISubscribeDto) {
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
            this.saved = data['saved'];
            this.tenantId = data['tenantId'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['saved'] = this.saved;
        data['tenantId'] = this.tenantId;
        return data;
    }

    clone(): SubscribeDto {
        const json = this.toJSON();
        const result = new SubscribeDto();
        result.init(json);
        return result;
    }
}
