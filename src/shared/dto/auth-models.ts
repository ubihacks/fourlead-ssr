import Swal from 'sweetalert2'
export interface IResendVerificationEmailInputDto {
  email: string | undefined;
}


export class ResendVerificationEmailInputDto implements IResendVerificationEmailInputDto {

  constructor(data?: IResendVerificationEmailInputDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  email: string | undefined;

  static fromJS(data: any): ResendVerificationEmailInputDto {
    data = typeof data === 'object' ? data : {};
    const result = new ResendVerificationEmailInputDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.email = data.email;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.email = this.email;
    return data;
  }

  clone(): ResendVerificationEmailInputDto {
    const json = this.toJSON();
    const result = new ResendVerificationEmailInputDto();
    result.init(json);
    return result;
  }
}

export interface IContactConfirmInputDto {
  code: string | undefined;
}

export class ContactConfirmInputDto implements IContactConfirmInputDto {

  constructor(data?: IContactConfirmInputDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  code: string | undefined;

  static fromJS(data: any): ContactConfirmInputDto {
    data = typeof data === 'object' ? data : {};
    const result = new ContactConfirmInputDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.code = data.code;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.code = this.code;
    return data;
  }

  clone(): ContactConfirmInputDto {
    const json = this.toJSON();
    const result = new ContactConfirmInputDto();
    result.init(json);
    return result;
  }
}
export interface IForgotPasswordInputDto {
  email: string | undefined;
}

export class ForgotPasswordInputDto implements IForgotPasswordInputDto {

  constructor(data?: IForgotPasswordInputDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  email: string | undefined;

  static fromJS(data: any): ForgotPasswordInputDto {
    data = typeof data === 'object' ? data : {};
    const result = new ForgotPasswordInputDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.email = data.email;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.email = this.email;
    return data;
  }

  clone(): ForgotPasswordInputDto {
    const json = this.toJSON();
    const result = new ForgotPasswordInputDto();
    result.init(json);
    return result;
  }
}


export interface IContactUsCareerDto {
  yourName: string | undefined;
  email: string | undefined;
  contactNo: string | undefined;
}

export class  ContactUsCareerDto implements IContactUsCareerDto {

  constructor(data?: IContactUsCareerDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  yourName: string | undefined;
  email: string | undefined;
  contactNo: string | undefined; 

  static fromJS(data: any): ContactUsDto {
    data = typeof data === 'object' ? data : {};
    const result = new ContactUsDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.yourName = data.yourName;
      this.email = data.email;
      this.contactNo = data.contactNo; 
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.yourName = this.yourName;
    data.email = this.email;
    data.contactNo = this.contactNo; 

    return data;
  }

  clone(): ContactUsDto {
    const json = this.toJSON();
    const result = new ContactUsDto();
    result.init(json);
    return result;
  }
}

export interface IContactUsDto {
  yourName: string | undefined;
  email: string | undefined;
  contactNo: string | undefined;
  message: string | undefined;
}

export class ContactUsDto implements IContactUsDto {

  constructor(data?: IContactUsDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  yourName: string | undefined;
  email: string | undefined;
  contactNo: string | undefined;
  message: string | undefined;

  static fromJS(data: any): ContactUsDto {
    data = typeof data === 'object' ? data : {};
    const result = new ContactUsDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.yourName = data.yourName;
      this.email = data.email;
      this.contactNo = data.contactNo;
      this.message = data.message;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.yourName = this.yourName;
    data.email = this.email;
    data.contactNo = this.contactNo;
    data.message = this.message;

    return data;
  }

  clone(): ContactUsDto {
    const json = this.toJSON();
    const result = new ContactUsDto();
    result.init(json);
    return result;
  }
}


export interface IForgotPasswordDto {
  userId: number | undefined;
  code: string | undefined;
  userName: string | undefined;
  email: string | undefined;
  newPassword: string | undefined;
}

export class ForgotPasswordDto implements IForgotPasswordDto {

