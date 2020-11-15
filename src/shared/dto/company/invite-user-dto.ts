
export interface IInviteUserDto {
    roleId: number;
    email: string;
}


export class InviteUserDto implements IInviteUserDto {
    static fromJS(data: any): InviteUserDto {
        data = typeof data === 'object' ? data : {};
        const result = new InviteUserDto();
        result.init(data);
        return result;
    }
    roleId: number;
    email: string;

    constructor(data?: IInviteUserDto) {
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
            this.roleId = data['roleId'];
            this.email = data['email'];
        }
    }



    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['roleId'] = this.roleId;
        data['email'] = this.email;
        return data;
    }

    clone(): InviteUserDto {
        const json = this.toJSON();
        const result = new InviteUserDto();
        result.init(json);
        return result;
    }
}
