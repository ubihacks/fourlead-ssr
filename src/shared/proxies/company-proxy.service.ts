import { Injectable, Inject } from '@angular/core';
import { BaseProxyService } from './base-proxy.service';
import { HttpClient, HttpHeaders, HttpResponseBase, HttpResponse } from '@angular/common/http';
import { AppConfigService } from '../AppConfigService';
import { SubscribeDto } from '../dto/subscribe-dto';
import { JobAdDto, BookmarkJobDto, JobApplicationDto, ListJobApplicationDto, MyCandidateDto, ListJobAdDto, ListBookmarkedJobDto } from '../dto/company/job-ad-dto';
import { InviteUserDto } from '../dto/company/invite-user-dto';
import { CompanyUserAssessmentDto, PagedCompanyUserAssessmentResultRequestDto, ListCompanyUserAssessmentDto } from '../dto/company/company-user-assessment-dto';
import { JobAdSearchDtoDto } from '../dto/company/job-ad-search-dto';
import { ListBehaviourDto } from '../dto/primary-data/behaviour-dto';
import { ListPackageDto } from '../dto/company/package-dto';
import { CompanyBalanceDto, CompanyStatsDto } from '../dto/company/company-stats-dto';
import { UserJobStatsDto } from '../dto/company/user-job-stats-dto';
import { TenantDto } from '../dto/company/tenant-dto';
import { ListMonthWiseJobStatsDto } from '../dto/company/month-wise-job-stats-dto';
import { PagedUserRoleRequestDto, PagedResultDtoOfUserRoleDto, UserRoleDto } from '../dto/user/user-role-dto';
import { mergeMap as _observableMergeMap, catchError as _observableCatch, } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf, } from 'rxjs';
import { PagedJobApplicationRequestDto } from '../dto/job-ads/job-application-dto';
import { ListUserTestBehaviourDetailDto } from '../dto/user/user-test-result.dto';

@Injectable()
export class CompanyProxyService extends BaseProxyService {
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

  getJobAdDetailByIdentifier(input: string): Observable<JobAdDto> {
    //const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + '/api/services/app/JobAd/GetByIdentifier?identifier=' + input;
    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
        // body: content_,
        observe: 'response',
        responseType: 'blob',
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
        return this.processGetJobDetailByIdentifier(response_);
    })).pipe(_observableCatch((response_: any) => {
        if (response_ instanceof HttpResponseBase) {
            try {
                return this.processGetJobDetailByIdentifier(<any>response_);
            } catch (e) {
                return <Observable<JobAdDto>><any>_observableThrow(e);
            }
        } else {
            return <Observable<JobAdDto>><any>_observableThrow(response_);
        }
    }));
}

private processGetJobDetailByIdentifier(response: HttpResponseBase): Observable<JobAdDto> {
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
            result200 = resultData200 ? JobAdDto.fromJS(resultData200) : new JobAdDto();
            return _observableOf(result200);
        }));
    } else if (status !== 200 && status !== 204) {
        return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
        }));
    }
    return _observableOf<JobAdDto>(<any>null);
}

deleteJobAd(id: number | null | undefined): Observable<void> {
  let url_ = this.baseUrl + "/api/services/app/JobAd/Delete?";
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

 /**
 * @param id (optional)
 * @return Success
 */
delete(id: number | null | undefined, deleteUrl: string | null | undefined): Observable<void> {
  let url_ = this.baseUrl + deleteUrl;
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


getJobAdByJobAdId(input: number): Observable<JobAdDto> {
  //const content_ = JSON.stringify(input);
  let url_ = this.baseUrl + '/api/services/app/JobAd/GetJobAdByJobadId?id=' + input;
  url_ = url_.replace(/[?&]$/, '');

  const options_: any = {
      // body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      })
  };

  return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetJobAdByJobAdId(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processGetJobAdByJobAdId(<any>response_);
          } catch (e) {
              return <Observable<JobAdDto>><any>_observableThrow(e);
          }
      } else {
          return <Observable<JobAdDto>><any>_observableThrow(response_);
      }
  }));
}

private processGetJobAdByJobAdId(response: HttpResponseBase): Observable<JobAdDto> {
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
          result200 = resultData200 ? JobAdDto.fromJS(resultData200) : new JobAdDto();
          return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
  }
  return _observableOf<JobAdDto>(<any>null);
}

getJobAds(input: JobAdSearchDtoDto): Observable<ListJobAdDto> {
  const content_ = JSON.stringify(input);
  let url_ = this.baseUrl + '/api/services/app/JobAd/SearchJobAdsForCompany';
  url_ = url_.replace(/[?&]$/, '');

  const options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      })
  };

  return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetJobAds(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processGetJobAds(<any>response_);
          } catch (e) {
              return <Observable<ListJobAdDto>><any>_observableThrow(e);
          }
      } else {
          return <Observable<ListJobAdDto>><any>_observableThrow(response_);
      }
  }));
}

