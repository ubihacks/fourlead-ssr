import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { UtilsService } from '../utils/cookie-helper';
import { AppConsts } from '../app-const';
import { AppConfigService } from '../AppConfigService';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class RequestResponseInterceptor implements HttpInterceptor {
  private utilsService: UtilsService = new UtilsService();

  constructor( ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedRequest;
    try {
      const localStoreAuthToken = window.localStorage.getItem(AppConsts.authorization.localStoreAuthToken);
      const localStoreEncrptAuthToken = window.localStorage.getItem(AppConsts.authorization.localStoreEncrptAuthToken);
      const localStoreAuthTokenExpiry = window.localStorage.getItem(AppConsts.authorization.localStoreAuthTokenExpiry);
      const sessionCookie = this.utilsService.getCookieValue(AppConsts.authorization.encrptedAuthTokenName) ;

      if (sessionCookie && (localStoreEncrptAuthToken !== 'null' && localStoreEncrptAuthToken?.length > 0 ))
      {
        if (sessionCookie !== localStoreEncrptAuthToken && AppConsts.appBaseUrl !== undefined  )
        {
          this.utilsService.setToken(
            AppConsts.authorization.tokenCookieName,
            null,
            null,
            AppConsts.appBaseUrl,
            undefined,
          );
          this.utilsService.setCookieValue(
            AppConsts.authorization.encrptedAuthTokenName,
            null,
            null,
            AppConsts.appBaseUrl
          );
        }
      }

      if ((localStoreAuthToken !== 'null' && localStoreAuthToken?.length > 0 )  && AppConsts.appBaseUrl !== undefined )
      {
        this.utilsService.setToken(
          AppConsts.authorization.tokenCookieName,
          localStoreAuthToken,
          localStoreAuthTokenExpiry,
          AppConsts.appBaseUrl,
          undefined,
        );
        this.utilsService.deleteCookie(AppConsts.authorization.encrptedAuthTokenName);
        this.utilsService.setCookieValue(
          AppConsts.authorization.encrptedAuthTokenName,
          localStoreEncrptAuthToken,
          localStoreAuthTokenExpiry,
          AppConsts.appBaseUrl,
          undefined,
        );

        this.utilsService.setToken(
          AppConsts.authorization.tokenCookieName,
          localStoreAuthToken,
          localStoreAuthTokenExpiry,
          AppConsts.currentAppUrl,
          undefined,
        );
        this.utilsService.deleteCookie(AppConsts.authorization.encrptedAuthTokenName);
        this.utilsService.setCookieValue(
          AppConsts.authorization.encrptedAuthTokenName,
          localStoreEncrptAuthToken,
          localStoreAuthTokenExpiry,
          AppConsts.currentAppUrl,
          undefined,
        );
      }




      if (!req.url.includes('TokenAuth/Authenticate')){
        modifiedRequest = this.normalizeRequestHeaders(req);
      } else{
        modifiedRequest = req;
      }
    } catch (error) {
      // console.log('inter',error);
      modifiedRequest = req;
    }
    return next.handle(modifiedRequest)
      .pipe(
        switchMap((event) => {
          return this.handleSuccessResponse(event);
        })
      );
  }

  protected normalizeRequestHeaders(request: HttpRequest<any>): HttpRequest<any> {
    let modifiedHeaders = new HttpHeaders();
    modifiedHeaders = request.headers.set('Pragma', 'no-cache')
      .set('Cache-Control', 'no-cache')
      .set('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT');

    modifiedHeaders = this.addXRequestedWithHeader(modifiedHeaders);
    modifiedHeaders = this.addAuthorizationHeaders(modifiedHeaders);
    modifiedHeaders = this.addAspNetCoreCultureHeader(modifiedHeaders);
    modifiedHeaders = this.addAcceptLanguageHeader(modifiedHeaders);
    modifiedHeaders = this.addTenantIdHeader(modifiedHeaders);

    return request.clone({
      headers: modifiedHeaders
    });
  }

  protected addXRequestedWithHeader(headers: HttpHeaders): HttpHeaders {
    if (headers) {
      headers = headers.set('X-Requested-With', 'XMLHttpRequest');
    }

    return headers;
  }

  protected addAspNetCoreCultureHeader(headers: HttpHeaders): HttpHeaders {
    const cookieLangValue = this.utilsService.getCookieValue('Abp.Localization.CultureName');
    if (cookieLangValue && headers && !headers.has('.AspNetCore.Culture')) {
      headers = headers.set('.AspNetCore.Culture', cookieLangValue);
    }

    return headers;
  }

  protected addAcceptLanguageHeader(headers: HttpHeaders): HttpHeaders {
    const cookieLangValue = this.utilsService.getCookieValue('Abp.Localization.CultureName');
    if (cookieLangValue && headers && !headers.has('Accept-Language')) {
      headers = headers.set('Accept-Language', cookieLangValue);
    }

    return headers;
  }

  protected addTenantIdHeader(headers: HttpHeaders): HttpHeaders {
    const cookieTenantIdValue = this.utilsService.getCookieValue(AppConsts.multiTenancy.tenantIdCookieName);
    if (cookieTenantIdValue && headers && !headers.has(AppConsts.multiTenancy.tenantIdCookieName)) {
      headers = headers.set(AppConsts.multiTenancy.tenantIdCookieName, cookieTenantIdValue);
    }

    return headers;
  }

  protected addAuthorizationHeaders(headers: HttpHeaders): HttpHeaders {
    let authorizationHeaders = headers ? headers.getAll('Authorization') : null;
    if (!authorizationHeaders) {
      authorizationHeaders = [];
    }

    if (!this.itemExists(authorizationHeaders, (item: string) => item.indexOf('Bearer ') === 0)) {
      const token = this.utilsService.getCookieValue(AppConsts.authorization.tokenCookieName);
      if (headers && token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return headers;
  }

  private itemExists<T>(items: T[], predicate: (item: T) => boolean): boolean {
    for (let i = 0; i < items.length; i++) {
      if (predicate(items[i])) {
        return true;
      }
    }

    return false;
  }

  protected handleSuccessResponse(event: HttpEvent<any>): Observable<HttpEvent<any>> {
    const self = this;

    if (event instanceof HttpResponse) {
      if (event.body instanceof Blob && event.body.type && event.body.type.indexOf('application/json') >= 0) {
        return this.blobToText(event.body).pipe(
          map(
            json => {
              const responseBody = json === 'null' ? {} : JSON.parse(json);

              const modifiedResponse = this.handleResponse(event.clone({
                body: responseBody
              }));

              return modifiedResponse.clone({
                body: new Blob([JSON.stringify(modifiedResponse.body)], { type: 'application/json' })
              });
            })
        );
      }
    }
    return of(event);
  }

  handleResponse(response: HttpResponse<any>): HttpResponse<any> {
    const ajaxResponse = this.getAjaxResponseOrNull(response);
    if (ajaxResponse == null) {
      return response;
    }

    return this.handleFourleadResponse(response, ajaxResponse);
  }

  handleFourleadResponse(response: HttpResponse<any>, ajaxResponse: IAjaxResponse): HttpResponse<any> {
    let newResponse: HttpResponse<any>;

    if (ajaxResponse.success) {

      newResponse = response.clone({
        body: ajaxResponse.result
      });

      if (ajaxResponse.targetUrl) {
        this.handleTargetUrl(ajaxResponse.targetUrl);
      }
    } else {

      newResponse = response.clone({
        body: ajaxResponse.result
      });

      if (!ajaxResponse.error) {
        ajaxResponse.error = ({
          message: 'An error has occurred!',
          details: 'Error details were not sent by server.'
        } as IErrorInfo);
      }
    }

    return newResponse;
  }

  handleTargetUrl(targetUrl: string): void {
    if (!targetUrl) {
      location.href = '/';
    } else {
      location.href = targetUrl;
    }
  }

  getAjaxResponseOrNull(response: HttpResponse<any>): IAjaxResponse | null {
    if (!response || !response.headers) {
      return null;
    }

    const contentType = response.headers.get('Content-Type');
    if (!contentType) {
      return null;
    }

    if (contentType.indexOf('application/json') < 0) {
      return null;
    }

    const responseObj = JSON.parse(JSON.stringify(response.body));
    if (!responseObj.__abp) {
      return null;
    }

    return responseObj as IAjaxResponse;
  }

  blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
      if (!blob) {
        observer.next('');
        observer.complete();
      } else {
        const reader = new FileReader();
        reader.onload = function() {
          observer.next(this.result);
          observer.complete();
        };
        reader.readAsText(blob);
      }
    });
  }
}


interface IAjaxResponse {
  success: boolean;
  result?: any;
  targetUrl?: string;
  error?: IErrorInfo;
  unAuthorizedRequest: boolean;
  __abp: boolean;
}


export interface IErrorInfo {
  code: number;
  message: string;
  details: string;
  validationErrors: any[];
}
