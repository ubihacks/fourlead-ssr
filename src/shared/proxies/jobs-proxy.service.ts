import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponseBase, HttpResponse } from '@angular/common/http';
import { Observable, throwError as _observableThrow, of as _observableOf, throwError, of } from 'rxjs';
import { UserTestDto } from '../dto/user/user-test-dto';
import { UserTestResultDto } from '../dto/user/user-test-result.dto';
import { CompanyUserAssessmentDto } from '../dto/company/company-user-assessment-dto';
import { mergeMap as _observableMergeMap, catchError as _observableCatch, mergeMap, catchError } from 'rxjs/operators';
import { BaseProxyService } from './base-proxy.service';
import { AppConfigService } from '../AppConfigService';
import { ContactUsDto } from '../dto/auth-models';
import { ListJobAdDto, BookmarkJobDto, JobApplicationDto, JobAdDto } from '../dto/company/job-ad-dto';
import { JobAdSearchDtoDto } from '../dto/company/job-ad-search-dto';

@Injectable()
export class JobsProxyService extends BaseProxyService {
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
 * @param id (optional)
 * @return Success
 */
withdraw(id: number | null | undefined, deleteUrl: string | null | undefined): Observable<void> {
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
 * @param id (optional)
 * @return Success
 */
removeBookmark(id: number | null | undefined, deleteUrl: string | null | undefined): Observable<void> {
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
        return this.processRemoveBookmark(response_);
    })).pipe(_observableCatch((response_: any) => {
        if (response_ instanceof HttpResponseBase) {
            try {
                return this.processRemoveBookmark(<any>response_);
            } catch (e) {
                return <Observable<void>><any>_observableThrow(e);
            }
        } else
            return <Observable<void>><any>_observableThrow(response_);
    }));
}

protected processRemoveBookmark(response: HttpResponseBase): Observable<void> {
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
* @param input  string
* @return Success
*/
markJobAsComplete(input: JobAdDto | null | undefined): Observable<boolean> {
    let url_ = this.baseUrl + "/api/services/app/JobAd/MarkJobAsComplete";
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
        return this.processMarkJobAsComplete(response_);
    })).pipe(_observableCatch((response_: any) => {
        if (response_ instanceof HttpResponseBase) {
            try {
                return this.processMarkJobAsComplete(<any>response_);
            } catch (e) {
                return <Observable<boolean>><any>_observableThrow(e);
            }
        } else
            return <Observable<boolean>><any>_observableThrow(response_);
    }));
}

protected processMarkJobAsComplete(response: HttpResponseBase): Observable<boolean> {
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

}