  constructor(data?: IForgotPasswordDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  userId: number | undefined;
  code: string | undefined;
  userName: string | undefined;
  email: string | undefined;
  newPassword: string | undefined;

  static fromJS(data: any): ForgotPasswordDto {
    data = typeof data === 'object' ? data : {};
    const result = new ForgotPasswordDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.userId = data.userId;
      this.code = data.code;
      this.userName = data.userName;
      this.newPassword = data.newPassword;
      this.email = data.email;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.userId = this.userId;
    data.code = this.code;
    data.newPassword = this.newPassword;
    data.userName = this.userName;
    data.email = this.email;

    return data;
  }

  clone(): ForgotPasswordDto {
    const json = this.toJSON();
    const result = new ForgotPasswordDto();
    result.init(json);
    return result;
  }
}

export interface IConfirmEmailOuputDto {
  canLogin: boolean | undefined;
}

export class ConfirmEmailOuputDto implements IConfirmEmailOuputDto {

  constructor(data?: IConfirmEmailOuputDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  canLogin: boolean | undefined;

  static fromJS(data: any): ConfirmEmailOuputDto {
    data = typeof data === 'object' ? data : {};
    const result = new ConfirmEmailOuputDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.canLogin = data.canLogin;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.canLogin = this.canLogin;
    return data;
  }

  clone(): ConfirmEmailOuputDto {
    const json = this.toJSON();
    const result = new ConfirmEmailOuputDto();
    result.init(json);
    return result;
  }
}

export class ChangeUiThemeInput implements IChangeUiThemeInput {

  constructor(data?: IChangeUiThemeInput) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  theme: string;

  static fromJS(data: any): ChangeUiThemeInput {
    data = typeof data === 'object' ? data : {};
    const result = new ChangeUiThemeInput();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.theme = data.theme;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.theme = this.theme;
    return data;
  }

  clone(): ChangeUiThemeInput {
    const json = this.toJSON();
    const result = new ChangeUiThemeInput();
    result.init(json);
    return result;
  }
}

export interface IChangeUiThemeInput {
  theme: string;
}

export class UserLoginInfoDto implements IUserLoginInfoDto {

  constructor(data?: IUserLoginInfoDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  name: string | undefined;
  surname: string | undefined;
  userName: string | undefined;
  emailAddress: string | undefined;
  id: number | undefined;

  static fromJS(data: any): UserLoginInfoDto {
    data = typeof data === 'object' ? data : {};
    const result = new UserLoginInfoDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.name = data.name;
      this.surname = data.surname;
      this.userName = data.userName;
      this.emailAddress = data.emailAddress;
      this.id = data.id;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.name = this.name;
    data.surname = this.surname;
    data.userName = this.userName;
    data.emailAddress = this.emailAddress;
    data.id = this.id;
    return data;
  }

  clone(): UserLoginInfoDto {
    const json = this.toJSON();
    const result = new UserLoginInfoDto();
    result.init(json);
    return result;
  }
}

export interface IUserLoginInfoDto {
  name: string | undefined;
  surname: string | undefined;
  userName: string | undefined;
  emailAddress: string | undefined;
  id: number | undefined;
}

export class TenantLoginInfoDto implements ITenantLoginInfoDto {

  constructor(data?: ITenantLoginInfoDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  tenancyName: string | undefined;
  name: string | undefined;
  id: number | undefined;

  static fromJS(data: any): TenantLoginInfoDto {
    data = typeof data === 'object' ? data : {};
    const result = new TenantLoginInfoDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.tenancyName = data.tenancyName;
      this.name = data.name;
      this.id = data.id;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.tenancyName = this.tenancyName;
    data.name = this.name;
    data.id = this.id;
    return data;
  }

  clone(): TenantLoginInfoDto {
    const json = this.toJSON();
    const result = new TenantLoginInfoDto();
    result.init(json);
    return result;
  }
}

export interface ITenantLoginInfoDto {
  tenancyName: string | undefined;
  name: string | undefined;
  id: number | undefined;
}

export class CreateTenantDto implements ICreateTenantDto {

