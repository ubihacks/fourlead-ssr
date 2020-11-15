
export class RegisterInput implements IRegisterInput {
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  password: string;
  captchaResponse: string | undefined;
  tenantId: number;
  roleId: number;
  resultToken:string | undefined;

  constructor(data?: IRegisterInput) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
  }

  init(data?: any) {
      if (data) {
          this.name = data["name"];
          this.surname = data["surname"];
          this.userName = data["userName"];
          this.emailAddress = data["emailAddress"];
          this.password = data["password"];
          this.captchaResponse = data["captchaResponse"];
          this.tenantId = data["tenantId"];
          this.roleId = data["roleId"];
          this.resultToken = data["resultToken"];
      }
  }

  static fromJS(data: any): RegisterInput {
      data = typeof data === 'object' ? data : {};
      let result = new RegisterInput();
      result.init(data);
      return result;
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["name"] = this.name;
      data["surname"] = this.surname;
      data["userName"] = this.userName;
      data["emailAddress"] = this.emailAddress;
      data["password"] = this.password;
      data["captchaResponse"] = this.captchaResponse;
      data["tenantId"] = this.tenantId;
      data["roleId"] = this.roleId;
      data["resultToken"] = this.resultToken;
      return data;
  }

  clone(): RegisterInput {
      const json = this.toJSON();
      let result = new RegisterInput();
      result.init(json);
      return result;
  }
}

export interface IRegisterInput {
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  password: string;
  captchaResponse: string | undefined;
  tenantId: number;roleId: number;
}

export class RegisterOutput implements IRegisterOutput {
  canLogin: boolean | undefined;

  constructor(data?: IRegisterOutput) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
  }

  init(data?: any) {
      if (data) {
          this.canLogin = data["canLogin"];
      }
  }

  static fromJS(data: any): RegisterOutput {
      data = typeof data === 'object' ? data : {};
      let result = new RegisterOutput();
      result.init(data);
      return result;
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["canLogin"] = this.canLogin;
      return data;
  }

  clone(): RegisterOutput {
      const json = this.toJSON();
      let result = new RegisterOutput();
      result.init(json);
      return result;
  }
}

export interface IRegisterOutput {
  canLogin: boolean | undefined;
}