private processGetJobAds(response: HttpResponseBase): Observable<ListJobAdDto> {
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
          result200 = resultData200 ? ListJobAdDto.fromJS(resultData200) : new ListJobAdDto();
          return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
  }
  return _observableOf<ListJobAdDto>(<any>null);
}

searchJobAdsForCompany(input: JobAdSearchDtoDto | null | undefined): Observable<ListJobAdDto> {
  const content_ = JSON.stringify(input);
  let url_ = this.baseUrl + `/api/services/app/JobAd/SearchJobAdsForCompany?`;
  // if (input.search !== undefined)
  //     url_ += "Search=" + encodeURIComponent("" + input.search) + "&";
  // if (input.locationIds !== undefined)
  //     url_ += "LocationIds=" + encodeURIComponent("" + input.locationIds) + "&";
  // if (input.employmentTypeIds !== undefined)
  //     url_ += "EmploymentTypeIds=" + encodeURIComponent("" + input.employmentTypeIds) + "&";
  // if (input.behaviourIds !== undefined)
  //     url_ += "BehaviourIds=" + encodeURIComponent("" + input.behaviourIds) + "&";
  // if (input.salaryRange !== undefined)
  //     url_ += "SalaryRange=" + encodeURIComponent("" + input.salaryRange) + "&";
  // if (input.experienceRange !== undefined)
  //     url_ += "ExperienceRange=" + encodeURIComponent("" + input.experienceRange) + "&";
  // if (input.type !== undefined)
  //     url_ += "Type=" + encodeURIComponent("" + input.type) + "&";
  url_ = url_.replace(/[?&]$/, "");

  const options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      })
  };

  return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processSearchJobAdsForCompany(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processSearchJobAdsForCompany(<any>response_);
          } catch (e) {
              return <Observable<ListJobAdDto>><any>_observableThrow(e);
          }
      } else {
          return <Observable<ListJobAdDto>><any>_observableThrow(response_);
      }
  }));
}

private processSearchJobAdsForCompany(response: HttpResponseBase): Observable<ListJobAdDto> {
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
          result200 = resultData200 ? ListJobAdDto.fromJS(resultData200) : new ListJobAdDto();
          return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
  }
  return _observableOf<ListJobAdDto>(<any>null);
}

getJobAdDetail(input: number): Observable<JobAdDto> {
  //const content_ = JSON.stringify(input);
  let url_ = this.baseUrl + '/api/services/app/JobAd/GetById?Id=' + input;
  url_ = url_.replace(/[?&]$/, '');

  const options_: any = {
      // body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      })
  };

  return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetJobDetail(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processGetJobDetail(<any>response_);
          } catch (e) {
              return <Observable<JobAdDto>><any>_observableThrow(e);
          }
      } else {
          return <Observable<JobAdDto>><any>_observableThrow(response_);
      }
  }));
}

private processGetJobDetail(response: HttpResponseBase): Observable<JobAdDto> {
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
          result200 = resultData200 ? JobAdDto.fromJS(resultData200) : new JobAdDto();
          return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
  }
  return _observableOf<JobAdDto>(<any>null);
}

  getCompanyById(tenantId: number): Observable<TenantDto> {
    let url_ = this.baseUrl + '/api/services/app/Company/GetCompanyById?tenantId=' + tenantId;
    url_ = url_.replace(/[?&]$/, '');
    const options_: any = {
        observe: 'response',
        responseType: 'blob',
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
        return this.processGetCompanyById(response_);
    })).pipe(_observableCatch((response_: any) => {
        if (response_ instanceof HttpResponseBase) {
            try {
                return this.processGetCompanyById(<any>response_);
            } catch (e) {
                return <Observable<TenantDto>><any>_observableThrow(e);
            }
        } else {
            return <Observable<TenantDto>><any>_observableThrow(response_);
        }
    }));
}

