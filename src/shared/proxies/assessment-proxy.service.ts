import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponseBase, HttpResponse } from '@angular/common/http';
import { Observable, throwError as _observableThrow, of as _observableOf, throwError, of } from 'rxjs';
import { UserTestDto } from '../dto/user/user-test-dto';
import { UserTestResultDto } from '../dto/user/user-test-result.dto';
import { CompanyUserAssessmentDto } from '../dto/company/company-user-assessment-dto';
import { mergeMap as _observableMergeMap, catchError as _observableCatch, mergeMap, catchError } from 'rxjs/operators';
import { BaseProxyService } from './base-proxy.service';
import { AppConfigService } from '../AppConfigService';
import { ContactUsCareerDto, ContactUsDto } from '../dto/auth-models';

@Injectable()
export class AssessmentProxyService extends BaseProxyService {
  jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
  private http: HttpClient;
  private baseUrl: string;

  constructor(@Inject(HttpClient) http: HttpClient,
    private appConfigService: AppConfigService
  ) {
    super();
    this.http = http;
    this.baseUrl = appConfigService.apiBaseUrl;
  }

    /**
 * @param input  ContactUsCareerDto
 * @return Success
 */
contactUsCareer(input: ContactUsCareerDto | null | undefined): Observable<boolean> {
  let url_ = this.baseUrl + "/api/services/app/Account/ContactUsCareer";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(input);

  let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json"
      })
  };

  return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processContactUsCareer(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processContactUsCareer(<any>response_);
          } catch (e) {
              return <Observable<boolean>><any>_observableThrow(e);
          }
      } else
          return <Observable<boolean>><any>_observableThrow(response_);
  }));
}

protected processContactUsCareer(response: HttpResponseBase): Observable<boolean> {
  const status = response.status;
  const responseBlob =
      response instanceof HttpResponse ? response.body :
          (<any>response).error instanceof Blob ? (<any>response).error : undefined;

  let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
  if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          let result200: any = null;
          let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
          result200 = resultData200 !== undefined ? resultData200 : <any>null;
          return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
  }
  return _observableOf<boolean>(<any>null);
}

    /**
 * @param input  ContactUsDto
 * @return Success
 */
contactUs(input: ContactUsDto | null | undefined): Observable<boolean> {
  let url_ = this.baseUrl + "/api/services/app/Account/ContactUs";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(input);

  let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json"
      })
  };

  return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processContactUs(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processContactUs(<any>response_);
          } catch (e) {
              return <Observable<boolean>><any>_observableThrow(e);
          }
      } else
          return <Observable<boolean>><any>_observableThrow(response_);
  }));
}