  constructor(data?: ICreateTenantDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  tenancyName: string;
  name: string;
  adminEmailAddress: string;
  connectionString: string | undefined;
  isActive: boolean | undefined;

  static fromJS(data: any): CreateTenantDto {
    data = typeof data === 'object' ? data : {};
    const result = new CreateTenantDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.tenancyName = data.tenancyName;
      this.name = data.name;
      this.adminEmailAddress = data.adminEmailAddress;
      this.connectionString = data.connectionString;
      this.isActive = data.isActive;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.tenancyName = this.tenancyName;
    data.name = this.name;
    data.adminEmailAddress = this.adminEmailAddress;
    data.connectionString = this.connectionString;
    data.isActive = this.isActive;
    return data;
  }

  clone(): CreateTenantDto {
    const json = this.toJSON();
    const result = new CreateTenantDto();
    result.init(json);
    return result;
  }
}

export interface ICreateTenantDto {
  tenancyName: string;
  name: string;
  adminEmailAddress: string;
  connectionString: string | undefined;
  isActive: boolean | undefined;
}
export class AuthenticateModel implements IAuthenticateModel {

  constructor(data?: IAuthenticateModel) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  userNameOrEmailAddress: string;
  password: string;
  rememberClient: boolean | undefined;

  static fromJS(data: any): AuthenticateModel {
    data = typeof data === 'object' ? data : {};
    const result = new AuthenticateModel();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.userNameOrEmailAddress = data.userNameOrEmailAddress;
      this.password = data.password;
      this.rememberClient = data.rememberClient;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.userNameOrEmailAddress = this.userNameOrEmailAddress;
    data.password = this.password;
    data.rememberClient = this.rememberClient;
    return data;
  }

  clone(): AuthenticateModel {
    const json = this.toJSON();
    const result = new AuthenticateModel();
    result.init(json);
    return result;
  }
}

export interface IAuthenticateModel {
  userNameOrEmailAddress: string;
  password: string;
  rememberClient: boolean | undefined;
}

export class AuthenticateResultModel implements IAuthenticateResultModel {

  constructor(data?: IAuthenticateResultModel) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  id: number;
  accessToken: string | undefined;
  encryptedAccessToken: string | undefined;
  expireInSeconds: number | undefined;
  userId: number | undefined;
  userProfileCreated: boolean | undefined;
  isEmailConfirmed: boolean | undefined;
  isContactConfirmed: boolean | undefined;

  static fromJS(data: any): AuthenticateResultModel {
    data = typeof data === 'object' ? data : {};
    const result = new AuthenticateResultModel();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.accessToken = data.accessToken;
      this.encryptedAccessToken = data.encryptedAccessToken;
      this.expireInSeconds = data.expireInSeconds;
      this.userId = data.userId;
      this.userProfileCreated = data.userProfileCreated;
      this.isEmailConfirmed = data.isEmailConfirmed;
      this.isContactConfirmed = data.isContactConfirmed;
      this.id = data.id;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.accessToken = this.accessToken;
    data.encryptedAccessToken = this.encryptedAccessToken;
    data.expireInSeconds = this.expireInSeconds;
    data.userId = this.userId;
    data.userProfileCreated = this.userProfileCreated;
    data.isEmailConfirmed = this.isEmailConfirmed;
    data.isContactConfirmed = this.isContactConfirmed;
    data.id = this.id;
    return data;
  }

  clone(): AuthenticateResultModel {
    const json = this.toJSON();
    const result = new AuthenticateResultModel();
    result.init(json);
    return result;
  }
}

export interface IAuthenticateResultModel {
  id: number;
  accessToken: string | undefined;
  encryptedAccessToken: string | undefined;
  expireInSeconds: number | undefined;
  userId: number | undefined;
  userProfileCreated: boolean | undefined;
  isEmailConfirmed: boolean | undefined;
  isContactConfirmed: boolean | undefined;

}

export class ExternalLoginProviderInfoModel implements IExternalLoginProviderInfoModel {

  constructor(data?: IExternalLoginProviderInfoModel) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  name: string | undefined;
  clientId: string | undefined;

