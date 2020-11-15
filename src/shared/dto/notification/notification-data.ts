export interface INotificationDataDto {
    message: string;
}


export class NotificationDataDto implements INotificationDataDto {
    static fromJS(data: any): NotificationDataDto {
        data = typeof data === 'object' ? data : {};
        const result = new NotificationDataDto();
        result.init(data);
        return result;
    }

    message: string;

    constructor(data?: INotificationDataDto) {
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
            this.message = data['message'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['message'] = this.message;
        return data;
    }

    clone(): NotificationDataDto {
        const json = this.toJSON();
        const result = new NotificationDataDto();
        result.init(json);
        return result;
    }
}
