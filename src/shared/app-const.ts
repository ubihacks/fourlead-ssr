export class AppConsts {

  static remoteServiceBaseUrl: string;
  static appBaseUrl: string;
  static currentAppUrl: string;

  static isContactConfirmationEnabled: string;
  static appBaseHref: string; // returns angular's base-href parameter value if used during the publish

  static facebook = {
    isEnabled: '',
    appId: '',
    appSecret: ''
  };
  static google = {
    isEnabled: '',
    appId: '',
    appSecret: ''
  };

  static localeMappings: any = [];

  static readonly userManagement = {
    defaultAdminUserName: 'admin'
  };

  static readonly localization = {
    defaultLocalizationSourceName: 'Fourlead'
  };

  static readonly authorization = {
    localStoreEncrptAuthToken: 'local_store_enc_auth_token',
    localStoreAuthToken: 'local_store_auth_token',
    localStoreAuthTokenExpiry: 'local_store_enc_auth_token_exp',
    encrptedAuthTokenName: 'enc_auth_token',
    tokenCookieName: 'tokenCookieName'
  };

  static readonly multiTenancy = {
    tenantIdCookieName: 'Abp.TenantId'
  };
}
