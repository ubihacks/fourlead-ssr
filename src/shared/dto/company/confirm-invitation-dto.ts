export interface IConfirmInvitationDto {
    userId: number | undefined;
    tenantId: number | undefined;
    roleId: number | undefined;
}

export class ConfirmInvitationDto implements IConfirmInvitationDto {
    static fromJS(data: any): ConfirmInvitationDto {
        data = typeof data === 'object' ? data : {};
        const result = new ConfirmInvitationDto();
        result.init(data);
        return result;
    }

    userId: number | undefined;
    tenantId: number | undefined;
    roleId: number | undefined;

    constructor(data?: IConfirmInvitationDto) {
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
            this.userId = data['userId'];
            this.tenantId = data['tenantId'];
            this.roleId = data['roleId'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['userId'] = this.userId;
        data['tenantId'] = this.tenantId;
        data['roleId'] = this.roleId;

        return data;
    }

    clone(): ConfirmInvitationDto {
        const json = this.toJSON();
        const result = new ConfirmInvitationDto();
        result.init(json);
        return result;
    }
}
