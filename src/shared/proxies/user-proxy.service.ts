import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponseBase, HttpResponse } from '@angular/common/http';
import { GetCurrentLoginInformationsOutput, ChangePasswordDto, ResetPasswordDto } from '../dto/auth-models';
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf, Subject, merge, throwError, of } from 'rxjs';
import { BaseProxyService } from './base-proxy.service';
import { UserDto, CreateUserDto, ChangeUserLanguageDto, PagedUsersRequestDto, PagedResultDtoOfUserDto } from '../dto/user/user-dto';
import { ListUserNotificationDto } from '../dto/notification/user-notification-dto';
import { AppConfigService } from '../AppConfigService';
import { ListResultDtoOfRoleDto } from '../dto/user/user-role-dto';

@Injectable()
export class UserServiceProxy extends BaseProxyService {
  private http: HttpClient;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
  baseUrl: any;

  constructor(@Inject(HttpClient) http: HttpClient,
    private appConfigService: AppConfigService

  ) {
    super();
    this.http = http;
    this.baseUrl = appConfigService.apiBaseUrl;
  }

  
  /**
  * @return Success
  */
 getCheckForPresentExperience(): Observable<boolean> {
  let url_ = this.baseUrl + "/api/services/app/UserExperience/CheckForPresentExperience";
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
    return this.processGetCheckForPresentExperience(response_);
  })).pipe(_observableCatch((response_: any) => {
    if (response_ instanceof HttpResponseBase) {
      try {
        return this.processGetCheckForPresentExperience(<any>response_);
      } catch (e) {
        return <Observable<boolean>><any>_observableThrow(e);
      }
    } else
      return <Observable<boolean>><any>_observableThrow(response_);
  }));
}