  static fromJS(data: any): ExternalLoginProviderInfoModel {
    data = typeof data === 'object' ? data : {};
    const result = new ExternalLoginProviderInfoModel();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.name = data.name;
      this.clientId = data.clientId;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.name = this.name;
    data.clientId = this.clientId;
    return data;
  }

  clone(): ExternalLoginProviderInfoModel {
    const json = this.toJSON();
    const result = new ExternalLoginProviderInfoModel();
    result.init(json);
    return result;
  }
}

export interface IExternalLoginProviderInfoModel {
  name: string | undefined;
  clientId: string | undefined;
}

export class ExternalAuthenticateModel implements IExternalAuthenticateModel {

  constructor(data?: IExternalAuthenticateModel) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  authProvider: string;
  providerKey: string;
  providerAccessCode: string;

  static fromJS(data: any): ExternalAuthenticateModel {
    data = typeof data === 'object' ? data : {};
    const result = new ExternalAuthenticateModel();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.authProvider = data.authProvider;
      this.providerKey = data.providerKey;
      this.providerAccessCode = data.providerAccessCode;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.authProvider = this.authProvider;
    data.providerKey = this.providerKey;
    data.providerAccessCode = this.providerAccessCode;
    return data;
  }

  clone(): ExternalAuthenticateModel {
    const json = this.toJSON();
    const result = new ExternalAuthenticateModel();
    result.init(json);
    return result;
  }
}

export interface IExternalAuthenticateModel {
  authProvider: string;
  providerKey: string;
  providerAccessCode: string;
}

export class ExternalAuthenticateResultModel implements IExternalAuthenticateResultModel {

  constructor(data?: IExternalAuthenticateResultModel) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  accessToken: string | undefined;
  encryptedAccessToken: string | undefined;
  expireInSeconds: number | undefined;
  waitingForActivation: boolean | undefined;
  userId: number | undefined;
  userProfileCreated: boolean | undefined;
  isEmailConfirmed: boolean | undefined;
  isContactConfirmed : boolean | undefined;

  static fromJS(data: any): ExternalAuthenticateResultModel {
    data = typeof data === 'object' ? data : {};
    const result = new ExternalAuthenticateResultModel();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.accessToken = data.accessToken;
      this.encryptedAccessToken = data.encryptedAccessToken;
      this.expireInSeconds = data.expireInSeconds;
      this.waitingForActivation = data.waitingForActivation;
      this.userId = data.userId;
      this.userProfileCreated = data.userProfileCreated;
      this.isEmailConfirmed = data.isEmailConfirmed;
      this.isContactConfirmed = data.isContactConfirmed;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.accessToken = this.accessToken;
    data.encryptedAccessToken = this.encryptedAccessToken;
    data.expireInSeconds = this.expireInSeconds;
    data.waitingForActivation = this.waitingForActivation;
    data.userId = this.userId;
    data.userProfileCreated = this.userProfileCreated;
    data.isEmailConfirmed = this.isEmailConfirmed;
    data.isContactConfirmed = this.isContactConfirmed;
    return data;
  }

  clone(): ExternalAuthenticateResultModel {
    const json = this.toJSON();
    const result = new ExternalAuthenticateResultModel();
    result.init(json);
    return result;
  }
}

export interface IExternalAuthenticateResultModel {
  accessToken: string | undefined;
  encryptedAccessToken: string | undefined;
  expireInSeconds: number | undefined;
  waitingForActivation: boolean | undefined;
  userId: number | undefined;
  userProfileCreated: boolean | undefined;
  isEmailConfirmed: boolean | undefined;
  isContactConfirmed:boolean | undefined;
}


export class ChangePasswordDto implements IChangePasswordDto {

  constructor(data?: IChangePasswordDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  currentPassword: string;
  newPassword: string;

  static fromJS(data: any): ChangePasswordDto {
    data = typeof data === 'object' ? data : {};
    const result = new ChangePasswordDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.currentPassword = data.currentPassword;
      this.newPassword = data.newPassword;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.currentPassword = this.currentPassword;
    data.newPassword = this.newPassword;
    return data;
  }

  clone(): ChangePasswordDto {
    const json = this.toJSON();
    const result = new ChangePasswordDto();
    result.init(json);
    return result;
  }
}

export interface IChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

export class ResetPasswordDto implements IResetPasswordDto {

