import { Injectable } from '@angular/core';
import { UserLoginInfoDto, TenantLoginInfoDto, ApplicationInfoDto, GetCurrentLoginInformationsOutput } from './dto/auth-models';
import { UtilsService } from './utils/cookie-helper';
import { AppConsts } from './app-const';
import { BaseProxyService } from './proxies/base-proxy.service';
import { SessionServiceProxy } from './proxies/session-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class AppSessionService extends BaseProxyService {

  public _user: UserLoginInfoDto;
  public _tenant: TenantLoginInfoDto;
  public _application: ApplicationInfoDto;

  constructor(
    private _utilsService: UtilsService
  ) {
    super();
  }

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

  getShownLoginName(): string {
    const userName = this._user.userName;
    return (this._tenant ? this._tenant.tenancyName : '.') + '\\' + userName;
  }

  // init(): Promise<boolean> {
  //   return new Promise<boolean>((resolve, reject) => {
  //     this._sessionService.getCurrentLoginInformations(' ').toPromise().then((result: GetCurrentLoginInformationsOutput) => {
  //       this._application = result.application;
  //       this._user = result.user;
  //       this._tenant = result.tenant;

  //       resolve(true);
  //     }, (err) => {
  //       reject(err);
  //     });
  //   });
  // }

  changeTenantIfNeeded(tenantId?: number): boolean {
    if (this.isCurrentTenant(tenantId)) {
      return false;
    }

    // abp.multiTenancy.setTenantIdCookie(tenantId);
    this._utilsService.setCookieValue(
      'Abp.TenantId',
      tenantId.toString(),
      new Date(new Date().getTime() + 5 * 365 * 86400000), // 5 years,
      AppConsts.appBaseUrl,
      this.getDomain(AppConsts.appBaseUrl),
    )
    location.reload();
    return true;
  }

  private isCurrentTenant(tenantId?: number) {
    if (!tenantId && this.tenant) {
      return false;
    } else if (tenantId && (!this.tenant || this.tenant.id !== tenantId)) {
      return false;
    }

    return true;
  }
}