protected processGetCheckForPresentExperience(response: HttpResponseBase): Observable<boolean> {
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

  create(input: CreateUserDto | null | undefined): Observable<UserDto> {
    let url_ = this.baseUrl + "/api/services/app/User/Create";
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
      return this.processCreate(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreate(<any>response_);
        } catch (e) {
          return <Observable<UserDto>><any>_observableThrow(e);
        }
      } else
        return <Observable<UserDto>><any>_observableThrow(response_);
    }));
  }

  protected processCreate(response: HttpResponseBase): Observable<UserDto> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? UserDto.fromJS(resultData200) : new UserDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<UserDto>(<any>null);
  }

  /**
   * @param input (optional)
   * @return Success
   */
  update(input: UserDto | null | undefined): Observable<UserDto> {
    let url_ = this.baseUrl + "/api/services/app/User/Update";
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
      return this.processUpdate(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdate(<any>response_);
        } catch (e) {
          return <Observable<UserDto>><any>_observableThrow(e);
        }
      } else
        return <Observable<UserDto>><any>_observableThrow(response_);
    }));
  }

  protected processUpdate(response: HttpResponseBase): Observable<UserDto> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? UserDto.fromJS(resultData200) : new UserDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<UserDto>(<any>null);
  }

  /**
   * @param id (optional)
   * @return Success
   */
  delete(id: number | null | undefined): Observable<void> {
    let url_ = this.baseUrl + "/api/services/app/User/Delete?";
    if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
      })
    };

    return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processDelete(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processDelete(<any>response_);
        } catch (e) {
          return <Observable<void>><any>_observableThrow(e);
        }
      } else
        return <Observable<void>><any>_observableThrow(response_);
    }));
  }

  protected processDelete(response: HttpResponseBase): Observable<void> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return _observableOf<void>(<any>null);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<void>(<any>null);
  }

  /**
   * @return Success
   */
  getRoles(): Observable<ListResultDtoOfRoleDto> {
    let url_ = this.baseUrl + "/api/services/app/User/GetRoles";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetRoles(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetRoles(<any>response_);
        } catch (e) {
          return <Observable<ListResultDtoOfRoleDto>><any>_observableThrow(e);
        }
      } else
        return <Observable<ListResultDtoOfRoleDto>><any>_observableThrow(response_);
    }));
  }

  protected processGetRoles(response: HttpResponseBase): Observable<ListResultDtoOfRoleDto> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? ListResultDtoOfRoleDto.fromJS(resultData200) : new ListResultDtoOfRoleDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<ListResultDtoOfRoleDto>(<any>null);
  }

  /**
   * @param input (optional)
   * @return Success
   */
  changeLanguage(input: ChangeUserLanguageDto | null | undefined): Observable<void> {
    let url_ = this.baseUrl + "/api/services/app/User/ChangeLanguage";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(input);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processChangeLanguage(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processChangeLanguage(<any>response_);
        } catch (e) {
          return <Observable<void>><any>_observableThrow(e);
        }
      } else
        return <Observable<void>><any>_observableThrow(response_);
    }));
  }

  protected processChangeLanguage(response: HttpResponseBase): Observable<void> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return _observableOf<void>(<any>null);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<void>(<any>null);
  }

  /**
   * @param input (optional)
   * @return Success
   */
  changePassword(input: ChangePasswordDto | null | undefined): Observable<boolean> {
    let url_ = this.baseUrl + "/api/services/app/User/ChangePassword";
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
      return this.processChangePassword(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processChangePassword(<any>response_);
        } catch (e) {
          return <Observable<boolean>><any>_observableThrow(e);
        }
      } else
        return <Observable<boolean>><any>_observableThrow(response_);
    }));
  }

  protected processChangePassword(response: HttpResponseBase): Observable<boolean> {
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
   * @param input (optional)
   * @return Success
   */
  resetPassword(input: ResetPasswordDto | null | undefined): Observable<boolean> {
    let url_ = this.baseUrl + "/api/services/app/User/ResetPassword";
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
      return this.processResetPassword(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processResetPassword(<any>response_);
        } catch (e) {
          return <Observable<boolean>><any>_observableThrow(e);
        }
      } else
        return <Observable<boolean>><any>_observableThrow(response_);
    }));
  }

  protected processResetPassword(response: HttpResponseBase): Observable<boolean> {
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
   * @param id (optional)
   * @return Success
   */
  get(id: number | null | undefined): Observable<UserDto> {
    let url_ = this.baseUrl + "/api/services/app/User/Get?";
    if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGet(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGet(<any>response_);
        } catch (e) {
          return <Observable<UserDto>><any>_observableThrow(e);
        }
      } else
        return <Observable<UserDto>><any>_observableThrow(response_);
    }));
  }

  protected processGet(response: HttpResponseBase): Observable<UserDto> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? UserDto.fromJS(resultData200) : new UserDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<UserDto>(<any>null);
  }

  /**
  * @param request (PagedUsersRequestDto)

  * @return Success
  */
  searchAll(request: PagedUsersRequestDto): Observable<PagedResultDtoOfUserDto> {
    const content_ = JSON.stringify(request);

    let url_ = this.baseUrl + "/api/services/app/User/SearchAll";
    // if (request.type !== undefined)
    //     url_ += "Type=" + encodeURIComponent("" + request.type) + "&";
    // if (request.jobAdId !== undefined)
    //     url_ += "JobAdId=" + encodeURIComponent("" + request.jobAdId) + "&";
    // if (request.tenantId !== undefined)
    //     url_ += "CompanyId=" + encodeURIComponent("" + request.tenantId) + "&";
    // if (request.keyword !== undefined)
    //     url_ += "Keyword=" + encodeURIComponent("" + request.keyword) + "&";
    // if (request.isActive !== undefined)
    //     url_ += "IsActive=" + encodeURIComponent("" + request.isActive) + "&";
    // if (request.skipCount !== undefined)
    //     url_ += "SkipCount=" + encodeURIComponent("" + request.skipCount) + "&";
    // if (request.maxResultCount !== undefined)
    //     url_ += "MaxResultCount=" + encodeURIComponent("" + request.maxResultCount) + "&";
    // url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processSearchAll(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processSearchAll(<any>response_);
        } catch (e) {
          return <Observable<PagedResultDtoOfUserDto>><any>_observableThrow(e);
        }
      } else
        return <Observable<PagedResultDtoOfUserDto>><any>_observableThrow(response_);
    }));
  }

  protected processSearchAll(response: HttpResponseBase): Observable<PagedResultDtoOfUserDto> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? PagedResultDtoOfUserDto.fromJS(resultData200) : new PagedResultDtoOfUserDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<PagedResultDtoOfUserDto>(<any>null);
  }


  /**
   * @param request (PagedUsersRequestDto)

   * @return Success
   */
  getAll(request: PagedUsersRequestDto): Observable<PagedResultDtoOfUserDto> {
    let url_ = this.baseUrl + "/api/services/app/User/GetAll?";
    if (request.type !== undefined)
      url_ += "Type=" + encodeURIComponent("" + request.type) + "&";
    if (request.jobAdId !== undefined)
      url_ += "JobAdId=" + encodeURIComponent("" + request.jobAdId) + "&";
    if (request.tenantId !== undefined)
      url_ += "tenantId=" + encodeURIComponent("" + request.tenantId) + "&";
    if (request.keyword !== undefined)
      url_ += "Keyword=" + encodeURIComponent("" + request.keyword) + "&";
    if (request.isActive !== undefined)
      url_ += "IsActive=" + encodeURIComponent("" + request.isActive) + "&";
    if (request.skipCount !== undefined)
      url_ += "SkipCount=" + encodeURIComponent("" + request.skipCount) + "&";
    if (request.maxResultCount !== undefined)
      url_ += "MaxResultCount=" + encodeURIComponent("" + request.maxResultCount) + "&";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetAll(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetAll(<any>response_);
        } catch (e) {
          return <Observable<PagedResultDtoOfUserDto>><any>_observableThrow(e);
        }
      } else
        return <Observable<PagedResultDtoOfUserDto>><any>_observableThrow(response_);
    }));
  }

  protected processGetAll(response: HttpResponseBase): Observable<PagedResultDtoOfUserDto> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? PagedResultDtoOfUserDto.fromJS(resultData200) : new PagedResultDtoOfUserDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<PagedResultDtoOfUserDto>(<any>null);
  }

  getLoggedInUserNotification(): Observable<ListUserNotificationDto> {
    let url_ = this.baseUrl + "/api/services/app/UserProfile/GetLoggedInUserNotification";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetLoggedInUserNotification(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetLoggedInUserNotification(<any>response_);
        } catch (e) {
          return <Observable<ListUserNotificationDto>><any>_observableThrow(e);
        }
      } else
        return <Observable<ListUserNotificationDto>><any>_observableThrow(response_);
    }));
  }

  protected processGetLoggedInUserNotification(response: HttpResponseBase): Observable<ListUserNotificationDto> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? ListUserNotificationDto.fromJS(resultData200) : new ListUserNotificationDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<ListUserNotificationDto>(<any>null);
  }

}
