import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponseBase, HttpResponse } from '@angular/common/http';
import { GetCurrentLoginInformationsOutput } from '../dto/auth-models';
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf, Subject, merge, throwError, of } from 'rxjs';
import { BaseProxyService } from './base-proxy.service';

@Injectable()
export class SessionServiceProxy  extends BaseProxyService{
  private http: HttpClient;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(@Inject(HttpClient) http: HttpClient,
  ) {
    super();
    this.http = http;
  }

  /**
   * @return Success
   */
  getCurrentLoginInformations(baseUrl): Observable<GetCurrentLoginInformationsOutput> {
    let url_ = baseUrl + "/api/services/app/Session/GetCurrentLoginInformations";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetCurrentLoginInformations(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetCurrentLoginInformations(<any>response_);
        } catch (e) {
          return <Observable<GetCurrentLoginInformationsOutput>><any>_observableThrow(e);
        }
      } else
        return <Observable<GetCurrentLoginInformationsOutput>><any>_observableThrow(response_);
    }));
  }

  protected processGetCurrentLoginInformations(response: HttpResponseBase): Observable<GetCurrentLoginInformationsOutput> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? GetCurrentLoginInformationsOutput.fromJS(resultData200) : new GetCurrentLoginInformationsOutput();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<GetCurrentLoginInformationsOutput>(<any>null);
  }
}
