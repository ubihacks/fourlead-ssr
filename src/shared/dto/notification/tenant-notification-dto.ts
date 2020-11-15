import { NotificationDataDto } from './notification-data';
export interface ITenantNotificationDto {
    notificationName: string;
    id: string;
    data: NotificationDataDto;
}


export class TenantNotificationDto implements ITenantNotificationDto {
    static fromJS(data: any): TenantNotificationDto {
        data = typeof data === 'object' ? data : {};
        const result = new TenantNotificationDto();
        result.init(data);
        return result;
    }

    notificationName: string;
    id: string;
    data: NotificationDataDto;


    constructor(data?: ITenantNotificationDto) {
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
            this.notificationName = data['notificationName'];
            this.id = data['id'];
            this.data = data['data'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['notificationName'] = this.notificationName;
        data['id'] = this.id;
        data['data'] = this.data;
        return data;
    }

    clone(): TenantNotificationDto {
        const json = this.toJSON();
        const result = new TenantNotificationDto();
        result.init(json);
        return result;
    }
}

export interface IListTenantNotificationDto {
    items: TenantNotificationDto[] | undefined;
    totalCount: number;
}


export class ListTenantNotificationDto implements IListTenantNotificationDto {
    static fromJS(data: any): ListTenantNotificationDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListTenantNotificationDto();
        result.init(data);
        return result;
    }
    items: TenantNotificationDto[] | undefined;
    totalCount: number;

    constructor(data?: IListTenantNotificationDto) {
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
                    this.items.push(TenantNotificationDto.fromJS(item));
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

    clone(): ListTenantNotificationDto {
        const json = this.toJSON();
        const result = new ListTenantNotificationDto();
        result.init(json);
        return result;
    }
}
