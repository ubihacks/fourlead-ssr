import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { AppConsts } from './app-const';
import { GetCurrentLoginInformationsOutput, ApplicationInfoDto, UserLoginInfoDto, TenantLoginInfoDto } from './dto/auth-models';
import { SessionServiceProxy } from './proxies/session-proxy.service';
import { AppSessionService } from './session-app.service';
@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;
  public _user: UserLoginInfoDto;
  public _tenant: TenantLoginInfoDto;
  public _application: ApplicationInfoDto;

  get application(): ApplicationInfoDto {
    return this._application;
  }

  get user(): UserLoginInfoDto {
    return this._user;
  }

  get userId(): number {
    return this.user ? this.user.id : null;
  }

  get tenant(): TenantLoginInfoDto {
    return this._tenant;
  }

  get tenantId(): number {
    return this.tenant ? this.tenant.id : null;
  }

  constructor(private http: HttpClient,
    private _sessionService: SessionServiceProxy,
    private _appSessionService: AppSessionService
  ) { }

  loadAppConfig() {
    return this.http.get(`/assets/${environment.appConfig}`)
      .toPromise()
      .then(async data => {
 
        this.appConfig = data;
        AppConsts.appBaseUrl = this.appConfig.appBaseUrl; 
        AppConsts.currentAppUrl = this.appConfig.currentAppUrl; 
        AppConsts.remoteServiceBaseUrl = this.appConfig.remoteServiceBaseUrl;
        AppConsts.isContactConfirmationEnabled = this.appConfig.isContactConfirmationEnabled;
        AppConsts.facebook.isEnabled = this.appConfig.authentication.facebook.isEnabled;
        AppConsts.facebook.appId = this.appConfig.authentication.facebook.appId;
        AppConsts.facebook.appSecret = this.appConfig.authentication.facebook.appSecret;

        AppConsts.google.isEnabled = this.appConfig.authentication.google.isEnabled;
        AppConsts.google.appId = this.appConfig.authentication.google.appId;
        AppConsts.google.appSecret = this.appConfig.authentication.google.appSecret;

        // await this._sessionService.getCurrentLoginInformations(AppConsts.remoteServiceBaseUrl)
        //   .subscribe((result: GetCurrentLoginInformationsOutput) => {
        //     this._application = result.application;
        //     this._user = result.user;
        //     this._tenant = result.tenant;
        //   }, (err) => {

        //   });
      })
      .catch(function (error) {
        // log and rethrow
        // throw error;
      });
  }

  loadLoginInfo() {
    return this._sessionService.getCurrentLoginInformations(AppConsts.remoteServiceBaseUrl)
      .toPromise().then((result: GetCurrentLoginInformationsOutput) => {
        this._application = result.application;
        this._user = result.user;
        this._tenant = result.tenant;
      }, (err) => {
        // throw err;
      });
  }

  // This is an example property ... you can make it however you want.
  get apiBaseUrl() {

    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }

    return this.appConfig.remoteServiceBaseUrl;
  }

  get appBaseUrl() {

    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }

    return this.appConfig.appBaseUrl;
  }

  get connectedAppUrl() {

    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }

    return this.appConfig.connectedAppUrl;
  }

}
