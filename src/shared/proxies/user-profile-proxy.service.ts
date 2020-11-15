import { Injectable, Inject, Optional } from '@angular/core';
import { BaseProxyService } from './base-proxy.service';
import { HttpClient, HttpHeaders, HttpResponseBase, HttpResponse } from '@angular/common/http';
import { Observable, throwError as _observableThrow, of as _observableOf, } from 'rxjs';
import { UserProfileOutputDto } from '../dto/user/user-profile-output.dto';
import { AppConfigService } from '../AppConfigService';
import { mergeMap as _observableMergeMap, catchError as _observableCatch, } from 'rxjs/operators';

@Injectable()
export class UserProfileProxyService extends BaseProxyService {
  private http: HttpClient;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(@Inject(HttpClient) http: HttpClient,
    private appConfigService: AppConfigService
  ) {
    super();
    this.http = http;
    this.baseUrl = appConfigService.apiBaseUrl;
  }

  getUserDetailsByUserName(input: string): Observable<UserProfileOutputDto> {
    let url_ = this.baseUrl + '/api/services/app/UserProfile/GetUserDetailsByUserName?userName=' + input;
    url_ = url_.replace(/[?&]$/, '');
    const content_ = JSON.stringify(input);
    const options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetUserDetailsByUserName(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetUserDetailsByUserName(<any>response_);
        } catch (e) {
          return <Observable<UserProfileOutputDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<UserProfileOutputDto>><any>_observableThrow(response_);
      }
    }));
  }

  processGetUserDetailsByUserName(response: HttpResponseBase): Observable<UserProfileOutputDto> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    const _headers: any = {};
    if (response.headers) {
      for (const key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        const resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? UserProfileOutputDto.fromJS(resultData200) : new UserProfileOutputDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<UserProfileOutputDto>(<any>null);
  }


  getUserByUserName(input: string): Observable<UserProfileOutputDto> {
    let url_ = this.baseUrl + '/api/services/app/UserProfile/GetUserByUserName?userName=' + input;
    url_ = url_.replace(/[?&]$/, '');
    const content_ = JSON.stringify(input);
    const options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetUserByUserName(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetUserByUserName(<any>response_);
        } catch (e) {
          return <Observable<UserProfileOutputDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<UserProfileOutputDto>><any>_observableThrow(response_);
      }
    }));
  }

  processGetUserByUserName(response: HttpResponseBase): Observable<UserProfileOutputDto> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    const _headers: any = {};
    if (response.headers) {
      for (const key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        const resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? UserProfileOutputDto.fromJS(resultData200) : new UserProfileOutputDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<UserProfileOutputDto>(<any>null);
  }

}