processGetCompanyById(response: HttpResponseBase): Observable<TenantDto> {
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
            result200 = resultData200 ? TenantDto.fromJS(resultData200) : new TenantDto();
            return _observableOf(result200);
        }));
    } else if (status !== 200 && status !== 204) {
        return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
        }));
    }
    return _observableOf<TenantDto>(<any>null);
}

  subscribe(input: SubscribeDto): Observable<SubscribeDto> {
    let url_ = this.baseUrl + '/api/services/app/Company/Subscribe';
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processSubscribe(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processSubscribe(<any>response_);
        } catch (e) {
          return <Observable<SubscribeDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<SubscribeDto>><any>_observableThrow(response_);
      }
    }));
  }

  unsubscribe(input: SubscribeDto): Observable<SubscribeDto> {
    let url_ = this.baseUrl + '/api/services/app/Company/Unsubscribe';
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processSubscribe(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processSubscribe(<any>response_);
        } catch (e) {
          return <Observable<SubscribeDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<SubscribeDto>><any>_observableThrow(response_);
      }
    }));
  }

  processSubscribe(response: HttpResponseBase): Observable<SubscribeDto> {
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
        result200 = resultData200 ? SubscribeDto.fromJS(resultData200) : new SubscribeDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<SubscribeDto>(<any>null);
  }

  saveJobAd(input: JobAdDto | null | undefined, url: string): Observable<JobAdDto> {
    let url_ = this.baseUrl + '/api/services/app/JobAd/' + url;
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processSaveJobAd(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processSaveJobAd(<any>response_);
        } catch (e) {
          return <Observable<JobAdDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<JobAdDto>><any>_observableThrow(response_);
      }
    }));
  }

  processSaveJobAd(response: HttpResponseBase): Observable<JobAdDto> {
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
        result200 = resultData200 ? JobAdDto.fromJS(resultData200) : new JobAdDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<JobAdDto>(<any>null);
  }

  inviteUser(input: InviteUserDto): Observable<InviteUserDto> {
    let url_ = this.baseUrl + '/api/services/app/Company/InviteUser/';
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processInviteUser(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processInviteUser(<any>response_);
        } catch (e) {
          return <Observable<InviteUserDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<InviteUserDto>><any>_observableThrow(response_);
      }
    }));
  }

  processInviteUser(response: HttpResponseBase): Observable<InviteUserDto> {
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
        result200 = resultData200 ? InviteUserDto.fromJS(resultData200) : new InviteUserDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<InviteUserDto>(<any>null);
  }

  bookmarkJob(input: BookmarkJobDto | null | undefined): Observable<BookmarkJobDto> {
    let url_ = this.baseUrl + '/api/services/app/BookmarkedJob/Bookmark';
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processBookmarkJob(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processBookmarkJob(<any>response_);
        } catch (e) {
          return <Observable<BookmarkJobDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<BookmarkJobDto>><any>_observableThrow(response_);
      }
    }));
  }

  processBookmarkJob(response: HttpResponseBase): Observable<BookmarkJobDto> {
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
        result200 = resultData200 ? BookmarkJobDto.fromJS(resultData200) : new BookmarkJobDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<BookmarkJobDto>(<any>null);
  }

  applyForJob(input: JobApplicationDto | null | undefined): Observable<JobApplicationDto> {
    let url_ = this.baseUrl + '/api/services/app/JobApplication/Apply';
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processApplyForJob(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processApplyForJob(<any>response_);
        } catch (e) {
          return <Observable<JobApplicationDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<JobApplicationDto>><any>_observableThrow(response_);
      }
    }));
  }

  processApplyForJob(response: HttpResponseBase): Observable<JobApplicationDto> {
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
        result200 = resultData200 ? JobApplicationDto.fromJS(resultData200) : new JobApplicationDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<JobApplicationDto>(<any>null);
  }



  /**
   * @param request (PagedUsersRequestDto)

   * @return Success
   */
  getAllApplications(request: PagedJobApplicationRequestDto): Observable<ListJobApplicationDto> {
    let url_ = this.baseUrl + "/api/services/app/JobApplication/GetAll?";
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
      return this.processGetAllApplicantions(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetAllApplicantions(<any>response_);
        } catch (e) {
          return <Observable<ListJobApplicationDto>><any>_observableThrow(e);
        }
      } else
        return <Observable<ListJobApplicationDto>><any>_observableThrow(response_);
    }));
  }

  protected processGetAllApplicantions(response: HttpResponseBase): Observable<ListJobApplicationDto> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? ListJobApplicationDto.fromJS(resultData200) : new ListJobApplicationDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<ListJobApplicationDto>(<any>null);
  }

  saveProfile(input: MyCandidateDto | null | undefined): Observable<MyCandidateDto> {
    let url_ = this.baseUrl + '/api/services/app/MyCandidate/SaveProfile';
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processSaveProfile(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processSaveProfile(<any>response_);
        } catch (e) {
          return <Observable<MyCandidateDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<MyCandidateDto>><any>_observableThrow(response_);
      }
    }));
  }

  processSaveProfile(response: HttpResponseBase): Observable<MyCandidateDto> {
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
        result200 = resultData200 ? MyCandidateDto.fromJS(resultData200) : new MyCandidateDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<MyCandidateDto>(<any>null);
  }

  saveProfileByPackage(input: MyCandidateDto | null | undefined): Observable<MyCandidateDto> {
    let url_ = this.baseUrl + '/api/services/app/MyCandidate/SaveProfileByPackage';
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processSaveProfileByPackage(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processSaveProfileByPackage(<any>response_);
        } catch (e) {
          return <Observable<MyCandidateDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<MyCandidateDto>><any>_observableThrow(response_);
      }
    }));
  }

  processSaveProfileByPackage(response: HttpResponseBase): Observable<MyCandidateDto> {
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
        result200 = resultData200 ? MyCandidateDto.fromJS(resultData200) : new MyCandidateDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<MyCandidateDto>(<any>null);
  }

  rejectInterview(input: JobApplicationDto | null | undefined): Observable<JobApplicationDto> {
    let url_ = this.baseUrl + '/api/services/app/JobApplication/RejectInterview';
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processRejectInterview(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processRejectInterview(<any>response_);
        } catch (e) {
          return <Observable<JobApplicationDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<JobApplicationDto>><any>_observableThrow(response_);
      }
    }));
  }

  processRejectInterview(response: HttpResponseBase): Observable<JobApplicationDto> {
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
        result200 = resultData200 ? JobApplicationDto.fromJS(resultData200) : new JobApplicationDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<JobApplicationDto>(<any>null);
  }

  acceptInterview(input: JobApplicationDto | null | undefined): Observable<JobApplicationDto> {
    let url_ = this.baseUrl + '/api/services/app/JobApplication/AcceptInterview';
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.procesAcceptInterview(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.procesAcceptInterview(<any>response_);
        } catch (e) {
          return <Observable<JobApplicationDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<JobApplicationDto>><any>_observableThrow(response_);
      }
    }));
  }

  procesAcceptInterview(response: HttpResponseBase): Observable<JobApplicationDto> {
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
        result200 = resultData200 ? JobApplicationDto.fromJS(resultData200) : new JobApplicationDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<JobApplicationDto>(<any>null);
  }
  rejectApplication(input: JobApplicationDto | null | undefined): Observable<JobApplicationDto> {
    let url_ = this.baseUrl + '/api/services/app/JobApplication/Reject';
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processRejectApplication(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processRejectApplication(<any>response_);
        } catch (e) {
          return <Observable<JobApplicationDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<JobApplicationDto>><any>_observableThrow(response_);
      }
    }));
  }

  processRejectApplication(response: HttpResponseBase): Observable<JobApplicationDto> {
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
        result200 = resultData200 ? JobApplicationDto.fromJS(resultData200) : new JobApplicationDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<JobApplicationDto>(<any>null);
  }

  kivApplication(input: JobApplicationDto | null | undefined): Observable<JobApplicationDto> {
    let url_ = this.baseUrl + '/api/services/app/JobApplication/KIV';
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processKivApplication(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processKivApplication(<any>response_);
        } catch (e) {
          return <Observable<JobApplicationDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<JobApplicationDto>><any>_observableThrow(response_);
      }
    }));
  }

  processKivApplication(response: HttpResponseBase): Observable<JobApplicationDto> {
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
        result200 = resultData200 ? JobApplicationDto.fromJS(resultData200) : new JobApplicationDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<JobApplicationDto>(<any>null);
  }

  requestInterview(input: JobApplicationDto | null | undefined): Observable<JobApplicationDto> {
    let url_ = this.baseUrl + '/api/services/app/JobApplication/RequestInterview';
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processRequestInterview(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processRequestInterview(<any>response_);
        } catch (e) {
          return <Observable<JobApplicationDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<JobApplicationDto>><any>_observableThrow(response_);
      }
    }));
  }

  processRequestInterview(response: HttpResponseBase): Observable<JobApplicationDto> {
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
        result200 = resultData200 ? JobApplicationDto.fromJS(resultData200) : new JobApplicationDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<JobApplicationDto>(<any>null);
  }

  createRequestInterview(input: JobApplicationDto | null | undefined): Observable<JobApplicationDto> {
    let url_ = this.baseUrl + '/api/services/app/JobApplication/CreateRequestInterview';
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

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processRequestInterview(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processRequestInterview(<any>response_);
        } catch (e) {
          return <Observable<JobApplicationDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<JobApplicationDto>><any>_observableThrow(response_);
      }
    }));
  }

  processCreateRequestInterview(response: HttpResponseBase): Observable<JobApplicationDto> {
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
        result200 = resultData200 ? JobApplicationDto.fromJS(resultData200) : new JobApplicationDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<JobApplicationDto>(<any>null);
  }

  getDraftJobAds(): Observable<ListJobAdDto> {
    // const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + '/api/services/app/JobAd/GetDraftJobs';
    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
      // body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetDraftJobAds(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetDraftJobAds(<any>response_);
        } catch (e) {
          return <Observable<ListJobAdDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<ListJobAdDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetDraftJobAds(response: HttpResponseBase): Observable<ListJobAdDto> {
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
        result200 = resultData200 ? ListJobAdDto.fromJS(resultData200) : new ListJobAdDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<ListJobAdDto>(<any>null);
  }

  /**
* @param input (optional)
* @return Success
*/
  updateUpdateAssessmentResult(input: CompanyUserAssessmentDto | null | undefined): Observable<boolean> {
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
      return this.processupdateUpdateAssessmentResult(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processupdateUpdateAssessmentResult(<any>response_);
        } catch (e) {
          return <Observable<boolean>><any>_observableThrow(e);
        }
      } else
        return <Observable<boolean>><any>_observableThrow(response_);
    }));
  }

  protected processupdateUpdateAssessmentResult(response: HttpResponseBase): Observable<boolean> {
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
  inviteUserForAssessment(input: CompanyUserAssessmentDto | null | undefined): Observable<CompanyUserAssessmentDto> {

    let url_ = this.baseUrl + "/api/services/app/CompanyUserAssessment/InviteUserForAssessment";
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
      return this.processInviteUserForAssessment(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processInviteUserForAssessment(<any>response_);
        } catch (e) {
          return <Observable<CompanyUserAssessmentDto>><any>_observableThrow(e);
        }
      } else
        return <Observable<CompanyUserAssessmentDto>><any>_observableThrow(response_);
    }));
  }

  protected processInviteUserForAssessment(response: HttpResponseBase): Observable<CompanyUserAssessmentDto> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CompanyUserAssessmentDto.fromJS(resultData200);
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CompanyUserAssessmentDto>(<any>null);
  }

  getCompanyUserAssessments(request: PagedCompanyUserAssessmentResultRequestDto): Observable<ListCompanyUserAssessmentDto> {
    const content_ = JSON.stringify(request);
    let url_ = this.baseUrl + "/api/services/app/CompanyUserAssessment/GetAll?";
    if (request.keyword !== undefined)
      url_ += "Keyword=" + encodeURIComponent("" + request.keyword) + "&";
    if (request.type !== undefined)
      url_ += "Type=" + encodeURIComponent("" + request.type) + "&";
    if (request.skipCount !== undefined)
      url_ += "SkipCount=" + encodeURIComponent("" + request.skipCount) + "&";
    if (request.maxResultCount !== undefined)
      url_ += "MaxResultCount=" + encodeURIComponent("" + request.maxResultCount) + "&";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetCompanyUserAssessments(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetCompanyUserAssessments(<any>response_);
        } catch (e) {
          return <Observable<ListCompanyUserAssessmentDto>><any>_observableThrow(e);
        }
      } else
        return <Observable<ListCompanyUserAssessmentDto>><any>_observableThrow(response_);
    }));
  }


  private processGetCompanyUserAssessments(response: HttpResponseBase): Observable<ListCompanyUserAssessmentDto> {
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
        result200 = resultData200 ? ListCompanyUserAssessmentDto.fromJS(resultData200) : new ListJobAdDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<ListCompanyUserAssessmentDto>(<any>null);
  }

  getBehaviourResultDetailById(usertTestResultId): Observable<ListUserTestBehaviourDetailDto> {

    let url_ = this.baseUrl + "/api/services/app/CompanyUserAssessment/GetBehaviourResultDetailById?userTestResultId="+usertTestResultId;

    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      //body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetBehaviourDetail(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetBehaviourDetail(<any>response_);
        } catch (e) {
          return <Observable<ListUserTestBehaviourDetailDto>><any>_observableThrow(e);
        }
      } else
        return <Observable<ListUserTestBehaviourDetailDto>><any>_observableThrow(response_);
    }));
  }

  private processGetBehaviourDetail(response: HttpResponseBase): Observable<ListUserTestBehaviourDetailDto> {
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
        result200 = resultData200 ? ListUserTestBehaviourDetailDto.fromJS(resultData200) : new ListJobAdDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<ListUserTestBehaviourDetailDto>(<any>null);
  }


  getJobAdsForUser(input: JobAdSearchDtoDto | null | undefined): Observable<ListJobAdDto> {
    const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + `/api/services/app/JobAd/SearchJobAdForUser?`;
    // if (input.search !== undefined)
    //     url_ += "Search=" + encodeURIComponent("" + input.search) + "&";
    // if (input.locationIds !== undefined)
    //     url_ += "LocationIds=" + encodeURIComponent("" + input.locationIds) + "&";
    // if (input.employmentTypeIds !== undefined)
    //     url_ += "EmploymentTypeIds=" + encodeURIComponent("" + input.employmentTypeIds) + "&";
    // if (input.behaviourIds !== undefined)
    //     url_ += "BehaviourIds=" + encodeURIComponent("" + input.behaviourIds) + "&";
    // if (input.salaryRange !== undefined)
    //     url_ += "SalaryRange=" + encodeURIComponent("" + input.salaryRange) + "&";
    // if (input.experienceRange !== undefined)
    //     url_ += "ExperienceRange=" + encodeURIComponent("" + input.experienceRange) + "&";
    // if (input.type !== undefined)
    //     url_ += "Type=" + encodeURIComponent("" + input.type) + "&";
    url_ = url_.replace(/[?&]$/, "");

    const options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetJobAdsForUser(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetJobAdsForUser(<any>response_);
        } catch (e) {
          return <Observable<ListJobAdDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<ListJobAdDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetJobAdsForUser(response: HttpResponseBase): Observable<ListJobAdDto> {
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
        result200 = resultData200 ? ListJobAdDto.fromJS(resultData200) : new ListJobAdDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<ListJobAdDto>(<any>null);
  }

  getBookmarkedJobs(input: string | null | undefined): Observable<ListBookmarkedJobDto> {
    // const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + `/api/services/app/BookmarkedJob/GetBookmarkedJobs?Search${input}`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
      // body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetBookmarkedJobs(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetBookmarkedJobs(<any>response_);
        } catch (e) {
          return <Observable<ListBookmarkedJobDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<ListBookmarkedJobDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetBookmarkedJobs(response: HttpResponseBase): Observable<ListBookmarkedJobDto> {
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
        result200 = resultData200 ? ListBookmarkedJobDto.fromJS(resultData200) : new ListBookmarkedJobDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<ListBookmarkedJobDto>(<any>null);
  }

  getPendingInterview(input: JobAdSearchDtoDto): Observable<ListJobApplicationDto> {
    // const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + `/api/services/app/JobApplication/GetPendingInterview?Search=${input.search}`;

    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
      // body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetPendingInterview(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetPendingInterview(<any>response_);
        } catch (e) {
          return <Observable<ListJobApplicationDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<ListJobApplicationDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetPendingInterview(response: HttpResponseBase): Observable<ListJobApplicationDto> {
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
        result200 = resultData200 ? ListJobApplicationDto.fromJS(resultData200) : new ListJobApplicationDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<ListJobApplicationDto>(<any>null);
  }


  getUserPendingInterview(input: JobAdSearchDtoDto): Observable<ListJobApplicationDto> {
    // const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + `/api/services/app/JobApplication/GetUserPendingInterviews?Search=${input.search}`;

    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
      // body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetUserPendingInterview(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetUserPendingInterview(<any>response_);
        } catch (e) {
          return <Observable<ListJobApplicationDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<ListJobApplicationDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetUserPendingInterview(response: HttpResponseBase): Observable<ListJobApplicationDto> {
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
        result200 = resultData200 ? ListJobApplicationDto.fromJS(resultData200) : new ListJobApplicationDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<ListJobApplicationDto>(<any>null);
  }

  getBehaviours(): Observable<ListBehaviourDto> {
    let url_ = this.baseUrl + '/api/services/app/Behaviour/GetAll';
    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetBehaviours(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetBehaviours(<any>response_);
        } catch (e) {
          return <Observable<ListBehaviourDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<ListBehaviourDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetBehaviours(response: HttpResponseBase): Observable<ListBehaviourDto> {
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
        result200 = resultData200 ? ListBehaviourDto.fromJS(resultData200) : new ListBehaviourDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<ListBehaviourDto>(<any>null);
  }

  getPackages(): Observable<ListPackageDto> {
    let url_ = this.baseUrl + '/api/services/app/Package/GetAll';
    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetPackages(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetPackages(<any>response_);
        } catch (e) {
          return <Observable<ListPackageDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<ListPackageDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetPackages(response: HttpResponseBase): Observable<ListPackageDto> {
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
        result200 = resultData200 ? ListPackageDto.fromJS(resultData200) : new ListPackageDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<ListPackageDto>(<any>null);
  }

searchPublicJobsByCompany(input: JobAdSearchDtoDto | null | undefined): Observable<ListJobAdDto> {
  const content_ = JSON.stringify(input);
  let url_ = this.baseUrl + `/api/services/app/JobAd/SearchPublicJobsByCompany?`;
  // if (input.search !== undefined)
  //     url_ += "Search=" + encodeURIComponent("" + input.search) + "&";
  // if (input.locationIds !== undefined)
  //     url_ += "LocationIds=" + encodeURIComponent("" + input.locationIds) + "&";
  // if (input.employmentTypeIds !== undefined)
  //     url_ += "EmploymentTypeIds=" + encodeURIComponent("" + input.employmentTypeIds) + "&";
  // if (input.behaviourIds !== undefined)
  //     url_ += "BehaviourIds=" + encodeURIComponent("" + input.behaviourIds) + "&";
  // if (input.salaryRange !== undefined)
  //     url_ += "SalaryRange=" + encodeURIComponent("" + input.salaryRange) + "&";
  // if (input.experienceRange !== undefined)
  //     url_ += "ExperienceRange=" + encodeURIComponent("" + input.experienceRange) + "&";
  // if (input.type !== undefined)
  //     url_ += "Type=" + encodeURIComponent("" + input.type) + "&";
  url_ = url_.replace(/[?&]$/, "");

  const options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      })
  };

  return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processSearchPublicJobsByCompany(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processSearchPublicJobsByCompany(<any>response_);
          } catch (e) {
              return <Observable<ListJobAdDto>><any>_observableThrow(e);
          }
      } else {
          return <Observable<ListJobAdDto>><any>_observableThrow(response_);
      }
  }));
}

private processSearchPublicJobsByCompany(response: HttpResponseBase): Observable<ListJobAdDto> {
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
          result200 = resultData200 ? ListJobAdDto.fromJS(resultData200) : new ListJobAdDto();
          return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
  }
  return _observableOf<ListJobAdDto>(<any>null);
}

  searchByCompany(input: JobAdSearchDtoDto | null | undefined): Observable<ListJobAdDto> {
    const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + `/api/services/app/JobAd/SearchByCompany?`;
    // if (input.search !== undefined)
    //     url_ += "Search=" + encodeURIComponent("" + input.search) + "&";
    // if (input.locationIds !== undefined)
    //     url_ += "LocationIds=" + encodeURIComponent("" + input.locationIds) + "&";
    // if (input.employmentTypeIds !== undefined)
    //     url_ += "EmploymentTypeIds=" + encodeURIComponent("" + input.employmentTypeIds) + "&";
    // if (input.behaviourIds !== undefined)
    //     url_ += "BehaviourIds=" + encodeURIComponent("" + input.behaviourIds) + "&";
    // if (input.salaryRange !== undefined)
    //     url_ += "SalaryRange=" + encodeURIComponent("" + input.salaryRange) + "&";
    // if (input.experienceRange !== undefined)
    //     url_ += "ExperienceRange=" + encodeURIComponent("" + input.experienceRange) + "&";
    // if (input.type !== undefined)
    //     url_ += "Type=" + encodeURIComponent("" + input.type) + "&";
    url_ = url_.replace(/[?&]$/, "");

    const options_: any = {
        body: content_,
        observe: 'response',
        responseType: 'blob',
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    };

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
        return this.processSearchByCompany(response_);
    })).pipe(_observableCatch((response_: any) => {
        if (response_ instanceof HttpResponseBase) {
            try {
                return this.processSearchByCompany(<any>response_);
            } catch (e) {
                return <Observable<ListJobAdDto>><any>_observableThrow(e);
            }
        } else {
            return <Observable<ListJobAdDto>><any>_observableThrow(response_);
        }
    }));
}