protected processContactUs(response: HttpResponseBase): Observable<boolean> {
  const status = response.status;
  const responseBlob =
      response instanceof HttpResponse ? response.body :
          (<any>response).error instanceof Blob ? (<any>response).error : undefined;

  let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
  if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          let result200: any = null;
          let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
          result200 = resultData200 !== undefined ? resultData200 : <any>null;
          return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
  }
  return _observableOf<boolean>(<any>null);
}


  checkInviteToken(input: string | null | undefined): Observable<boolean> {
    let url_ = this.baseUrl + "/api/services/app/CompanyUserAssessment/CheckInviteToken?token=" + input;
    url_ = url_.replace(/[?&]$/, "");

    //const content_ = JSON.stringify(input);

    let options_: any = {
      //body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCheckInviteToken(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCheckInviteToken(<any>response_);
        } catch (e) {
          return <Observable<boolean>><any>_observableThrow(e);
        }
      } else
        return <Observable<boolean>><any>_observableThrow(response_);
    }));
  }

  protected processCheckInviteToken(response: HttpResponseBase): Observable<boolean> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 !== undefined ? resultData200 : <any>null;
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<boolean>(<any>null);
  }

  beginUserTestByUrl(input: any | null | undefined, url: string): Observable<UserTestDto> {
    let url_ = this.baseUrl + url;
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

    return this.http.request('post', url_, options_).pipe(mergeMap((response_: any) => {
      return this.processBeginUserTestByUrl(response_);
    })).pipe(catchError((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processBeginUserTestByUrl(<any>response_);
        } catch (e) {
          return <Observable<UserTestDto>><any>throwError(e);
        }
      } else {
        return <Observable<UserTestDto>><any>throwError(response_);
      }
    }));
  }

  processBeginUserTestByUrl(response: HttpResponseBase): Observable<UserTestDto> {
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
      return this.blobToText(responseBlob).pipe(mergeMap(_responseText => {
        let result200: any = null;
        const resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? UserTestDto.fromJS(resultData200) : new UserTestDto();
        return of(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(mergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return of<UserTestDto>(<any>null);
  }

  submitTest(input: UserTestDto | null | undefined): Observable<UserTestResultDto> {
    let url_ = this.baseUrl + '/api/services/app/UserTest/SubmitTest';
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

    return this.http.request('post', url_, options_).pipe(mergeMap((response_: any) => {
      return this.processSubmitTest(response_);
    })).pipe(catchError((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processSubmitTest(<any>response_);
        } catch (e) {
          return <Observable<UserTestResultDto>><any>throwError(e);
        }
      } else {
        return <Observable<UserTestResultDto>><any>throwError(response_);
      }
    }));
  }

  processSubmitTest(response: HttpResponseBase): Observable<UserTestResultDto> {
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
      return this.blobToText(responseBlob).pipe(mergeMap(_responseText => {
        let result200: any = null;
        const resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? UserTestResultDto.fromJS(resultData200) : new UserTestResultDto();
        return of(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(mergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return of<UserTestResultDto>(<any>null);
  }

  submitPublicTest(input: UserTestDto | null | undefined): Observable<UserTestResultDto> {
    let url_ = this.baseUrl + '/api/services/app/UserTest/SubmitPublicTest';
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

    return this.http.request('post', url_, options_).pipe(mergeMap((response_: any) => {
      return this.processSubmitPublicTest(response_);
    })).pipe(catchError((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processSubmitPublicTest(<any>response_);
        } catch (e) {
          return <Observable<UserTestResultDto>><any>throwError(e);
        }
      } else {
        return <Observable<UserTestResultDto>><any>throwError(response_);
      }
    }));
  }

  processSubmitPublicTest(response: HttpResponseBase): Observable<UserTestResultDto> {
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
      return this.blobToText(responseBlob).pipe(mergeMap(_responseText => {
        let result200: any = null;
        const resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? UserTestResultDto.fromJS(resultData200) : new UserTestResultDto();
        return of(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(mergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return of<UserTestResultDto>(<any>null);
  }

  getBehaviourTestResult(input: string | null | undefined): Observable<UserTestResultDto> {
    let url_ = this.baseUrl + '/api/services/app/UserTest/GetBehaviourTestResultByToken?resultToken='+input;
    url_ = url_.replace(/[?&]$/, '');
   // const content_ = JSON.stringify(input);
    const options_: any = {
      //body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(mergeMap((response_: any) => {
      return this.processGetBehaviourTestResult(response_);
    })).pipe(catchError((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetBehaviourTestResult(<any>response_);
        } catch (e) {
          return <Observable<UserTestResultDto>><any>throwError(e);
        }
      } else {
        return <Observable<UserTestResultDto>><any>throwError(response_);
      }
    }));
  }

  processGetBehaviourTestResult(response: HttpResponseBase): Observable<UserTestResultDto> {
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
      return this.blobToText(responseBlob).pipe(mergeMap(_responseText => {
        let result200: any = null;
        const resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? UserTestResultDto.fromJS(resultData200) : new UserTestResultDto();
        return of(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(mergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return of<UserTestResultDto>(<any>null);
  }

  /**
  * @param input (optional)
  * @return Success
  */
  updateAssessmentResult(input: CompanyUserAssessmentDto | null | undefined): Observable<boolean> {
    let url_ = this.baseUrl + "/api/services/app/CompanyUserAssessment/UpdateAssessmentResult";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(input);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };

    return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdateAssessmentResult(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdateAssessmentResult(<any>response_);
        } catch (e) {
          return <Observable<boolean>><any>_observableThrow(e);
        }
      } else
        return <Observable<boolean>><any>_observableThrow(response_);
    }));
  }

  protected processUpdateAssessmentResult(response: HttpResponseBase): Observable<boolean> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 !== undefined ? resultData200 : <any>null;
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<boolean>(<any>null);
  }
}