  constructor(data?: IResetPasswordDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  adminPassword: string;
  userId: number;
  newPassword: string;

  static fromJS(data: any): ResetPasswordDto {
    data = typeof data === 'object' ? data : {};
    const result = new ResetPasswordDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.adminPassword = data.adminPassword;
      this.userId = data.userId;
      this.newPassword = data.newPassword;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.adminPassword = this.adminPassword;
    data.userId = this.userId;
    data.newPassword = this.newPassword;
    return data;
  }

  clone(): ResetPasswordDto {
    const json = this.toJSON();
    const result = new ResetPasswordDto();
    result.init(json);
    return result;
  }
}

export interface IResetPasswordDto {
  adminPassword: string;
  userId: number;
  newPassword: string;
}


export enum IsTenantAvailableOutputState {
  _1 = 1,
  _2 = 2,
  _3 = 3,
}

export class SwaggerException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any; };
  result: any;

  constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isSwaggerException = true;

  static isSwaggerException(obj: any): obj is SwaggerException {
    return obj.isSwaggerException === true;
  }
}


export class GetCurrentLoginInformationsOutput implements IGetCurrentLoginInformationsOutput {

  constructor(data?: IGetCurrentLoginInformationsOutput) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  application: ApplicationInfoDto | undefined;
  user: UserLoginInfoDto | undefined;
  tenant: TenantLoginInfoDto | undefined;

  static fromJS(data: any): GetCurrentLoginInformationsOutput {
    data = typeof data === 'object' ? data : {};
    const result = new GetCurrentLoginInformationsOutput();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.application = data.application ? ApplicationInfoDto.fromJS(data.application) : undefined as any;
      this.user = data.user ? UserLoginInfoDto.fromJS(data.user) : undefined as any;
      this.tenant = data.tenant ? TenantLoginInfoDto.fromJS(data.tenant) : undefined as any;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.application = this.application ? this.application.toJSON() : undefined as any;
    data.user = this.user ? this.user.toJSON() : undefined as any;
    data.tenant = this.tenant ? this.tenant.toJSON() : undefined as any;
    return data;
  }

  clone(): GetCurrentLoginInformationsOutput {
    const json = this.toJSON();
    const result = new GetCurrentLoginInformationsOutput();
    result.init(json);
    return result;
  }
}

export interface IGetCurrentLoginInformationsOutput {
  application: ApplicationInfoDto | undefined;
  user: UserLoginInfoDto | undefined;
  tenant: TenantLoginInfoDto | undefined;
}


export class ApplicationInfoDto implements IApplicationInfoDto {

  constructor(data?: IApplicationInfoDto) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
  version: string | undefined;
  releaseDate: any | undefined;
  features: { [key: string]: boolean; } | undefined;

  static fromJS(data: any): ApplicationInfoDto {
    data = typeof data === 'object' ? data : {};
    const result = new ApplicationInfoDto();
    result.init(data);
    return result;
  }

  init(data?: any) {
    if (data) {
      this.version = data.version;
      this.releaseDate = data.releaseDate;
      if (data.features) {
        this.features = {};
        for (const key in data.features) {
          if (data.features.hasOwnProperty(key)) {
            this.features[key] = data.features[key];
          }
        }
      }
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.version = this.version;
    data.releaseDate = this.releaseDate ? this.releaseDate.toISOString() : undefined as any;
    if (this.features) {
      data.features = {};
      for (const key in this.features) {
        if (this.features.hasOwnProperty(key)) {
          data.features[key] = this.features[key];
        }
      }
    }
    return data;
  }

  clone(): ApplicationInfoDto {
    const json = this.toJSON();
    const result = new ApplicationInfoDto();
    result.init(json);
    return result;
  }
}

export interface IApplicationInfoDto {
  version: string | undefined;
  releaseDate: any | undefined;
  features: { [key: string]: boolean; } | undefined;
}