private processSearchByCompany(response: HttpResponseBase): Observable<ListJobAdDto> {
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
            result200 = resultData200 ? ListJobAdDto.fromJS(resultData200) : new ListJobAdDto();
            return _observableOf(result200);
        }));
    } else if (status !== 200 && status !== 204) {
        return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
        }));
    }
    return _observableOf<ListJobAdDto>(<any>null);
}

  getCompanyJobAds(tenantId: number): Observable<ListJobAdDto> {
    // const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + `/api/services/app/JobAd/GetByCompanyId?tenantId=${tenantId}`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
      // body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetCompanyJobAds(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetCompanyJobAds(<any>response_);
        } catch (e) {
          return <Observable<ListJobAdDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<ListJobAdDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetCompanyJobAds(response: HttpResponseBase): Observable<ListJobAdDto> {
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
        result200 = resultData200 ? ListJobAdDto.fromJS(resultData200) : new ListJobAdDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<ListJobAdDto>(<any>null);
  }


  getCompany(): Observable<TenantDto> {
    let url_ = this.baseUrl + '/api/services/app/Company/GetUserCompany';
    url_ = url_.replace(/[?&]$/, '');
    const options_: any = {
        observe: 'response',
        responseType: 'blob',
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
        return this.processGetCompany(response_);
    })).pipe(_observableCatch((response_: any) => {
        if (response_ instanceof HttpResponseBase) {
            try {
                return this.processGetCompany(<any>response_);
            } catch (e) {
                return <Observable<TenantDto>><any>_observableThrow(e);
            }
        } else {
            return <Observable<TenantDto>><any>_observableThrow(response_);
        }
    }));
}

