import { Component, ElementRef, Injector, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { JobAdDto, BookmarkJobDto, JobApplicationDto, ListJobAdDto } from 'src/shared/dto/company/job-ad-dto';
import { JobAdSearchDtoDto } from 'src/shared/dto/company/job-ad-search-dto';
import { UserJobStatsDto } from 'src/shared/dto/company/user-job-stats-dto';
import { DropdownOutputDto } from 'src/shared/dto/dropdown-dto';
import { PagedListingComponentBase } from 'src/shared/dto/paged-listing-component-base';
import { UserExperienceDto } from 'src/shared/dto/user/user-experience-dto';
import { UserProfileOutputDto } from 'src/shared/dto/user/user-profile-output-dto';
import { SearchTags, SearchByCatalog } from 'src/shared/enums/search-jobs-catalog';
import { CompanyProxyService } from 'src/shared/proxies/company-proxy.service';
import { JobsProxyService } from 'src/shared/proxies/jobs-proxy.service';
import { DropdownProxyService, AccountServiceProxy, ConfigurationServiceProxy } from 'src/shared/service-proxies';


const sortByDDItems: DropdownOutputDto[] = [
  { id: 'CreatedDateDesc', text: 'Latest jobs' } as DropdownOutputDto,
  { id: 'CreatedDateAsc', text: 'Oldest jobs' } as DropdownOutputDto,
  { id: 'SalaryMax', text: 'Highest salary' } as DropdownOutputDto,
  { id: 'SalaryMin', text: 'Lowest salary' } as DropdownOutputDto,
];

@Component({
  selector: 'app-public-jobs-list',
  templateUrl: './public-jobs-list.component.html',
  styleUrls: ['./public-jobs-list.component.css']
})
export class PublicJobsListComponent  extends PagedListingComponentBase<JobAdDto> implements OnInit, OnDestroy {
  searchTags: SearchTags[] = [];
  loading: boolean;
  jobAdSearchRequest = new JobAdSearchDtoDto();
  jobAds: JobAdDto[];
  userSubscription: Subscription;
  source: any;
  apiBaseUrl: string;
  userId: number | undefined;
  sortByDD = sortByDDItems;
  userJobStatus = new UserJobStatsDto();
  bookmarkJobDto: BookmarkJobDto = new BookmarkJobDto();
  jobApplicationDto: JobApplicationDto = new JobApplicationDto();
  userProfileResult = new UserProfileOutputDto();
  userProfileImg: string;
  employmentTypeDD: DropdownOutputDto[] = [];
  behaviourDD: DropdownOutputDto[] = [];
  experienceRangeDD: DropdownOutputDto[] = [];
  salaryRangeDD: DropdownOutputDto[] = [];
  userExperiences: UserExperienceDto[];
  designation: any;

  positionDD: DropdownOutputDto[] = [];
  statesDD: DropdownOutputDto[] = [];
  @ViewChild('search') search: ElementRef;

  searchJobAdForm = this.fb.group({
    location: [, ],
    employmentTypeIds: [, ],
    behaviourIds: [],
    positionIds: [, ],
    salaryMin: [, ],
    experienceMax: [, ],
    search: [, ],
    type: [],
  });

  options = {
    types: [],
    componentRestrictions: { country: 'MY' }
  };


  constructor(
    injector: Injector,
    private router: Router,
    private fb: FormBuilder,
    private companyService: CompanyProxyService,
    private jobsService: JobsProxyService,
    private activatedRoute: ActivatedRoute,
    private dropdownService: DropdownProxyService,
    private accountService: AccountServiceProxy,
    public spinner: NgxSpinnerService,
    configuration: ConfigurationServiceProxy,

  ) {
    super(injector);
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    // console.log(this.activatedRoute.snapshot.data['position']);
    // console.log(this.activatedRoute.snapshot.data['company']);
    // console.log(this.activatedRoute.snapshot.data['location']);
    this.userId = this.appSession.userId;
    this.apiBaseUrl = configuration.baseUrl;
  }

  ngOnInit(): void {
    this.userSubscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.jobAdSearchRequest.type = params.type;
      });
    if (!this.jobAdSearchRequest.sorting) {
      this.jobAdSearchRequest.sorting = 'CreatedDateDesc';
    }


    this.getJobAdsForUser();
    if (this.appSession.userId) {
      this.getUserJobStats();
      this.getUserProfile();
    }
    this.getStatesDD();
    this.getExperienceDD();
    this.getPositionDD();
    this.getBehaviourDD();
    this.getEmploymentTypeDD();

  }



  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }



  getEmploymentTypeDD(): void {
    this.dropdownService
      .getDropdownByUrl('/api/services/app/EmploymentType/GetEmploymentTypeDropdown')
      .pipe(finalize(() => {
      }))
      .subscribe((result) => {
        this.employmentTypeDD = result.items;
      });


  }



  getStatesDD(): void  {
    this.dropdownService
      .getDropdownByUrl('/api/services/app/Location/GetStatesDropdown?countryId=1')
      .pipe(finalize(() => {
      }))
      .subscribe((result) => {
        // result.items.forEach(i => {
        //   let text = i.value.split(',');
        //   if (text != null) {
        //     i.text = text.reverse()[1];
        //   }
        // });
        this.statesDD = result.items;
      });
  }

  getPositionDD(): void  {
    this.dropdownService
      .getDropdownByUrl('/api/services/app/Position/GetPositionDropdown')
      .pipe(finalize(() => {
      }))
      .subscribe((result) => {
        this.positionDD = result.items;
      });

  }

  getBehaviourDD(): void  {
    this.dropdownService
      .getDropdownByUrl('/api/services/app/Behaviour/GetDropdownFirstChar')
      .pipe(finalize(() => {
      }))
      .subscribe((result) => {
        this.behaviourDD = result.items;
      });

  }

  getExperienceDD(): void  {
    for (let i = 1; i <= 25; i++) {
      this.experienceRangeDD.push({ id: i.toString(), text: i.toString() + ' Year' } as DropdownOutputDto);
    }
  }

  getUserJobStats(): void {
    this.companyService
      .getUserJobStats()
      .subscribe((result: UserJobStatsDto) => {
        this.userJobStatus = result;
      });
  }

  onSortChange(value): void  {
    this.pageNumber = 1;
    this.refresh();
  }


  takeAssesment(): void  {
    if (!this.userProfileResult.behaviourTestResult) {
      this.router.navigate(['/assessment/behaviour']);
    }
    else if (this.userProfileResult.behaviourTestResult) {
      this.router.navigate(['/assessment/fl-culture-assessment']);
    }

  }


  getUserProfile(): void {

    this.accountService
      .getUserProfile(this.userId)
      .pipe(
        finalize(() => {

        })
      )
      .subscribe((result: UserProfileOutputDto) => {
        if (result) {
          this.userProfileResult = result;
          if (this.userProfileResult.id === 0) {
            this.router.navigate(['/account/user-profile']);
          }
        } else {
          this.router.navigate(['/account/user-profile']);
          this.notify.error('Something went wrong while processing your request.');
        }
        return;
      });
  }

  getJobAdsForUser(): void {
    this.refresh();
  }
  getYearDifference(date: Date): number {
    return new Date().getFullYear() - new Date(date).getFullYear();
  }


  onKeydown(event): void {
    if (event.key === 'Enter') {
      if (this.searchJobAdForm.get('search')?.value) {
        this.searchTags = this.searchTags.filter(t => t.name !== SearchByCatalog.search);
        const searchTag = new SearchTags();
        searchTag.name = SearchByCatalog.search;
        searchTag.id = event.id;
        searchTag.text = this.searchJobAdForm.get('search')?.value;
        this.searchTags.push(searchTag);
      }
      if (this.searchJobAdForm.get('salaryMin')?.value) {
        this.searchTags = this.searchTags.filter(t => t.name !== SearchByCatalog.salaryMin);
        const searchTag = new SearchTags();
        searchTag.name = SearchByCatalog.salaryMin;
        searchTag.id = event.id;
        searchTag.text = this.searchJobAdForm.get('salaryMin')?.value;
        this.searchTags.push(searchTag);
      }
      this.getJobAdsForUser();
    }

  }

  changeLocationTag(event: any): void{
    this.searchTags = this.searchTags.filter(t => t.name !== SearchByCatalog.location);
    if (event?.id) {
      const searchTag = new SearchTags();
      searchTag.name = SearchByCatalog.location;
      searchTag.id = event.id;
      searchTag.text = event.text;
      this.searchTags.push(searchTag);
    }
    this.getJobAdsForUser();
  }


  changeExperienceTag(event: any): void {
    this.searchTags = this.searchTags.filter(t => t.name !== SearchByCatalog.experienceMax);
    const searchTag = new SearchTags();
    searchTag.name = SearchByCatalog.experienceMax;
    searchTag.id = event.id;
    searchTag.text = event.text;
    this.searchTags.push(searchTag);


    this.getJobAdsForUser();
  }

  changeEmploymentTypeTag(event: any): void {
    this.searchTags = this.searchTags.filter(t => t.name !== SearchByCatalog.employmentType);
    let searchTag = new SearchTags();
    event.forEach(element => {
      searchTag = new SearchTags();
      searchTag.name = SearchByCatalog.employmentType;
      searchTag.id = element.id;
      searchTag.text = element.text;
      this.searchTags.push(searchTag);
    });

    this.getJobAdsForUser();
  }

  changePositionTag(event: any): void {
    this.searchTags = this.searchTags.filter(t => t.name !== SearchByCatalog.position);
    let searchTag = new SearchTags();
    event.forEach(element => {
      searchTag = new SearchTags();
      searchTag.name = SearchByCatalog.position;
      searchTag.id = element.id;
      searchTag.text = element.text;
      this.searchTags.push(searchTag);
    });

    this.getJobAdsForUser();
  }

  changeBehaviourTag(event: any): void {
    this.searchTags = this.searchTags.filter(t => t.name !== SearchByCatalog.behaviour);
    let searchTag = new SearchTags();
    event.forEach(element => {
      searchTag = new SearchTags();
      searchTag.name = SearchByCatalog.behaviour;
      searchTag.id = element.id;
      searchTag.text = element.text;
      this.searchTags.push(searchTag);
    });

    this.getJobAdsForUser();
  }

  removeTag(input: SearchTags): void {

    let value = this.searchJobAdForm.get(input.name)?.value;
    if (value instanceof Array) {
      // this.searchTags = this.searchTags.filter(t => t.name == input.name && t.id != input.id);

      const filtered = this.searchTags.filter(t => t.name === input.name && t.id !== input.id && t.text !== input.text);
      if (filtered.length > 0) {
        filtered.forEach(element => {
          this.searchTags = this.searchTags.filter(t => t.name !== element.name && t.text !== element.text);
          this.searchTags.push(element);
        });
      }
      else {

        this.searchTags = this.searchTags.filter(t => t.name !== input.name);


      }
      value = this.searchTags.filter(t => t.name === input.name).map(s => s.id);

      // value = value.filter(t=> t === input.id && this.searchTags.map(m=>m.id).includes(t));
    }
    else {
      this.searchTags = this.searchTags.filter(t => t.name !== input.name);
      value = null;
    }
    this.searchJobAdForm.controls[input.name].setValue(value);

    this.getJobAdsForUser();
  }




  protected list(request: JobAdSearchDtoDto, pageNumber: number, finishedCallback: Function): void {


    this.spinner.show('jobSpinner');
    this.loading = true;
    this.jobAdSearchRequest.search = this.searchJobAdForm.get('search')?.value;
    this.jobAdSearchRequest.location = this.searchJobAdForm.get('location')?.value;
    this.jobAdSearchRequest.experienceMax = this.searchJobAdForm.get('experienceMax')?.value;
    this.jobAdSearchRequest.salaryMin = this.searchJobAdForm.get('salaryMin')?.value;
    this.jobAdSearchRequest.positionIds = this.searchJobAdForm.get('positionIds')?.value;
    this.jobAdSearchRequest.behaviourIds = this.searchJobAdForm.get('behaviourIds')?.value;
    this.jobAdSearchRequest.employmentTypeIds = this.searchJobAdForm.get('employmentTypeIds')?.value;
    this.jobAdSearchRequest.skipCount = request.skipCount;
    this.jobAdSearchRequest.maxResultCount = request.maxResultCount;
    this.jobAdSearchRequest.type = this.activatedRoute.snapshot.params.type;
    this.jobsService
      .getJobAdsForUser(this.jobAdSearchRequest)
      .pipe(
        finalize(() => {

        })
      )
      .subscribe((result: ListJobAdDto) => {
        this.jobAds = result.items;
        this.loading = false;
        this.spinner.hide('jobSpinner');
        this.showPaging(result, pageNumber);
        return;
      });
  }

  protected delete(entity: JobAdDto): void {
    throw new Error('Method not implemented.');
  }
}
