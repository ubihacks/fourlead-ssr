import { TenantNotificationDto } from './tenant-notification-dto';

export enum UserNotificationStateEnum {
    Unread = 0,
    Read = 1
}
export interface IUserNotificationDto {
    userid: number;
    id: string;
    state: UserNotificationStateEnum;
    notification: TenantNotificationDto;
}


export class UserNotificationDto implements IUserNotificationDto {
    static fromJS(data: any): UserNotificationDto {
        data = typeof data === 'object' ? data : {};
        const result = new UserNotificationDto();
        result.init(data);
        return result;
    }

    userid: number;
    id: string;
    state: UserNotificationStateEnum;
    notification: TenantNotificationDto;


    constructor(data?: IUserNotificationDto) {
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
            this.userid = data['userid'];
            this.id = data['id'];
            this.state = data['state'];
            this.notification = data['notification'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['userid'] = this.userid;
        data['id'] = this.id;
        data['state'] = this.state;
        data['notification'] = this.notification;
        return data;
    }

    clone(): UserNotificationDto {
        const json = this.toJSON();
        const result = new UserNotificationDto();
        result.init(json);
        return result;
    }
}

export interface IListUserNotificationDto {
    items: UserNotificationDto[] | undefined;
    totalCount: number;
}


export class ListUserNotificationDto implements IListUserNotificationDto {
    static fromJS(data: any): ListUserNotificationDto {
        data = typeof data === 'object' ? data : {};
        const result = new ListUserNotificationDto();
        result.init(data);
        return result;
    }
    items: UserNotificationDto[] | undefined;
    totalCount: number;

    constructor(data?: IListUserNotificationDto) {
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
                    this.items.push(UserNotificationDto.fromJS(item));
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

    clone(): ListUserNotificationDto {
        const json = this.toJSON();
        const result = new ListUserNotificationDto();
        result.init(json);
        return result;
    }
}