processGetCompany(response: HttpResponseBase): Observable<TenantDto> {
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
            result200 = resultData200 ? TenantDto.fromJS(resultData200) : new TenantDto();
            return _observableOf(result200);
        }));
    } else if (status !== 200 && status !== 204) {
        return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
        }));
    }
    return _observableOf<TenantDto>(<any>null);
}

  getCompanyBalance(): Observable<CompanyBalanceDto> {
    // const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + '/api/services/app/Company/GetCompanyBalance';
    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
      // body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetCompanyBalance(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetCompanyBalance(<any>response_);
        } catch (e) {
          return <Observable<CompanyBalanceDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<CompanyBalanceDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetCompanyBalance(response: HttpResponseBase): Observable<CompanyBalanceDto> {
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
        result200 = resultData200 ? CompanyBalanceDto.fromJS(resultData200) : new CompanyBalanceDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<CompanyBalanceDto>(<any>null);
  }

  getCompanyStats(): Observable<CompanyStatsDto> {
    // const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + '/api/services/app/JobAd/GetCompanyJobStats';
    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
      // body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetCompanyStats(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetCompanyStats(<any>response_);
        } catch (e) {
          return <Observable<CompanyStatsDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<CompanyStatsDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetCompanyStats(response: HttpResponseBase): Observable<CompanyStatsDto> {
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
        result200 = resultData200 ? CompanyStatsDto.fromJS(resultData200) : new CompanyStatsDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<CompanyStatsDto>(<any>null);
  }

  getCompanyStatsById(tenantId: number): Observable<CompanyStatsDto> {
    // const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + '/api/services/app/JobAd/GetCompanyJobStatsById?tenantId=' + tenantId;
    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
      // body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetCompanyStatsById(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetCompanyStatsById(<any>response_);
        } catch (e) {
          return <Observable<CompanyStatsDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<CompanyStatsDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetCompanyStatsById(response: HttpResponseBase): Observable<CompanyStatsDto> {
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
        result200 = resultData200 ? CompanyStatsDto.fromJS(resultData200) : new CompanyStatsDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<CompanyStatsDto>(<any>null);
  }

  getUserJobStats(): Observable<UserJobStatsDto> {
    // const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + '/api/services/app/JobAd/GetUserJobStats';
    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
      // body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetUserJobStats(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetUserJobStats(<any>response_);
        } catch (e) {
          return <Observable<UserJobStatsDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<UserJobStatsDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetUserJobStats(response: HttpResponseBase): Observable<UserJobStatsDto> {
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
        result200 = resultData200 ? UserJobStatsDto.fromJS(resultData200) : new UserJobStatsDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<UserJobStatsDto>(<any>null);
  }

  getCompanyByRegistrationNumber(registrationNumber: string): Observable<TenantDto> {
    let url_ = this.baseUrl + '/api/services/app/Company/GetCompanyByRegistrationNumber?registrationNumber=' + registrationNumber;
    url_ = url_.replace(/[?&]$/, '');
    const options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetCompanyByRegistrationNumber(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetCompanyByRegistrationNumber(<any>response_);
        } catch (e) {
          return <Observable<TenantDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<TenantDto>><any>_observableThrow(response_);
      }
    }));
  }

  processGetCompanyByRegistrationNumber(response: HttpResponseBase): Observable<TenantDto> {
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
        result200 = resultData200 ? TenantDto.fromJS(resultData200) : new TenantDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<TenantDto>(<any>null);
  }

  getCompanyBySlug(slug: string): Observable<TenantDto> {
    let url_ = this.baseUrl + '/api/services/app/Company/GetCompanyBySlug?slug=' + slug;
    url_ = url_.replace(/[?&]$/, '');
    const options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetCompanyBySlug(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetCompanyBySlug(<any>response_);
        } catch (e) {
          return <Observable<TenantDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<TenantDto>><any>_observableThrow(response_);
      }
    }));
  }

  processGetCompanyBySlug(response: HttpResponseBase): Observable<TenantDto> {
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
        result200 = resultData200 ? TenantDto.fromJS(resultData200) : new TenantDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<TenantDto>(<any>null);
  }


  getCompanyDashboardJobAdStats(): Observable<CompanyStatsDto> {
    // const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + '/api/services/app/Company/GetCompanyDashboardJobAdStats';
    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
      // body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetCompanyDashboardJobAdStats(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetCompanyDashboardJobAdStats(<any>response_);
        } catch (e) {
          return <Observable<CompanyStatsDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<CompanyStatsDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetCompanyDashboardJobAdStats(response: HttpResponseBase): Observable<CompanyStatsDto> {
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
        result200 = resultData200 ? CompanyStatsDto.fromJS(resultData200) : new CompanyStatsDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<CompanyStatsDto>(<any>null);
  }

  getMonthWiseJobStats(): Observable<ListMonthWiseJobStatsDto> {
    // const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + '/api/services/app/Company/GetMonthWiseJobStats';
    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
      // body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processMonthWiseJobStats(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processMonthWiseJobStats(<any>response_);
        } catch (e) {
          return <Observable<ListMonthWiseJobStatsDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<ListMonthWiseJobStatsDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processMonthWiseJobStats(response: HttpResponseBase): Observable<ListMonthWiseJobStatsDto> {
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
        result200 = resultData200 ? ListMonthWiseJobStatsDto.fromJS(resultData200) : new ListMonthWiseJobStatsDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<ListMonthWiseJobStatsDto>(<any>null);
  }

  getCompanyUserRoles(input: PagedUserRoleRequestDto | null | undefined): Observable<PagedResultDtoOfUserRoleDto> {
    const content_ = JSON.stringify(input);
    let url_ = this.baseUrl + `/api/services/app/Company/FetchCompanyUserRoles`;

    url_ = url_.replace(/[?&]$/, "");

    const options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetCompanyUserRoles(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetCompanyUserRoles(<any>response_);
        } catch (e) {
          return <Observable<PagedResultDtoOfUserRoleDto>><any>_observableThrow(e);
        }
      } else {
        return <Observable<PagedResultDtoOfUserRoleDto>><any>_observableThrow(response_);
      }
    }));
  }

  private processGetCompanyUserRoles(response: HttpResponseBase): Observable<PagedResultDtoOfUserRoleDto> {
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
        result200 = resultData200 ? PagedResultDtoOfUserRoleDto.fromJS(resultData200) : new PagedResultDtoOfUserRoleDto();
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<PagedResultDtoOfUserRoleDto>(<any>null);
  }

  changeUserRole(input: UserRoleDto | null | undefined): Observable<UserRoleDto> {
    let url_ = this.baseUrl + "/api/services/app/Company/ChangeCompanyUserRole";
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
      return this.processChangeUserRole(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processChangeUserRole(<any>response_);
        } catch (e) {
          return <Observable<UserRoleDto>><any>_observableThrow(e);
        }
      } else
        return <Observable<UserRoleDto>><any>_observableThrow(response_);
    }));
  }

  protected processChangeUserRole(response: HttpResponseBase): Observable<UserRoleDto> {
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
    return _observableOf<UserRoleDto>(<any>null);
  }

  deleteCompanyUser(id: number | null | undefined): Observable<void> {
    let url_ = this.baseUrl + "/api/services/app/Company/DeleteCompanyUser?";
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

}
